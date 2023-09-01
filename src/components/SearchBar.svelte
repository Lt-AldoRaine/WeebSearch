<script lang="ts">
	import Input from './Input.svelte';

  let input = ""

</script>

<form action={input}> 
  <Input bind:value={input} />
</form>
