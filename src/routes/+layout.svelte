<script>
	import Header from '../components/header.svelte';
	import '../app.postcss';
	import Footer from '../components/footer.svelte';
</script>

<div class="w-full min-h-full flex flex-col">
	<Header />
	<slot />
	<Footer />
</div>
