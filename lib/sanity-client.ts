import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET_ID,
    apiVersion: process.env.SANITY_STUDIO_API_VERSION, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)

// Function to build image URL
export const urlFor = (source: SanityImageSource) => builder.image(source)
