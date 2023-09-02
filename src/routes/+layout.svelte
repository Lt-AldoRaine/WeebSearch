<script>
	import '../app.postcss';
	import SearchBar from '../components/SearchBar.svelte';
    import ToggleScreenMode from '../components/ToggleScreenMode.svelte';
</script>

<main class="w-screen h-full w-full min-w-screen min-h-screen flex flex-col justify-between">
	<header class="w-full flex flex-col md:flex-row items-center justify-between">
		<SearchBar />
        <a href="/" data-sveltekit-preload-data>
        <div class="text-5xl text-secondary font-semibold flex gap-2 mb-4 md:mb-0">
            Weeb
        <span class="text-5xl text-primary font-bold">Search</span>
        </div>
        </a>
        <ToggleScreenMode />
	</header>

	<slot />

	<footer class="footer footer-center p-4 bg-base-300 text-base-content">
		<div>
			<p>Copyright © 2023 - All right reserved by @Lt_AldoRaine</p>
		</div>
	</footer>
</main>
