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
      description
      isAdult
      source
      genres
      volumes
      episodes
      status
      averageScore
      coverImage {
        large 
      }
    }

`));
</script>

<div>
	<p>{JSON.stringify($info?.title?.english)}</p>
	<img src={$info?.coverImage?.large} alt={$info?.title?.english} />
</div>
