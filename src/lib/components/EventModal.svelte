<script lang="ts">
	import type { CalanderRecord } from '$lib/types/pocketbase-types.js';
	import { X } from 'lucide-svelte';

	let {
		event,
		open = $bindable(false),
	}: {
		event: CalanderRecord | null;
		open: boolean;
	} = $props();

	const colorClasses: Record<string, string> = {
		blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
		green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
		red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
		yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
		purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
	};

	function close() {
		open = false;
	}
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onclick={close} role="presentation">
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="relative m-4 max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 dark:bg-[#1a1a1a]"
			onclick={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			tabindex="-1"
		>
			<button class="absolute top-4 right-4 cursor-pointer rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-700" onclick={close}>
				<X class="h-5 w-5" />
			</button>
			<h2 id="modal-title" class="mb-4 text-xl font-bold">{event?.title || 'Händelsedetaljer'}</h2>
			<div class="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
				<div class="flex items-center gap-2">
					{#if event}
						<span class="{colorClasses[event.color || 'blue']} rounded px-2.5 py-0.5 text-xs font-medium">
							{#if event.type === 'weekly'}
								Veckovis händelse
							{:else if event.type === 'nth-weekday'}
								Månatlig händelse
							{:else}
								Engångshändelse
							{/if}
						</span>
					{/if}
				</div>

				<div class="prose max-w-none dark:prose-invert">
					{#if event?.description}
						{@html event.description}
					{:else}
						<p class="text-gray-400 italic">Inga ytterligare detaljer angivna.</p>
					{/if}
				</div>

				<div class="mt-2 flex items-center gap-2">
					<span class="text-xs text-gray-500 dark:text-gray-400">Tid: {event?.tid}</span>
				</div>
			</div>
		</div>
	</div>
{/if}
