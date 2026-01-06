<script lang="ts">
	import Option from './option.svelte';
	import { EmotionSelectValueEvent } from './gew-constructor.ts';
	import { createEventDispatcher } from 'svelte';
	import { onMount } from 'svelte';
	let values = [1, 2, 3, 4, 5];
	let intensity = $state();
	const {
		name,
		percentage,
		width,
		height,
		pair,
		maxRadius,
		minRadius,
		tagOffset,
		selectionCallback,
		index
	} = $props();

	const radial_distance = $derived(percentage * Math.PI * 2);

	let topCenter = $derived(height / 2);
	let leftCenter = $derived(width / 2);
	let tagHeight = $state(0);
	let tagWidth = $state(0);

	function getPosCheckMark(value: number) {
		let radius = minRadius;
		for (let i = value; i > 1; i--) {
			radius += checkSize(i - 1);
		}
		return getPosVector(radius);
	}

	function getPosVector(radius: number) {
		return {
			y: topCenter + Math.sin(radial_distance) * radius,
			x: leftCenter + Math.cos(radial_distance) * radius
		};
	}
	const tagPos = $derived(getPosVector(maxRadius + tagOffset));

	const positions = $derived(values.map((value) => getPosCheckMark(value)));
	function checkSize(index: number): number {
		const minSize = 20;
		const maxSize = 60;
		const percentageValue = index / (values.length - 1);
		return minSize + (maxSize - minSize) * percentageValue;
	}
	let tagElement;

	$effect(() => {
		const top = tagPos.y - tagHeight / 2;
		const left = tagPos.x - tagWidth / 2;
		tagElement.style.top = top + 'px';
		tagElement.style.left = left + 'px';
	});
	function updateSelection(e) {
		const value = e.target.value;
		const selectionEvent = new EmotionSelectValueEvent(index, value);
		tagElement.dispatchEvent(selectionEvent);
	}
</script>

{#each positions as pos, index}
	<Option
		top={pos.y - checkSize(index) / 2}
		left={pos.x - checkSize(index) / 2}
		height={checkSize(index)}
		width={checkSize(index)}
		group={intensity}
		{name}
		{pair}
		{index}
		{updateSelection}
	></Option>
{/each}
<div
	class="tag {pair ? 'tagDark' : ''}"
	bind:this={tagElement}
	bind:clientWidth={tagWidth}
	bind:clientHeight={tagHeight}
	style:top="{tagPos.y - tagHeight / 2}px"
	style:left="{tagPos.x - tagWidth / 2}px"
>
	{name}
</div>

<style>
	.tag {
		position: absolute;
		font-size: 1.2em;
	}

	.tagDark {
		color: #999;
	}
</style>
