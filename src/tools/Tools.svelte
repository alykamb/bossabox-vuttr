<script>
	import {tools} from './store.js'
	import Filter from './Filter.svelte'
</script>

<div class="top">
	<Filter />
	<button class="btn">Add</button>
</div>

{#each $tools.tools as tool}
	<li>{tool}</li>
{/each}