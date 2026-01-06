<script lang="ts">
	import {onMount} from "svelte";
	let {top,left, height,width, group,name, index, pair, updateSelection}= $props();
	let divElement;
	let spanElement;

	$effect(() => {


		divElement.style.top=top +"px";
		divElement.style.left=left +"px";
		spanElement.style.width=width+"px";
		spanElement.style.height=height+"px";
		if(pair){
			spanElement.class = spanElement.class + " dark"
		}
	});
</script>

	<div
		class="option"
		bind:this={divElement}
		style:position="absolute"
	>
		<label>
			<input type="radio" 
			style:opacity="0"
			style:cursor="pointer"
			{name} value={index + 1} bind:group={group} 
			onchange={updateSelection}/>
			<span
				class="checkmark {pair ? 'dark' : ''}"
				bind:this={spanElement}
		
				style:border-radius="100%"
			></span>
		</label>
	</div>
<style>

	.tag {
		position: absolute;
		font-size: 1.5em;
	}

	.checkmark {
		position: absolute;
		height: 25px;
		width: 25px;
		background-color: #eee;
		border-radius: 100%;
	}

	.option:hover input ~ .checkmark {
		background-color: #ccc;
	}
	.option input:checked ~ .checkmark {
		background-color: #2196f3;
	}

	.dark {
		background-color: #999;
	}

	/* Create the checkmark/indicator (hidden when not checked) */
	.checkmark:after {
		content: '';
		position: absolute;
		display: none;
	}
</style>
