<script>
	export let tags = []
	export let name = 'tags'

	let currentTag = '';
	function remove(index) {
		tags = tags.filter((_t, i) => i!==index)
	}

	function keydown(e) {	
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
		border-radius: var(--inputBorderRadius);
		padding: .5em .9em;
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
			margin:0;
		}


	}
</style>

<div class="tag-input">	
	{#each tags as tag, i}
		<div class="tag"><span>#{tag}</span><button on:click={() => remove(i)}></button></div>
	{/each}
	<input type="text" name={name} on:keydown={keydown} bind:value={currentTag} on:blur={blur}>
</div>