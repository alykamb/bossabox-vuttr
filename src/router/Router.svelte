<script>
	import { setContext, onMount } from 'svelte'
	import {writable} from 'svelte/store';


	import { key } from './router.js'

	export let url = ''



	let locationState = writable({
		url,
		pathname:'/',
		state:null,
	});
	
	setContext(key, locationState);

	onMount(() => {
		$locationState.pathname = location.pathname;
	})
</script>

<slot></slot>