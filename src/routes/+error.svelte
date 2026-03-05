<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex min-h-screen flex-col items-center justify-center px-6 text-center">
	<h1 class="mb-4 text-9xl font-bold text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]">
		{page.status}
	</h1>

	<p class="mb-6 text-xl text-gray-500">
		{page.error?.message ?? 'Något gick fel.'}
	</p>

	<a href="/" class="rounded-lg bg-primary-500 px-6 py-3 text-white transition hover:opacity-90">Gå hem</a>
</div>
