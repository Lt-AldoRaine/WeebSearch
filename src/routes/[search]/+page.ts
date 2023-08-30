import { graphql } from '$houdini';
import { redirect } from '@sveltejs/kit';
import type { AnimeSearchVariables, PageLoadEvent } from './$houdini';

export const _houdini_load = graphql(`
	query AnimeSearch($search: String, $id: Int) @loading {
		Page(page: 1, perPage: 60) @paginate {
			pageInfo {
				total
				currentPage
				lastPage
				hasNextPage
				perPage
			}
			media(id: $id, search: $search, sort: POPULARITY)  {
				...AnimeInfo 
			}
		}
	}
`);

export const _AnimeSearchVariables: AnimeSearchVariables = (event) => {
    return {
        search: event.params.search
    }
}

export function _houdini_afterLoad({ data }: PageLoadEvent) {
  if (data?.AnimeSearch?.Page?.media.length === 0) {
    throw redirect(300, window.location.href)
  }
}
