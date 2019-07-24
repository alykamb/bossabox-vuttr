<script>
	import Button from '@/common/Button.svelte'
	import {modal} from './store.js'

	const onClose = $modal.onClose || (() => {
		$modal = null
	});

</script>

<style lang="scss">

</style>

{#if $modal}
	<div class={`modal ${$modal.type}`}>
		<div class="overlay"></div>
		<div class="container">
			<button on:click={onClose}></button>
			{#if $modal.header}<div class="header">{$modal.header}</div>{/if}
			<div class="content">
				<svelte:component this={$modal.component} />
			</div>
			{#if $modal.actions}
				<div class={`align-${$modal.type === 'primary' ? 'center' : 'right'}`}>
					{#each $modal.actions as action, index}
						<Button on:click={action.click}>{action.label}</Button>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}