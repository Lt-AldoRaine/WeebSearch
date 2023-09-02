<script lang="ts">
	import AnimeInfoCard from '../../components/AnimeInfoCard.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	let { AnimeSearch } = data;
	$: ({ AnimeSearch } = data);
	$: anime = $AnimeSearch.data?.Page?.media;
</script>

<div class="grid sm:grid-cols-1 md:grid-cols-2 h-full w-full max-w-fit">
	{#if anime !== undefined && anime !== null}
		{#each Object.values(anime) as media}
			<AnimeInfoCard anime={media} />
		{/each}
	{/if}
</div>
