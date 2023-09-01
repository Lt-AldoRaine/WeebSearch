<script>
	import '../app.postcss';
	import SearchAnime from '../components/searchAnime.svelte';
</script>

<main class="w-screen h-full w-full min-w-screen min-h-screen" >
<nav class="w-full">
    <SearchAnime />
</nav>

<div class="container flex flex-col min-w-full min-h-full">
<slot />
</div>
</main>

