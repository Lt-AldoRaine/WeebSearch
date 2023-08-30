<script lang="ts">
	import { goto } from '$app/navigation';

  let input = ''

	const searchAnime = async (): Promise<void> => {
		if (input) {
			await goto(`/${encodeURIComponent(input)}`);
		}
	};

	const formHandler = async (event) => {
		searchAnime();

		event.target.reset();
	};
</script>

<div>
	<form on:submit|preventDefault={formHandler}>
		<input class="mb-10" type="text" bind:value={input} placeholder="Search Anime" />
		<button class="w-10 h-6 bg-gray-400" type="submit" />
	</form>
</div>
