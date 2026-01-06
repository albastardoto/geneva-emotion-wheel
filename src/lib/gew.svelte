<svelte:options
	customElement={{
		tag: 'geneva-emotion-wheel',
		shadow: 'none',
		props: {
			emotions: { attribute: 'emotions', type: 'Array' },
			maxRadius: { attribute: 'max-radius', type: 'Number' },
			minRadius: { attribute: 'max-radius', type: 'Number' },
			tagOffset: { attribute: 'tag-offset', type: 'Number' },
			selectionCallback: { attribute: 'selection-callback', type: 'Object' }
		}
	}}
/>

<!-- svelte-ignore options_missing_custom_element -->

<script lang="ts">
	import Emotion from './emotion.svelte';

	let {
		emotions = ['Sadness'],
		maxRadius = 200,
		tagOffset = 120,
		minRadius = 50,
		selectionCallback = (index, value) => {
			console.log('Chose index : ' + index + ' with value ' + value);
		}
	} = $props();

	let height = $state();
	let width = $state();
</script>

<div class="wheel h-full" bind:clientWidth={width} bind:clientHeight={height}>
	{#each emotions as emotionName, index}
		<Emotion
			name={emotionName}
			percentage={index / emotions.length}
			{index}
			{width}
			{height}
			{maxRadius}
			{minRadius}
			{tagOffset}
			pair={index % 2 == 0}
			{selectionCallback}
		></Emotion>
	{/each}
</div>

<style>
	.wheel {
		position: relative;
		height: 100%;
		width: 100%;
	}
</style>
