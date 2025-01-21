import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity-client'
import { getFormattedDate } from '@/lib/util'

type Post = {
    _id: string
    title: string
    slug: {
        current: string
        _type: string
    }
    mainImage: {
        alt: string | null
        asset: {
            url: string
        }
    }
    publishedAt: string
    description: string
}

export default function BlogPostList({ otherPost }: { otherPost: Post[] }) {
    return (
        <>
            <div className="mt-8 mb-4">
                <h2 className="text-2xl font-bold">Other Post</h2>
                <p className="text-gray-900">See all other post</p>
            </div>
            <nav className="pt-4">
                <ul className="flex flex-row gap-4">
                    {otherPost.map((item: Post) => (
                        <li key={item._id}>
                            <Link
                                href={`/blog/${item.slug.current}`}
                                className="flex items-center flex-col gap-[24px]"
                            >
                                <div className="relative w-[280px] h-[175px] rounded-md bg-gray-50 flex items-left justify-center md:w-[220px] md:h-[135px]">
                                    <Image
                                        alt={item.title}
                                        src={urlFor(item?.mainImage?.asset.url)
                                            .width(280)
                                            .height(175)
                                            .url()}
                                        width={280}
                                        height={170}
                                        loading="eager"
                                        className="absolute h-full w-full object-cover rounded-md"
                                    />
                                </div>
                                <div className="w-full md:w-full">
                                    <p className="font-bold text-[#15171a] md:text-md">
                                        {item.title}
                                    </p>
                                    <p className="text-md mt-[6px] leading-tight">
                                        {item.description}
                                    </p>

                                    <div className="text-sm text-[rgba(0,0,0,.55)] mt-4">
                                        <span>Posted</span>
                                        <span> on </span>
                                        <span>{getFormattedDate(item.publishedAt)} </span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
