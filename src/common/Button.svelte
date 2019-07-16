<script>
	export let variant = 'primary';
	export let type = 'neutral';
	export let disabled = false;

	let bgColor = 'var(--color-neutral)';
	let textColor = '#fff';

	$: shade = variant === 'primary' ? '' : `-${variant}`
</script>

<style lang="scss">
	$types: neutral danger success;
	button {		
		background-color: var(--bgColor);
		color: var(--textColor);
		padding: var(--pading);
		border: none;
		border-radius: .3em;
		transition: .3s;
		outline: none;
		cursor: pointer;

		--textColor: white;
		--pading: .6em 1.3em;

		@each $type in $types {
			&.#{$type}.primary {
				--bgColor:var(--color-#{$type});
				
				&:hover {
					--bgColor:var(--color-#{$type}-dark);
				}
				&:active {
					--bgColor:var(--color-#{$type}-darker);
				}
				&.disabled {
					--bgColor:var(--color-#{$type}-lighter);
				}
			}			
			&.#{$type} {
				&.secondary, &.tertiary {
					--bgColor:var(--color-#{$type}-mostlightest);
					--textColor:var(--color-#{$type});
					&:hover {
						--bgColor:var(--color-#{$type}-lightest);
					}
					&:active {
						--bgColor:var(--color-#{$type}-lighter);
					}
					&.disabled {
						--textColor:var(--color-#{$type}-lighter);
					}
				}
			}			
			&.#{$type}.tertiary {
				--pading: .3em 1.3em;
			}			
			&.#{$type}.quaternary {
				--pading: .3em 1.3em;
				--bgColor:none;
				--textColor:var(--color-#{$type});
				&:hover {
					--textColor:var(--color-#{$type}-dark);
				}
				&:active {
					--textColor:var(--color-#{$type}-darker);
				}
				&.disabled {
					--textColor:var(--color-#{$type}-lighter);
				}
			}			
		}

	}
</style>

<button class={`${type} ${variant}`} on:click {disabled}><slot></slot></button>