<script>
	import { setContext, onMount, onDestroy } from 'svelte'
	import {writable} from 'svelte/store';
	import history from './history';
	import { key } from './router.js'

	export let url = ''

	let historyUnlisten;
	
	let locationState = writable({
		url,
		pathname:'/',
		state:null,
		history
	});

	setContext(key, locationState);

	onMount(() => {
		$locationState.pathname = history.location.pathname;

		historyUnlisten = history.listen((location, action) => {			
			$locationState.pathname = location.pathname
			$locationState.state = location.state
		});
	})

	onDestroy(() => {
		if(historyUnlisten) {
			historyUnlisten();
		}
	})
</script>

<slot></slot>