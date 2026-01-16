<script lang="ts">
	import Counter from './lib/Counter.svelte';
	import { onMount } from 'svelte';
	import Gew from './lib/gew.svelte';
	const emotions = [
		'Anger',
		'Interest',
		'Amusement',
		'Pride',
		'Joy',
		'Pleasure',
		'Contentment',
		'Love',
		'Admiration',
		'Relief'
	];
	const small_emotions = ['Anger', 'Interest', 'Amusement', 'Pride', 'Joy', 'Pleasure'];

	let gew_element;

	onMount(() => {
		gew_element.emotions = small_emotions;
		console.log(gew_element);
	});
</script>

<main>
	<div class="card gew-container">
		<Gew {emotions} />
	</div>

	<div class="card gew-container">
		<geneva-emotion-wheel bind:this={gew_element} selected-color="blue" />
	</div>
</main>

<style>
	.gew-container {
		height: 1000px;
		width: 1000px;
	}
</style>
