<script lang="ts">
	import { fragment, graphql } from '$houdini';
	import type { AnimeInfo } from '$houdini';

	export let anime: AnimeInfo;
	// prettier-ignore
	$: info = fragment(
		anime,
		graphql(`
    fragment AnimeInfo on Media {
       id 
       title {
         romaji  
         english 
       }
       coverImage  {
         large 
      } 
	    isAdult
      description
	    genres
      siteUrl
	    episodes
	    averageScore
    }

`));
</script>

{#if !$info.isAdult}
	<div class="flex rounded-lg bg-gray-400 h-fit w-fit m-8 shadow-2xl shadow-inner">
		{#if $info.coverImage}
			<img
				class="h-auto object-cover md:w-auto rounded-lg"
				src={$info?.coverImage?.large}
				alt={$info?.title?.english || $info?.title?.romaji}
			/>
		{/if}
		<div class="flex flex-col p-4">
			<p class="text-2xl text-gray-100 mb-2"><a href={$info.siteUrl}>{@html $info?.title?.english || $info.title?.romaji}</a></p>
			<p class="text-lg text-gray-100 mb-4">{@html $info?.description || ''}</p>
      <ul class="flex gap-4">
        {#each $info.genres as genre}
          <li class="bg-gray-500 p-2 text-gray-100 text-bold rounded-md">{genre}</li>
        {/each}
      </ul>
		</div>
	</div>
{/if}
