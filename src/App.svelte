<script lang="ts">
  import Counter from './lib/Counter.svelte'
	import { onMount } from 'svelte';
	import Gew from "./lib/gew.svelte"
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
	const small_emotions=[
		'Anger',
		'Interest',
		'Amusement',
		'Pride',
		'Joy',
		'Pleasure',
	]

	let gew_element;

	onMount(() => {
		gew_element.emotions=small_emotions;
		console.log(gew_element);
	});
</script>

<main>

  <div class="card gew-container">
    <Gew {emotions}/>
  </div>

  <div class="card gew-container">
		<geneva-emotion-wheel bind:this={gew_element}/>
  </div>


  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
	.gew-container{
			height:1000px;
			width:1000px;
		}
</style>
