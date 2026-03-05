<script lang="ts">
	import type { CalanderRecord } from '$lib/types/pocketbase-types.js';
	import { Card, Badge } from 'flowbite-svelte';

	// Svelte 5 props
	let {
		event,
		onclick,
	}: {
		event: CalanderRecord;
		onclick: () => void;
	} = $props();
</script>

<Card
	class="mb-3 w-full cursor-pointer p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-[#1a1a1a]"
	{onclick}
>
	<div class="mb-2 flex items-start justify-between">
		<h5 class="text-sm leading-tight font-bold tracking-tight text-gray-900 dark:text-white">
			{event.title}
		</h5>
		<Badge color={event.color || 'blue'} size="small">
			{#if event.type === 'weekly'}
				Veckovis
			{:else if event.type === 'nth-weekday'}
				Månadsvis
			{:else}
				En gång
			{/if}
		</Badge>
	</div>
	<p class="line-clamp-2 text-xs font-normal text-gray-600 dark:text-gray-400">
		{@html event.description}
	</p>
</Card>
