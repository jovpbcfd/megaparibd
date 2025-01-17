import { client } from '@/lib/sanity-client'
import { getBlogBySlug } from '@/lib/get-blog'
import BlogBody from '@/components/blog-body'

export async function generateStaticParams() {
    const query = '*[_type == $type]{ slug }'
    const params = { type: 'post-mega' }

    const posts = await client.fetch(query, params)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return posts.map((post: { slug: any }) => ({
        slug: post.slug.current,
    }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    const blog = await getBlogBySlug(slug)

    const { currentPost } = blog?.data

    return (
        <section className="bg-[#fffdf4] py-[2rem] px-[10px] mt-[4rem]">
            <article className="max-w-4xl mx-auto flex flex-col gap-10 text-black ">
                <BlogBody data={currentPost} />
            </article>
        </section>
    )
}
