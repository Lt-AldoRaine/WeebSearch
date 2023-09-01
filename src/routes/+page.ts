import type { PageLoad } from './$houdini'
import { load_TrendingAnime } from '$houdini'

export const load: PageLoad = async (event) => {
  return {
    ...(await load_TrendingAnime({ event }))
  }
}
