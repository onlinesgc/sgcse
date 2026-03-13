<script lang="ts">
	import type { FileNameString, Collections } from '$lib/types/pocketbase-types';
	import { ArrowLeft } from 'lucide-svelte';
	import Card from './Card.svelte';

	type PocketBaseRecord = {
		id: string;
		created: string;
		updated: string;
		title?: string;
		name?: string;
		content?: string;
		description?: string;
		attachments?: FileNameString[];
		image?: FileNameString;
		collectionName?: string;
	};

	interface Props {
		record: PocketBaseRecord;
		backhref?: string;
		title?: string;
		children?: import('svelte').Snippet<[]>;
	}

	let { record, backhref, title, children }: Props = $props();

	const resolvedBackhref = $derived(backhref ?? `/${record.collectionName?.toLowerCase() ?? ''}`);
	const resolvedTitle = $derived(title ?? record.title ?? record.name ?? '');
	const resolvedContent = $derived(record.content ?? record.description);
	const image = $derived(record.image ? { id: record.id, filename: record.image } : null);
	const collectionName = $derived(record.collectionName ?? '');
	const FilesURL = $derived(image ? `https://pocketbase.lukasabbe.com/api/files/${collectionName}/${image.id}/` : '');
</script>

<div class="flex justify-center">
	<a href={resolvedBackhref} class="absolute left-0 m-4 h-16 w-16">
		<ArrowLeft class="h-full w-full" />
	</a>
	<div class="flex w-full flex-col p-8">
		{#if image}
			<div class="flex w-full justify-center">
				<img src={FilesURL + image.filename} alt="" class="mb-4 max-w-[80vw] rounded-xl" />
			</div>
		{/if}
		<h1 class="Sansumu m-4 text-center text-6xl font-bold text-primary-500">{resolvedTitle}</h1>
		<hr class="mx-auto my-6 w-[60vw] border-gray-400" />
		<div class="flex w-full justify-center">
			<div class="max-w-[60vw]">
				{#if resolvedContent}
					<span class="markdown">{@html resolvedContent}</span>
				{/if}
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-4">
			{#each record.attachments ?? [] as attachment}
				<Card target="_blank" href={FilesURL + attachment} title={attachment} />
			{/each}
		</div>
	</div>
</div>
