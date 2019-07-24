<script>
	import { getContext, onMount, onDestroy } from 'svelte';
	import { key } from './router.js'
	import pathToRegex from 'path-to-regexp'

	export let path = '/';
	export let component;

	let locationState = getContext(key);
	let pathname;
	let subscribe;
	let keys = [];
	let re;
	let props = {};
	let params = [];
	let match = false;

	onMount(() => {
		subscribe = locationState.subscribe(state => {
			pathname=state.pathname
		})
	})

	onDestroy(() => {
		if(subscribe) {
			subscribe()
		}
	})

	$: re = pathToRegex(path, keys);
	$: params = re.exec(pathname);
	$: match = re.test(pathname);
	$: if(params) {
		props = keys.reduce((acc, k, i) => ({...acc, [k['name']]:params[i+1]||null}), {})
	}
</script>

{#if match}
	<svelte:component this={component} {...props}/>
{/if}
