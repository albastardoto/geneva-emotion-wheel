<svelte:options
	customElement={{
		tag: 'ui-counter',
		props: {
			// rename startCount to start-count when used in consuming app
			startCount: { attribute: 'start-count', type: 'Number' },
			// set 'step' to a type 'Number' vs default String typing
			step: { attribute: 'step', type: 'Number' }
		}
	}}
/>

<script lang="ts">
	let { startCount = 0, step = 1 } = $props();

	let count: number = $derived(startCount);

	const increment = () => {
		count += step;
	};
</script>

<button onclick={increment}>
	count is {count}
</button>
