<script>
	import close from '@/assets/icons/close.svg';
</script>

<style lang="scss">
	button {
    width: 25px;
		height: 25px;
		border: none;
		background: none;
		outline: none;
		cursor: pointer;
		
		:global(svg) {
			width: 100%;
			height: 100%;
			transition: .3s;

			:global(.a) {
				stroke: var(--color_lightInk);
				stroke-width: 8px;
			}

			&:hover {
				transform: rotate(90deg);

			}
		}
	}
</style>
<button on:click>{@html close}</button>