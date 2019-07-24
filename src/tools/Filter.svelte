<script>
	import { tools } from './store.js'

	let value = '';
	let isTagOnly = false;
	
	let timeout;
	const debouceTime = 400;

	$: if (value.length > 0) {
		tools.filter(value, isTagOnly);
		if(timeout) {
			clearTimeout(timeout)
		}
		timeout = setTimeout(() => {
			tools.filter(value, isTagOnly, true);
		}, debouceTime)
	}
</script>

<style>
	.tool-filter {
		display: flex;
		align-items: center				
	}

	input[type=text] {
		width: 200px;
	}

	.tag-checkbox {
		display: flex;
		flex: 1;
		align-items: center;
	}
</style>

<div class="tool-filter">
	<input type="text" bind:value  placeholder="search...">
	<label class="tag-checkbox" for="isTagOnly">
		<input type="checkbox" name="isTagOnly" bind:checked={isTagOnly} id="isTagOnly">
		<span>search in tags only</span>
	</label>
</div>