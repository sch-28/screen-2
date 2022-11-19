<script>
	import Header from '../components/header.svelte';
	import '../app.postcss';
	import Footer from '../components/footer.svelte';
	import { onMount } from 'svelte';

	// On page load or when changing themes, best to add inline in `head` to avoid FOUC
	/* if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	} */
	/* onMount(() => {
		document.documentElement.classList.add('dark');
	}); */
</script>

<div class="w-full min-h-full flex flex-col">
	<Header />
	<slot />
	<Footer />
</div>
