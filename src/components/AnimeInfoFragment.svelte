<script lang="ts">
	import { fragment, graphql } from '$houdini';
	import type { AnimeInfo } from '$houdini';

	export let anime: AnimeInfo;
	// prettier-ignore
	$: info = fragment(anime, graphql(`
        fragment AnimeInfo on Media {
            id
            title {
                english
                romaji
            }
            description
            siteUrl
            status
            isAdult
            genres 
            coverImage {
                large
            }
            startDate {
                year
                month
                day
            }
            averageScore
        }
`))
</script>

{#if !$info.isAdult}
	<div
		class="flex flex-row rounded-lg bg-gray-400 min-h-item w-fit m-8 drop-shadow-xl"
	>
		<img
			class="h-auto object-fit rounded-l-lg m-0"
			src={$info.coverImage?.large || ''}
			alt={$info.title?.english || $info?.title?.romaji}
		/>
		<div class="flex flex-col p-4 h-min">
			<p class="text-2xl text-gray-100 mb-2 ">
				<a href={$info.siteUrl}>{@html $info.title?.english || $info.title?.romaji}</a>
			</p>
			<p class="text-md text-gray-100 mb-4 overflow-truncate line-clamp-5">
				{@html $info.description || ''}
			</p>
			<div class="flex flex-col mt-2 mb-4">
				<p class="text-gray-100 font-semibold text-md">
					START DATE:
					<span class="font-normal text-sm">{$info.startDate.month || ''}/{$info.startDate.day || ''}/{$info.startDate.year || ''}</span>
				</p>
				<p class="text-gray-100 font-semibold text-md">
					STATUS:
					<span class="font-normal text-sm">{$info.status}</span>
				</p>
				<p class="text-gray-100 font-semibold text-md">
					AVERAGE SCORE:
					<span class="font-normal text-sm">{$info.averageScore}%</span>
				</p>
			</div>
			<ul class="flex gap-4 text-gray-100 text-bold">
				{#each $info.genres as genre}
					<li class="bg-gray-500 p-2 rounded-lg">{genre}</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
