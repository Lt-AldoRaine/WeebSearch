<script>
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="basis-1/2 flex items-center justify-end">
	<input
		data-toggle-theme="cupcake,forest"
		data-act-class="pl-4"
		type="checkbox"
		class="toggle toggle-secondary mr-8"
	/>
</div>
