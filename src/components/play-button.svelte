<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { Play } from 'svelte-heros-v2';

	export let recording = false;
</script>

<Button
	on:click
	btnClass="text-center font-medium inline-flex items-center justify-center px-3 py-3 text-sm rounded-full"
>
	<!-- <Play variation="solid" size="24" /> -->
	<div class:pause={recording} class="button" />
</Button>

<style>
	.button {
		width: 20px;
		height: 20px;
		box-sizing: border-box;
		border-width: 10px 0px 10px 20px;
		border-color: transparent transparent transparent currentColor;
		border-style: solid;
		transition: 100ms all ease;
		cursor: pointer;
	}
	.button.pause {
		border-style: double;
		border-width: 0px 0px 0px 20px;
	}
</style>
