<script>
	import { Heading, P, Button } from 'flowbite-svelte';
	import { CheckBadge, FingerPrint, Square2Stack } from 'svelte-heros-v2';
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
</script>

<div class="px-4">
	<section class="1.5xl:h-[78vh] sm:h-[40vh] ">
		<div class="text-center relative max-w-5xl mx-auto pt-28 sm:pt-32 lg:pt-44">
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
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			preserveAspectRatio="none"
			stroke-width="0.2"
			class=" dark:text-white/80 1.5xl:w-[1350px] 1.5xl:h-[1250px] mx-auto 1.5xl:mt-24 hidden 1.5xl:block"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
			/>
		</svg>
	</section>

	<section class="1.5xl:h-[100vh] 1.5xl:mb-0 mb-12">
		<div class="text-center relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 p-5">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="0.2"
				stroke="currentColor"
				class=" dark:text-white/80 1.5xl:hidden w-40 mx-auto"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
				/>
			</svg>
			<Heading tag="h2" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-4xl"
				>Record, download & <span class="text-blue-600 dark:text-blue-500">share</span>
			</Heading>
			<P class="mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" align="center"
				>A recorder that allows quick capturing of your entire screen, applications or subareas of
				either.
			</P>
			<div class="gap-4 justify-center align-middle sm:flex mt-16 items-start">
				<div class="flex items-center flex-col sm:w-4/12">
					<FingerPrint class="text-blue-600 dark:text-blue-500" size="45" />
					<Heading tag="h5">Secure</Heading>
					<P class="mb-6 text-lg lg:text-lg  dark:text-gray-400" align="center"
						>The entire recording is handled by your browser, no one can see your recordings.</P
					>
				</div>
				<div class="flex items-center flex-col sm:w-4/12">
					<CheckBadge class="text-blue-600 dark:text-blue-500" size="45" />

					<Heading tag="h5">Easy</Heading>
					<P class="mb-6 text-lg lg:text-lg  dark:text-gray-400" align="center"
						>Just select a screen and click record. After the recording is finished the file will be
						automatically downloaded.</P
					>
				</div>
				<div class="flex items-center flex-col sm:w-4/12">
					<Square2Stack class="text-blue-600 dark:text-blue-500" size="45" />
					<Heading tag="h5">Customizable</Heading>
					<P class="mb-6 text-lg lg:text-lg  dark:text-gray-400" align="center"
						>Don't want to record your entire screen or application? Select an area for the
						recording to hide everything else.</P
					>
				</div>
			</div>
			<Button
				href="/record"
				btnClass="w-full sm:w-fit text-center font-medium focus:ring-4 inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg mt-8"
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
		</div>
	</section>
</div>
