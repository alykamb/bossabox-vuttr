<script>	
	import Plus from '@/assets/icons/Plus.svelte'
	import Modal from '@/common/Modal.svelte'
	import InputWrapper from '@/form/InputWrapper.svelte'
	import TagInput from '@/form/TagInput.svelte'
	import {nav} from '@/router.js'
	import {tools} from './store'

	export const tool = {
		title: '',
		link: '',
		description: '',
		tags: []
	}

	const error = {
		title:null,
		link:null,
	}

	let submited = false; 

	export let cancel = () => nav('/');

	//check if has a title and submit
	function onSubmit() {
		const {title} = tool
		submited = true;
		if(!title) {
			error.title = 'Please provide a name or a link';
		} else {			
			tools.submit(tool)
			nav('/')
		}
	}

	// check error on change after first submit
	const onTitleChange = () => {
		if(submited) {
			error.title = tool.title ? null : 'Please provide a name or a link';			
		}
	}
</script>

<style lang="css">
	.btn {
		margin: 1em .6em 0;
	}

	.btn:last-child {
		margin-right: 0;
	}

	:global(svg) {
		max-width: 1em;
		max-height: 1em;
		margin-right: .5em;
	}

	:global(svg .a) {
		stroke-width: 8px;
	}

	h3 {
		display: flex;
    align-items: center;
	}
</style>

<Modal type="large" onClose={cancel}>
	<div slot="header">
	{#if tool}
		<h3><Plus></Plus> Add new tool</h3>
	{:else}	
		<h3>Edit tool</h3>
	{/if}
	</div>
	<div class="tool-form">
		<InputWrapper label="Tool Name" name="title" bind:error={error.title} >
			<input type="text" name="title" bind:value={tool.title} on:keydown={onTitleChange}>
		</InputWrapper>
		<InputWrapper label="Tool Link" name="link" bind:error={error.link}>
			<input type="text" name="link" bind:value={tool.link}>
		</InputWrapper>
		<InputWrapper label="Tool Description" name="description">
			<textarea type="text" name="description" bind:value={tool.description}></textarea>
		</InputWrapper>
		<InputWrapper label="Tags" name="tags">
			<TagInput bind:tags={tool.tags} />
		</InputWrapper>
		<div class="align-right btn-wrapper">
			{#if cancel}<button on:click={cancel} class="btn secondary">Cancel</button>{/if}
			<button class="btn primary" on:click={onSubmit}>Add Tool</button>
		</div>
	</div>
</Modal>