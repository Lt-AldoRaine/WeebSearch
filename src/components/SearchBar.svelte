<script lang="ts">
	import Input from './Input.svelte';
  import { base } from '$app/paths'

  let input = ""

</script>

<form class="basis-1/2" action={base}/{input}> 
  <Input bind:value={input} />
</form>
