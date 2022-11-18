<script>
	import Header from '../components/header.svelte';
	import '../app.postcss';
</script>

<div class="bg-white dark:bg-gray-800 w-full h-full">
	<Header />
	<slot />
</div>
