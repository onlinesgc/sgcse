<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} | Error</title>
</svelte:head>

<div class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<h1 class="mb-4 text-6xl font-bold">
		{$page.status}
	</h1>

	<p class="mb-6 text-xl text-gray-500">
		{$page.error?.message ?? 'Something went wrong.'}
	</p>

	<a href="/" class="rounded-lg bg-primary-500 px-6 py-3 text-white transition hover:opacity-90">
		Go home
	</a>
</div>
