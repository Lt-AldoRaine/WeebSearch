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
                extraLarge
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
	<div class="flex flex-col md:flex-row rounded-lg max-h-item min-w-screen m-8 shadow-lg border-2 border-accent overflow-x-hidden">
		<img
			class="h-full md:w-auto max-w-min hidden md:inline-block object-cover rounded-l-lg m-0 backface-hidden"
			src={$info.coverImage?.large || ''}
			alt={$info.title?.english || $info?.title?.romaji}
		/>
		<div class="flex flex-col p-4">
			<p class="text-3xl mb-4">
				<a class="link link-primary hover:text-primary-focus" href={$info.siteUrl}>{@html $info.title?.english || $info.title?.romaji}</a>
			</p>
			<div class="flex-1 text-md mb-4 break-normal line-clamp-3 md:line-clamp-5">
				{@html $info.description || ''}
			</div>
			<div class="flex flex-col mt-2 mb-4 gap-4">
				<p class=" font-bold text-md">
					START DATE:
					<span class="font-normal text-sm"
						>{$info.startDate?.month || ''}/{$info.startDate?.day || ''}/{$info.startDate?.year ||
							''}</span
					>
				</p>
				<p class=" font-bold text-md">
					STATUS:
					<span class="font-normal text-sm">{$info.status || 'Not Available'}</span>
				</p>
				{#if $info.averageScore}
					<p class=" font-bold text-md">
						AVERAGE SCORE:
						<span class="font-normal text-sm">{$info.averageScore}%</span>
					</p>
				{/if}
			</div>
			<div class="flex gap-4 text-bold w-fit">
				{#each $info.genres as genre}
					<button class="bg-accent p-2 rounded-lg hover:bg-accent-focus cursor-pointer text-black">{genre}</button>
				{/each}
			</div>
		</div>
	</div>
{/if}
