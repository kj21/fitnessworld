import { useParams } from 'react-router-dom'
import StudioDetail from './StudioDetail'
import Placeholder from './Placeholder'
import { useStudios } from '../lib/studios.js'

/**
 * /:slug → the studio with that slug, from Sanity.
 * Unknown slugs fall through to the generic Placeholder once the list has
 * loaded; while loading we render nothing to avoid a flash of "not found".
 */
export default function StudioRoute() {
  const { slug = '' } = useParams()
  const { studios, loading } = useStudios()
  const studio = studios.find((s) => s.slug === slug.toLowerCase())

  if (studio) return <StudioDetail data={studio} />
  if (loading) return null
  return <Placeholder />
}
