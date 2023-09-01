<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	let { TrendingAnime } = data;
	$: ({ TrendingAnime } = data);

	let anime = $TrendingAnime.data?.Page?.media;
</script>

{#if $TrendingAnime.fetching}
	<p class="text-2xl bg-primary place-content-center">Loading...</p>
{:else if $TrendingAnime.data?.Page?.media !== undefined && $TrendingAnime.data?.Page?.media !== null}
	<div class="min-w-full text-center">
		<span class="text-6xl font-bold mx-20 text-primary">Trending Anime</span>
	</div>
	<div class="flex flex-wrap justify-items-center gap-8 mx-10 mt-20">
		{#each Object.values(anime) as media}
			<div class="flex-1 transform hover:scale-105 transition ease-in-out duration-600">
				<a href={media?.siteUrl}>
					<img
						class="relative h-full w-full object-cover object-top rounded-lg backface-hidden"
						src={media?.coverImage?.extraLarge}
						alt={media?.title?.english || media?.title?.romaji}
					/>
					<p class="mt-1 text-lg text-center font-bold text-secondary">
						{@html media?.title?.english || media?.title?.romaji}
					</p>
				</a>
			</div>
		{/each}
	</div>
{/if}
