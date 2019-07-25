<script>
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	import Close from '@/assets/icons/Close.svelte'
	import Modal from '@/common/Modal.svelte'
	import {Link} from '@/router.js';
	import Filter from './Filter.svelte'
	import {tools} from './store.js'
	import Tool from './Tool.svelte'

	const [ send, receive ] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;
			const {height} = node.getBoundingClientRect();
			node.style['max-height'] = height+"px";
			return {
				duration: 600,
				easing: quintOut,
				css: t => {					
					return `
						transform: ${transform} scale(${t});
						opacity: ${t};
						max-height: ${height * t}px;
					`
				}
			};
		}
	});

	const clearMaxHeight = (event) => {
		event.target.style['max-height'] = null;
	}

	let remove = null

	function onRemove() {
		tools.remove(remove.id)
		remove = null;
	}

	function cancel() {
		remove = null
	}

	const modalActions = [
		{
			type:'danger secondary',
			label:'Cancel',
			click:cancel
		},
		{
			type:'danger primary',
			label:'Yes, remove',
			click:onRemove
		}
	]
</script>

<style>
	.top {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row-reverse;
		justify-content: space-between;
		margin-bottom: 1em;
	}

	h3 {
		margin: 0;
	}

	:global(svg) {
		max-width: 1em;
		max-height: 1em;
	}

	:global(svg .a) {
		stroke-width: 8px;
	}	
</style>

<div class="top">
	<Link class="btn" path="/add">Add</Link>
	<Filter />
</div>
<div class="tools">
	{#each $tools.tools as tool (tool.id)}
		<div 
			in:receive|local="{{key: tool.id}}" 
			out:send|local="{{key: tool.id}}"
			on:introend="{clearMaxHeight}"
			on:outroend="{clearMaxHeight}"			
			>
			<Tool tool={tool} onRemoveClick={() => remove = tool}/>
		</div>
	{/each}
	{#if !$tools.tools || !$tools.tools.length} 
		<div class="align-center">
			<p>No data found.</p>
		</div>
	{/if}
</div>

{#if remove}
	<Modal type="danger" actions={modalActions} onClose={cancel}>
		<div slot="header">
			<h3><Close></Close> Remove Tool</h3>
		</div>
		<div>
			Are you sure you want to remove {remove.title}
		</div>
	</Modal>
{/if}