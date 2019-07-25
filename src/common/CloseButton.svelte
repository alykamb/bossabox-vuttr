<script>
	import Close from '@/assets/icons/Close.svelte';
</script>

<style lang="scss">
	button {
    
		border: none;
		background: none;
		outline: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		
		:global(svg) {
			width: 12px;
			height: 12px;
			transition: .3s;	

			:global(.a) {
				stroke: var(--color_lightInk);
				stroke-width: 8px;
			}			
		}

		&:hover {
			:global(svg) {
				transform: rotate(90deg);
			}
		}

		:global(*:not(:first-child)) {
			margin-left: .5em;
		}
	}
</style>
<button on:click><Close /> <slot></slot></button>