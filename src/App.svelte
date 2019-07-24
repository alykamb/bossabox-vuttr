<script>	
	import Tools from './tools/Tools.svelte';
	import ToolForm from './tools/ToolForm.svelte'
	import Route from './router/Route.svelte'
	import Router from './router/Router.svelte'	
</script>

<style src="./assets/scss/style.scss" global></style>

<section class="main">
	<div class="content">
		<h1>Vuttr</h1>
		<h2>Very Useful Tools to Remember</h2>
		<Router>
			<div class="main">		
				<Route path="/(.*)" component={Tools}></Route>
				<Route path="/add" component={ToolForm}></Route>
				<Route path="/edit/:id" component={ToolForm}></Route>
			</div>
		</Router>
	</div>
</section>

