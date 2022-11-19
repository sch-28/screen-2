<script>
	import {
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
		FooterIcon
	} from 'flowbite-svelte';
	import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte';
</script>

<Footer class="px-5 !bg-black/25 rounded-b-none">
	<div class="font-bold dark:hover:text-white text-gray-400 hover:text-gray-900">
		Made by ORACLE#7672
	</div>
	<div class="sm:flex sm:items-center sm:justify-between">
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon
				href="https://github.com/sch-28/screen-2"
				class="text-gray-400 hover:text-gray-900"
			>
				<div class="w-6 h-6 mr-1">
					<DiGithubBadge />
				</div>
			</FooterIcon>
		</div>
	</div>
</Footer>
