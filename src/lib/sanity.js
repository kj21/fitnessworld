import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID

// Only create the client when a project ID is configured.
// Without this guard, createClient throws at module-load time and crashes
// the whole React app — resulting in a blank page on Vercel.
export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
      apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01',
      useCdn: true,
    })
  : null

const builder = projectId ? imageUrlBuilder(sanityClient) : null

/** Build a Sanity image URL. Usage: urlFor(image).width(800).url() */
export function urlFor(source) {
  return builder ? builder.image(source) : null
}
