<script>
	import '../app.postcss';
	import SearchBar from '../components/SearchBar.svelte';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<main class="w-screen h-full w-full min-w-screen min-h-screen flex flex-col justify-between">
	<header class="w-full flex items-center justify-between">
		<SearchBar />
		<div>
			<input
				data-toggle-theme="cupcake,forest"
				data-act-class="pl-4"
				type="checkbox"
				class="toggle toggle-secondary mr-8"
			/>
		</div>
	</header>

	<slot />

	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<div>
			<p>Copyright © 2023 - All right reserved by @Lt_AldoRaine</p>
		</div>
	</footer>
</main>
