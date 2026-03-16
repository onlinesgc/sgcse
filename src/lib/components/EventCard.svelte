<script lang="ts">
	import type { CalanderRecord } from '$lib/types/pocketbase-types.js';

	let {
		event,
		onclick,
	}: {
		event: CalanderRecord;
		onclick: () => void;
	} = $props();

	const colorClasses: Record<string, string> = {
		blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
		green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
		red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
		purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
	};
</script>

<button
	class="mb-3 w-full cursor-pointer rounded-lg border border-gray-200 bg-white p-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-[#1a1a1a]"
	{onclick}
>
	<div class="mb-2 flex items-start justify-between">
		<h5 class="truncate text-sm leading-tight font-bold tracking-tight text-gray-900 dark:text-white">
			{event.title}
		</h5>
		<span class="{colorClasses[event.color || 'blue']} rounded px-2 py-0.5 text-xs">
			{#if event.type === 'weekly'}
				Veckovis
			{:else if event.type === 'nth-weekday'}
				Månadsvis
			{:else}
				En gång
			{/if}
		</span>
	</div>
	<p class="line-clamp-2 text-xs font-normal text-gray-600 dark:text-gray-400">
		{@html event.description}
	</p>
	<div class="mt-2 flex items-center gap-2">
		<span class="text-xs text-gray-500 dark:text-gray-400">Tid: {event.tid}</span>
	</div>
</button>
