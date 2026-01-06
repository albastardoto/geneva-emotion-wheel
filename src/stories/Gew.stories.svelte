<script lang="ts">
	import Gew from '../lib/gew.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	const { Story } = defineMeta({
		title: 'Geneva Emotion Wheel',
		component: Gew
	});
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
	let height = $state();
	let width = $state();
</script>

<style>
	.wheel {
		position: relative;
	}
</style>
