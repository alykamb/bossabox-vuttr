<script>	
	import { fly, fade } from 'svelte/transition';
	import CloseButton from './CloseButton.svelte';

	export let type = 'primary';
	export let header = '';
	export let onClose
	export let actions = null;

	const fadeOptions = {
		duration:300
	}
</script>

<style lang="scss">
	.modal {
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		.container {
			--width:100%;
			position: absolute;			
			width: calc(var(--width) - 2em);
			height: calc(100% - 2em);
			transition: .3s;
			padding: 1em;
		}

		.header {
			padding: 0 1em;
		}
		@media screen and (max-width:679ox) {
			container {
				border-radius: 0;
				border: none;
			}
		}
		@media screen and (min-width:680px) {
			.container {
				height: auto;
			}

			&,
			&.primary {
				.container {
					--width: 680px;
				}
			}
	
			&.danger,
			&.small {
				.container {
					--width: 400px;
				}
			}
	
			&.medium {
				.container {
					--width: 600px;
				}
			}
	
			&.large {
				.container {
					--width: 600px;
				}
			}
	
			&.huge {
				.container {
					--width: 960px;
				}
			}
		}

	}

	.overlay {
		background-color: var(--color-overlay);
		opacity: .8;
		width: 100%;
		height: 100%;
		position: absolute;
	}		

	.close-button {
		position: absolute;
    right: 0;
    top: 0;
    margin: 2em;
	}

	.btn {
		margin: 1em .6em 0;
	}

	.btn:last-child {
		margin-right: 0;
	}
</style>

<div class={`modal ${type}`}>
	<div class="overlay" on:click={onClose} transition:fade={fadeOptions}></div>
	<div class="container card elevation4" in:fly={{y:-500, duration:500}} out:fade={fadeOptions}>
		<div class="close-button">
			<CloseButton on:click={onClose}></CloseButton>
		</div>
		<div class="header">
			<slot name="header"><h3>{header}</h3></slot>
		</div>
		<div class="content">
			<slot></slot>
		</div>
		{#if actions}
			<div class={`align-${type === 'primary' ? 'center' : 'right'}`}>
				{#each actions as action, index}
					<button class={`btn ${action.type}`} on:click={action.click}>{action.label}</button>
				{/each}
			</div>
		{/if}
	</div>
</div>
