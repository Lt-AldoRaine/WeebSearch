<script lang="ts">
	import Input from './Input.svelte';
  import { base } from '$app/paths'

  let input = ""

</script>

<form action={base}/{input}> 
  <Input bind:value={input} />
</form>
