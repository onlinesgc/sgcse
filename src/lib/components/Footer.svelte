<script lang="ts">
	import LysatorLogo from '$lib/assets/logo-no-bg.svg';
	let date = new Date();
</script>

<footer class="mt-auto bg-white dark:bg-background">
	<div class="mx-auto flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			&copy; {date.getFullYear()} Onlineföreningen SGC. All rights reserved.
		</p>
		<a href="https://www.lysator.liu.se" class="flex items-center gap-2 text-gray-500 hover:text-primary-500 dark:text-gray-400">
			<span class="text-sm sm:text-base">Våra Minecraft servrar är inhysta hos</span>
			<img src={LysatorLogo} alt="Lysator" class="h-7 sm:h-9" />
		</a>
		<div class="flex gap-4">
			<a href="/information/om-oss" class="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400">Om Oss</a>
			<a href="/kontakt" class="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400">Kontakt</a>
		</div>
	</div>
</footer>
