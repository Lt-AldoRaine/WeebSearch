<script lang="ts">
	import { fragment, graphql } from '$houdini';
	import type { Trending } from '$houdini';

	export let trending: Trending;

	// prettier-ignore
	$: info = fragment(
		trending,
		graphql(`
    fragment TrendingInfo on Media {
       id 
       title {
         romaji  
         english 
       }
       coverImage {
         extraLarge 
      } 
      siteUrl
    }
`));
</script>

<a href={$info.siteUrl}>
	<img
		class="h-max w-max"
		src={$info.coverImage?.extraLarge}
		alt={$info.title?.english || $info.title?.romaji}
	/>
	<p class="text-2xl">{@html $info.title?.english || $info.title?.romaji}</p>
</a>
