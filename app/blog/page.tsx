import { client, urlFor } from '@/lib/sanity-client'
import Link from 'next/link'
import Image from 'next/image'
import { getFormattedDate } from '@/lib/util'

type Post = {
    _id: string
    title: string
    publishedAt: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mainImage: any
    author: {
        name: string
        image: {
            asset: string
        }
    }
    slug: {
        current: string
    }
    description: string
}

const POSTS_QUERY = `*[_type == "post-mega"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
       name, 
       image {
        asset->{
          url
        }
      }
      },
    publishedAt,
    description,
    mainImage {
       alt,
      asset->{
        url
       
      }
    }
  }`

function PostList({ post }: { post: Post }) {
    return (
        <Link
            key={post._id}
            href={`/blog/${post.slug.current}`}
            className="flex flex-col items-center gap-[24px] md:flex-row mx-[20px]"
        >
            <div className="relative w-[280px] h-[175px] rounded-md bg-gray-50 flex items-center justify-center md:w-[220px] md:h-[135px]">
                <Image
                    alt={post.title}
                    src={urlFor(post?.mainImage).width(100).height(100).url()}
                    width={100}
                    height={100}
                    loading="eager"
                    className="absolute h-full w-full object-fill rounded-md"
                />
            </div>
            <div className="w-full md:w-[50%]">
                <p className="font-bold text-[#15171a] md:text-xl">{post.title}</p>
                <p className="text-[1rem] mt-[6px] leading-tight">{post.description}</p>

                <div className="text-sm text-[rgba(0,0,0,.55)] mt-4">
                    <span>By </span>
                    <span>{post.author.name} </span>
                    <span> — </span>
                    <span>{getFormattedDate(post.publishedAt)} </span>
                </div>
            </div>
        </Link>
    )
}

export const revalidate = 5

export default async function BlogPage() {
    // data
    const posts = await client.fetch(POSTS_QUERY)

    return (
        <section className="bg-[#fffdf4] py-[2rem] mt-[2rem]">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                {posts.length === 0 ? (
                    <p>No blog post available</p>
                ) : (
                    <ul>
                        {posts.map((post: Post, index: number) => {
                            return <PostList post={post} key={index} />
                        })}
                    </ul>
                )}
            </div>
        </section>
    )
}
