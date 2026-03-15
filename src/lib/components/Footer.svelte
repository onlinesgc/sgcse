<script lang="ts">
	let date = new Date();
</script>

<footer class="mt-auto bg-white dark:bg-background">
	<div class="mx-auto flex flex-col items-center justify-between gap-4 p-4 sm:flex-row">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			&copy; {date.getFullYear()} Onlineföreningen SGC. All rights reserved.
		</p>
		<div class="flex gap-4">
			<a href="/" class="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400">Om Oss</a>
			<a href="/kontakt" class="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400">Kontakt</a>
		</div>
	</div>
</footer>
