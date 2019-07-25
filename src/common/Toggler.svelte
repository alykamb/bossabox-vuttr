<script>
	export let checked
	export let disabled = false
	export let id = null
	export let name = null
	export let label = null

	

	function toggle() {
		if(!disabled) {
			checked = !checked
		}
	}

	$: if(disabled) {
		checked = false;
	}
</script>

<style lang="scss">
	.toggler-wrapper {
		display: flex;
		
		label {
			margin-left: .51em;
		}
	}
	.toggler {
		cursor: pointer;
		width: 2.5em;
		height: 1.25em;
		background-color:var(--bgColor2);
		border: 1px solid var(--borderColor2);
		border-radius: 1.2em;
		overflow: hidden;
		position: relative;
		display: flex;
		align-items: center;
		transition: .3s;
		&.checked:not(.disabled) {
			background-color: var(--color-success);
			border-color: var(--color-success-dark);

			.ball {
				transform: translateX(100%);
			}
		}

		&.disabled {
			cursor: default;
			.ball {
				background-color: var(--bgColor);
			}
		}
	}

	.ball {
		width: 1em;
		height: 1em;
		margin: .1em;
		background-color: var(--color-background);
		border: 1px solid var(--borderColor2);
		border-radius: 50%;
		transition: .3s;
	}

	input {
		position: absolute;
		top: -3em;
	}
</style>

<div class="toggler-wrapper">
	<div class="toggler" class:checked class:disabled on:click={toggle}>
		<input type="checkbox" bind:checked {id} {name} {disabled}>
		<div class="ball">
		</div>
	</div>
	{#if label}
		<label for={id}>{label}</label>
	{/if}
</div>
