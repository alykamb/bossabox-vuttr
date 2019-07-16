<script>
	export let error = ''
	export let label = ''
	export let name = ''
	export let required = false;
</script>

<style lang="scss">
	.input-wrapper {
		display: flex;
		flex-direction: column;
		position: relative;
		margin-bottom: 1em;
		
		label {
			margin: .5em 0 1em;
			span {
				color: var(--color_lightInk);
				margin: 10px;
				vertical-align: middle;
			}
		}

		&.error {
			:global(input){
				--color:var(--errorColor);
				--bgColor:var(--bgErrorColor);
				--borderColor:var(--errorColor);
			}

			label span {
				color: var(--errorColor);
				
			}

			.error {
				text-align: right;
				margin: 0;
				font-size: .8em;
				color: var(--errorColor);
				position: absolute;
				bottom: 0;
				right: 0;
				transform: translateY(110%)
			}
		}
	}


</style>

<div class="input-wrapper" class:error>
	<label for={name}>{label}{#if required}<span>*</span>{/if}</label>
	<slot />
	{#if error}<p class="error">{error}</p>{/if}
</div>