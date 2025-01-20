import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { getFormattedDate } from '@/lib/util'
import { urlFor } from '@/lib/sanity-client'

const customComponents = {
    types: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        image: ({ value }: { value: any }) => {
            if (!value?.asset) {
                return <p>Image not found</p> // Fallback if no image asset is available
            }

            const imageUrl = urlFor(value?.asset)?.width(705).url()

            return (
                <div className="blog-image relative w-[705px] h-[405px] mb-4">
                    <Image
                        src={imageUrl}
                        alt={value?.alt || 'Image'}
                        title={value?.title || 'Image'}
                        // Specify the height (aspect ratio)
                        quality={75}
                        layout="fill"
                        priority
                        className="absolute object-cover object-center rounded-xl"
                    />
                </div>
            )
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        button: ({ value }: { value: any }) => (
            <button>
                <a href={value?.url} target="_blank" rel="noopener noreferrer">
                    {value?.text}
                </a>
            </button>
        ),
    },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogBody({ data }: { data: any }) {
    if (!data) return

    return (
        <>
            <header className="mt-4">
                <h1 className="font-bold text-xl md:text-4xl md:mb-4">{data.title}</h1>
                <div className="flex items-center gap-4 mt-8">
                    <figure className="relative w-[50px] h-[50px]">
                        <Image
                            src={data.author.image.asset.url}
                            alt={data.author.name}
                            title={data.author.name}
                            width={50}
                            height={50} // Specify the height (aspect ratio)
                            quality={75}
                            priority
                            className="absolute w-[50px] h-[50px] rounded-full"
                        />
                    </figure>
                    <div>
                        <p className="font-bold text-md text-[#15171a]">{data.author.name}</p>
                        <p className="text-gray-500 text-sm">
                            {getFormattedDate(data.publishedAt)}
                            <span> - </span>
                            <span>2 min read</span>
                        </p>
                    </div>
                </div>
            </header>
            <div className="blog-content text-justify">
                <PortableText value={data?.body} components={customComponents} />
            </div>
        </>
    )
}
