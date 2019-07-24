<script>
	import { getContext, onMount, onDestroy } from 'svelte'
	import { key } from './router.js'

	export let path = '/'
	export let to = null
	export let state = {}
	
	let locationState = getContext(key);
	let subscribe
	let history
	let className = ''
	export {className as class}

	onMount(() => 
		subscribe = locationState.subscribe(s => history=s.history)
	)

	onDestroy(() => subscribe && subscribe())

	function onClick(e) {
		e.preventDefault();
		if(to) {
			return history.nav(to.path, to.state)
		} 
		return history.nav(path, state)
	}
</script>

<a href={path} class={className} on:click={onClick}><slot/></a>

