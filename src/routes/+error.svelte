<script>
	import { page } from '$app/stores';
	import { Heading } from 'flowbite-svelte';
	export let status = 200;
	export let message = 'ok';

	$: {
		if ($page.status != 200 && $page.error) {
			status = $page.status;
			message = $page.error?.message;
		}
	}
</script>

<div class="m-auto">
	<Heading tag="h1">{status}: {message}</Heading>
</div>
