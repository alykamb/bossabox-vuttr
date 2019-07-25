<script>
	import { fly } from 'svelte/transition';
	
	import CloseButton from '@/common/CloseButton.svelte'

	export let tags = []
	export let name = 'tags'

	let currentTag = '';
	function remove(index) {
		tags = tags.filter((_t, i) => i!==index)
	}

	function keydown(e) {	
		currentTag = currentTag.replace('#', '');
		const value = currentTag.trim();
		if(value) {
			if(e.keyCode === 32 || e.keyCode === 13) { // on space or enter, submit tag				
				tags = [...tags, value];				
				currentTag = '';
			} else if(e.keyCode === 27) { // if is esc, erase current tag
				currentTag = '';
			}
		} else if(e.keyCode === 8 && tags.length > 0) { //if is backspace, edit last tag
			currentTag = tags.pop();
			tags = tags;
		} 
	}

	function blur() {
		const value = currentTag.trim();
		if (value) {
			tags = [...tags, value];		
			currentTag = '';
		}
	}

</script>

<style lang="scss">
	.tag-input {
		color:var(--color);	
		background-color: var(--bgColor);
		border: 1px solid var(--borderColor);
		border-radius: var(--borderRadius);
		padding: .1em;
		box-sizing: border-box;
		width: calc(100%);
		transition: .3s border, .3s background-color;
		display: flex;
		flex-wrap:wrap;
		font-size: 0.7em;

		input {
			border: none;
			background-color: none;
			outline:none;
			width: auto;
			padding: 0;
			flex: 1;
			min-width: 100px;
			margin:.4em;
		}
	}

	.tag {
		position: relative;
		display: flex;
		align-items: center;
		padding: .3em;
		margin: .1em;
		:global(button) {
			width: 20px;
			height: 20px;
		}
	}
</style>

<div class="tag-input">	
	{#each tags as tag, i}
		<div class="tag card" in:fly={{x:10, opacity:1}} >
			<span>{tag}</span>
			<CloseButton on:click={() => remove(i)}></CloseButton>
		</div>
	{/each}
	<input type="text" name={name} on:keydown={keydown} bind:value={currentTag} on:blur={blur}>
</div>