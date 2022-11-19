<script>
	import Header from '../components/header.svelte';
	import '../app.postcss';
</script>

<div class="w-full min-h-full flex flex-col">
	<Header />
	<slot />
</div>
