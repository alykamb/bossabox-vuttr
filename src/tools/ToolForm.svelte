<script>	
	import Modal from '@/common/Modal.svelte'
	import InputWrapper from '@/form/InputWrapper.svelte'
	import TagInput from '@/form/TagInput.svelte'
	import {nav} from '@/router.js'
	import {tools} from './store'

	export const tool = {
		name: '',
		link: '',
		description: '',
		tags: []
	}

	const error = {
		name:null,
		link:null,
	}

	export let cancel = () => nav('/');

	function onSubmit() {
		const {name, link} = tool
		if(!name && !link) {
			error.name = 'Please provide a name or a link';
			error.link = 'Please provide a name or a link';
		} else {
			if(!name) {
				tool.name = link
			}
			tools.submit(tool)
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
</style>

<Modal type="large" onClose={cancel}>
	<div slot="header">
	{#if tool}
		<h3>Add new tool</h3>
	{:else}	
		<h3>Edit tool</h3>
	{/if}
	</div>
	<div class="tool-form">
		<InputWrapper label="Tool Name" name="name" bind:error={error.name} >
			<input type="text" name="name" bind:value={tool.name}>
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