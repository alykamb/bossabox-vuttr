<script>	
	import filter from './filter.js'
	import CloseButton from '@/common/CloseButton.svelte'

	export let tool
	export let onRemoveClick

	function onTagClick(value) {
		$filter = {value, isTagOnly:true}
	}
</script>

<style>
	.tool {
		padding: 1em;
		margin: 1em 0;
		position: relative;
	}		

	.tool:hover .controls,
	.tool:focus-within .controls {
		opacity: 1;
	}

	h4 {
		margin:0;
		display: flex;
    justify-content: flex-start;
	}

	a {
		font-size: inherit;
	}

	.controls {
		position: absolute;
		top: 0;
		right: 0;
		margin: 1em;
		opacity: 0;
		transition: .3s;
	}
</style>

<div class="tool card elevation1">
	<div class="controls">
		<span><CloseButton on:click={onRemoveClick}><span>remove</span></CloseButton></span>
	</div>
	<h4><a href={tool.link} target="_blank">{tool.title}</a></h4>	
	<p>{tool.description}</p>
	{#each tool.tags as tag}
		<button class="btn quaternary tag" on:click={() => onTagClick(tag)}>#{tag}</button>
	{/each}
</div>