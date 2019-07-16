<script>
	import {modal} from './store.js'

	const onClose = $modal.onClose || (() => {
		$modal = null
	});

</script>

<style lang="scss">

</style>

{#if $modal}
	<div class="modal">
		<div class="overlay"></div>
		<div class="container">
			<button on:click={onClose}></button>
			<div class="content">
				<svelte:component this={$modal.component} foo={bar} />
			</div>
		</div>
	</div>
{/if}