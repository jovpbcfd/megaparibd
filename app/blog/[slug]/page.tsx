import Link from 'next/link'
import { client } from '@/lib/sanity-client'
import { getBlogBySlug } from '@/lib/get-blog'
import BlogBody from '@/components/blog-body'
import TableOfContent from '@/components/blog-table-content'
import BlogPostList from '@/components/blog-post-list'

export async function generateStaticParams() {
    const query = '*[_type == $type]{ slug }'
    const params = { type: 'post-mega' }

    const posts = await client.fetch(query, params)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return posts.map((post: { slug: any }) => ({
        slug: post.slug.current,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const blog = await getBlogBySlug(slug)
    const currentPost = blog?.data?.currentPost ?? {}

    return {
        title: currentPost.title || 'Blog',
        description: currentPost.description || '',
        robots: {
            index: false, // noindex
            follow: false, // nofollow
        },
        openGraph: {
            title: currentPost.title || 'Blog',
            description: currentPost.description || '',
            url: `${process.env.APP_DOMAIN}/blogs/${slug}`,
            images: currentPost.mainImage.asset.url,
        },
        twitter: {
            card: 'summary_large_image',
            title: currentPost.title || 'Blog',
            description: currentPost.description || '',
            images: currentPost.mainImage.asset.url,
        },
        alternates: {
            cannonical: `${process.env.APP_DOMAIN}/blogs/${slug}`,
        },
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const blog = await getBlogBySlug(slug)

    const { currentPost, otherBlogs } = blog?.data

    return (
        <section className="bg-[#fffdf4] py-[2rem] px-[10px] mt-[4rem]">
            <div className="max-w-[86.25rem] mx-auto grid place-content-center grid-rows-[auto,1fr,auto] md:grid-rows-1 md:grid-cols-[auto,50rem,auto]">
                <aside className="h-auto hidden md:sticky md:top-[20px] md:h-[calc(100vh-30px)] lg:block">
                    <div className="flex flex-col items-center px-10 py-10 gap-6 bg-gray-100 rounded-md shadow-xs">
                        <p className="font-bold text-xl text-stone-700">
                            Sign-up Today at
                            <span className="block">Panalobet</span>
                        </p>

                        <Link
                            href="#"
                            className="bg-stone-700 text-slate-200 font-bold w-full text-center py-3 rounded-md"
                        >
                            Sign-up
                        </Link>
                        <nav>
                            <ul className="flex items-center gap-6 md:gap-8">
                                <li>
                                    <Link
                                        href="#"
                                        aria-label="Facebook Icon"
                                        className="block w-full p-2 bg-stone-700 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-slate-200"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        aria-label="Instagram Icon"
                                        className="block w-full p-2 bg-stone-700 rounded-full"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-slate-200"
                                        >
                                            <rect
                                                width="20"
                                                height="20"
                                                x="2"
                                                y="2"
                                                rx="5"
                                                ry="5"
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        aria-label="Telegram Icon"
                                        className="block w-full p-2 bg-stone-700 rounded-full"
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-slate-200"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
                                                fill="#0F0F0F"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <article className="mx-auto flex flex-col gap-10 text-black md:max-w-[44rem] md:mx-10">
                    <BlogBody data={currentPost} />
                </article>
                <aside className="h-auto hidden md:sticky md:top-[20px] md:h-[calc(100vh-30px)] lg:block">
                    <div className="text-gray-1000 mb-1 mt-[7px] text-xl font-medium">
                        On this page
                    </div>
                    <div className="flex flex-col gap-8">
                        <nav className="relative after:content-[''] after:block after:absolute after:bg-stone-300 after:bottom-[-20px] after:h-[1px] after:w-full">
                            <TableOfContent currentPost={currentPost} />
                        </nav>
                        <div>
                            <div className="flex items-center gap-2 mt-2">
                                <Link
                                    href="#"
                                    className="text-stone-700 text-md hover:text-stone-950"
                                >
                                    Register now on Panalobet
                                </Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-stone-700 "
                                >
                                    <path d="M15 3h6v6" />
                                    <path d="M10 14 21 3" />
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-4"></div>
            <div className="container mx-auto">
                <BlogPostList otherPost={otherBlogs} />
            </div>
        </section>
    )
}
