<script lang="ts">
	import Anime from '../../components/Anime.svelte';
	import type { PageData } from './$houdini';
	import SearchAnime from '../../components/searchAnime.svelte';

    export let data: PageData;

	$: ({ AnimeSearch } = data);
	$: anime = $AnimeSearch.data?.Page?.media;
</script>

<main class="h-full w-full bg-gray-500">
	<SearchAnime />
	<div>
		{#if $AnimeSearch.fetching}
			<p>Loading...</p>
		{:else if $AnimeSearch.data?.Page?.media !== undefined && $AnimeSearch.data?.Page?.media !== null}
			{#each Object.values(anime) as media}
				<Anime anime={media} />
			{/each}
		{/if}
	</div>
</main>
