<script>
	import {tools} from './store.js'
	import Filter from './Filter.svelte'
	import {Link} from '@/router.js';
</script>

<style>
	.top {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-bottom: 1em;
	}
</style>

<div class="top">
	<Link class="btn" path="/add">Add</Link>
	<Filter />
</div>

{#each $tools.tools as tool}
	<li>{tool}</li>
{/each}