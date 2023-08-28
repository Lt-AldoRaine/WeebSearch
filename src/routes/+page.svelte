<script lang="ts">
	import type { PageData } from './$houdini';
	import Anime from '../components/Anime.svelte';
    import { searchAnime } from '../components/searchAnime'

	export let data: PageData;

	let input = '';

    async function handleSearch() {
        await searchAnime(input)
    }

	$: ({ TrendingAnimeInfo } = data);
</script>

<h1>Anime Search</h1>
<input type="text" bind:value={input} placeholder="Search Anime" />
<button class="w-10 h-4 bg-gray-400" on:click={handleSearch} />

<div class="grid grid-rows-2 grid-cols-7">
	{#each $TrendingAnimeInfo.data?.Page?.media as media}
		<Anime anime={media} />
	{/each}
</div>
