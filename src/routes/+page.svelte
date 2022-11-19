<script>
	import { Heading, P, Button } from 'flowbite-svelte';
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
</script>

<div class="text-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
	<Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl"
		><span class="text-transparent bg-clip-text bg-gradient-to-r to-fuchsia-500 from-sky-400"
			>Open Source</span
		> Screen Recorder</Heading
	>
	<P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" align="center"
		>A recorder that allows quick capturing of your entire screen, applications or subareas of
		either.
	</P>
	<div class="flex  gap-4 justify-center align-middle">
		<Button
			href="/record"
			btnClass="w-full sm:w-fit text-center font-medium focus:ring-4 inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg"
			>Start Recording
			<svg
				class="ml-2 -mr-1 w-5 h-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</Button>

		<div class={`hidden sm:flex`}>
			<Button outline color="dark" href="https://github.com/sch-28/screen-2">
				<div class="w-6 h-6 mr-1">
					<DiGithubBadge />
				</div>
				Github
			</Button>
		</div>
	</div>
</div>
