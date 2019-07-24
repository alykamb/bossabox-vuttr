<script>	
	import Tools from './tools/Tools.svelte';
	import ToolForm from './tools/ToolForm.svelte'
	import Route from './router/Route.svelte'
	import Router from './router/Router.svelte'
	
</script>

<style src="./assets/scss/style.scss" global></style>

<Router>
	<div class="main">		
		<Route path="(.*)" component={Tools}></Route>
		<Route path="(.*)/new" component={ToolForm}></Route>
	</div>
</Router>

