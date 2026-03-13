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
	const imageFilename = $derived(record.image ? record.image : null);
	const collectionName = $derived(record.collectionName ?? '');
	const FileURL = $derived(`https://pocketbase.lukasabbe.com/api/files/${collectionName}/${record.id}/`);

	const dateString = $derived.by(() => {
		const created = new Date(record.created).toLocaleDateString();
		const edited = new Date(record.updated).toLocaleDateString();
		return created === edited ? created : `${created} · Uppdaterad: ${edited}`;
	});
</script>

<div class="flex justify-center">
	<a href={resolvedBackhref} class="absolute left-0 m-4 h-16 w-16">
		<ArrowLeft class="h-full w-full" />
	</a>
	<div class="flex w-full flex-col p-8">
		{#if imageFilename}
			<div class="flex w-full justify-center">
				<img src={FileURL + imageFilename} alt="" class="mb-4 max-w-[80vw] rounded-xl" />
			</div>
		{/if}
		<div class="w-full text-center">
			<h1 class="Sansumu m-4 text-6xl font-bold text-primary-500">{resolvedTitle}</h1>

			<span class="markdown">{dateString}</span>
		</div>
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

		<div class="flex w-full justify-center">
			<div class="flex w-[60vw] flex-col gap-4">
				{#each record.attachments ?? [] as attachment}
					<Card target="_blank" href={FileURL + attachment} title={attachment} />
				{/each}
			</div>
		</div>
	</div>
</div>
