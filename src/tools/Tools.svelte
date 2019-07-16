<script>
	import {tools} from './store.js'
	import Filter from './Filter.svelte'
</script>

<Filter />
{#each $tools.tools as tool}
	<li>{tool}</li>
{/each}