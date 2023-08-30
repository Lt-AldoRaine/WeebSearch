<script lang="ts">
	import Trending from '../components/Trending.svelte';
	import type { PageData } from './$houdini';
	import SearchAnime from '../components/searchAnime.svelte';
	import { PendingValue } from '$houdini';

	export let data: PageData;

	$: ({ TrendingAnime } = data);
	$: anime = $TrendingAnime.data?.Page?.media;
</script>

<main class="h-screen w-screen bg-gray-500">
	<SearchAnime />
	<div class="grid grid-rows-2 grid-cols-6">
		{#if $TrendingAnime.fetching}
			<p>Loading...</p>
		{:else if $TrendingAnime.data?.Page?.media !== undefined && $TrendingAnime.data?.Page?.media !== null}
			{#each Object.values(anime) as media}
				<div class="transform hover:scale-105 transition ease-in-out duration-500">
					<Trending trending={media} />
				</div>
			{/each}
		{/if}
	</div>
</main>
