import { graphql } from '$houdini';

export const _houdini_load = graphql(`
	query TrendingAnime($page: Int = 1, $perPage: Int = 6) {
		Page(page: $page, perPage: $perPage) @paginate {
			pageInfo {
				total
				currentPage
				lastPage
				hasNextPage
				perPage
			}
			media(type: ANIME, sort: TRENDING_DESC)  {
				...TrendingInfo 
			}
		}
	}
`);
