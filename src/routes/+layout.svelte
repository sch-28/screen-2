<script>
	import Header from '../components/header.svelte';
	import '../app.postcss';
</script>

<div
	class="bg-white dark:bg-gray-800 w-full h-full flex flex-col  bg-gradient-to-r to-fuchsia-500/5 from-sky-400/5"
>
	<Header />
	<div class="w-full h-full flex flex-col  px-4 sm:px-6 md:px-8 ">
		<slot />
	</div>
</div>
