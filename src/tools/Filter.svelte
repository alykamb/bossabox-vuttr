<script>
	import { tools } from './store.js'

	let value = '';
	let isTagOnly = false;
	
	let timeout;
	const debouceTime = 400;

	$: if (value.length > 0) {
		if(timeout) {
			clearTimeout(timeout)
		}
		timeout = setTimeout(() => {
			tools.filter(value, isTagOnly);
		}, debouceTime)
	}
</script>

<style lang="scss">
	.tool-filter {
		display: flex;
		align-items: center
	}
</style>

<div class="tool-filter">
	<input type="text" bind:value>
	<label for="isTagOnly">
		<input type="checkbox" name="isTagOnly" bind:value={isTagOnly} id="isTagOnly" placeholder="search...">
		<span>search in tags only</span>
	</label>
</div>