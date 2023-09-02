import { redirect } from '@sveltejs/kit';
import { loadAll, load_AnimeSearch, load_TrendingAnime } from '$houdini';
import type { PageLoadEvent, PageLoad } from './$houdini';

export function _houdini_afterLoad({ data }: PageLoadEvent) {
	if (data?.AnimeSearch?.Page?.media.length === 0) {
		throw redirect(300, window.location.href);
	}
}

export const load: PageLoad = async (event) => {
	return {
		...(await loadAll(
			load_TrendingAnime({ event }),
			load_AnimeSearch({ event, variables: { search: event.params.search } })
		))
	};
};
