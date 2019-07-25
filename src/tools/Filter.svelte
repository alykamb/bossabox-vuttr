<script>
	import Toggler from '@/common/Toggler.svelte'
	import filter from './filter.js'
</script>

<style>
	.tool-filter {
		display: flex;
		align-items: center				
	}

	input[type=text] {
		width: 200px;
		margin-right: 1em;
	}
	
</style>


<div class="tool-filter">
	<input type="text" bind:value={$filter.value}  placeholder="search...">	
	<Toggler bind:checked={$filter.isTagOnly} name="isTagOnly" id="isTagOnly" label="search in tags only"></Toggler>
</div>