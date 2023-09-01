import { redirect } from '@sveltejs/kit';
import { load_AnimeSearch } from '$houdini';
import type { AnimeSearchVariables, PageLoadEvent, PageLoad } from './$houdini';

export const _AnimeSearchVariables: AnimeSearchVariables = (event) => {
	return {
		search: event.params.search
	};
};

export function _houdini_afterLoad({ data }: PageLoadEvent) {
	if (data?.AnimeSearch?.Page?.media.length === 0) {
		throw redirect(300, window.location.href);
	}
}

export const load: PageLoad = async (event) => {
	return {
		...(await load_AnimeSearch({
			event,
			variables: {
				search: event.params.search
			}
		}))
	};
};
