<script lang="ts">
	import type { FileNameString } from '$lib/types/pocketbase-types';
	import { ArrowLeft } from 'lucide-svelte';
	import Card from './Card.svelte';

	interface Props {
		backHref: string;
		title: string;
		content?: string;
		attachments?: FileNameString[];
		image?: { id: string; filename: string } | null;
		children?: import('svelte').Snippet<[]>;
		id: string;
	}

	let { id, attachments = [], backHref, title, content, image, children }: Props = $props();
</script>

<div class="flex justify-center">
	<a href={backHref} class="absolute left-0 m-4 h-16 w-16">
		<ArrowLeft class="h-full w-full" />
	</a>
	<div class="flex flex-col">
		<div class="m-8 max-w-[60vw]">
			{#if image}
				<img
					src={'https://pocketbase.lukasabbe.com/api/files/pbc_291812225/' + image.id + '/' + image.filename}
					alt=""
					class="mb-4 rounded-xl"
				/>
			{/if}
			<h1 class="Sansumu mb-4 text-4xl font-bold text-primary-500">{title}</h1>
			{#if content}
				<span class="markdown">{@html content}</span>
			{/if}
			{#if children}
				{@render children()}
			{/if}
		</div>
		<div class="flex flex-col gap-4">
			{#each attachments as attachment}
				<Card
					target="_blank"
					href={'https://pocketbase.lukasabbe.com/api/files/pbc_1595192352/' + id + '/' + attachment}
					title={attachment}
				/>
			{/each}
		</div>
	</div>
</div>
