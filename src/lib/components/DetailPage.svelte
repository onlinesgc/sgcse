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
		record_id: string;
		collection_name: string;
	}

	let { collection_name, record_id: id, attachments = [], backHref, title, content, image, children }: Props = $props();

	const FilesURL = $derived(image ? `https://pocketbase.lukasabbe.com/api/files/${collection_name}/${image.id}/` : '');
</script>

<div class="flex justify-center">
	<a href={backHref} class="absolute left-0 m-4 h-16 w-16">
		<ArrowLeft class="h-full w-full" />
	</a>
	<div class="flex w-full flex-col p-8">
		{#if image}
			<div class="flex w-full justify-center">
				<img src={FilesURL + image.filename} alt="" class="mb-4 max-w-[80vw] rounded-xl" />
			</div>
		{/if}
		<h1 class="Sansumu m-4 text-6xl font-bold text-primary-500 text-center">{title}</h1>
		<hr class="w-[60vw] mx-auto border-gray-400 my-6"/>
		<div class="flex w-full justify-center">
			<div class="max-w-[60vw]">
				{#if content}
					<span class="markdown">{@html content}</span>
				{/if}
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-4">
			{#each attachments as attachment}
				<Card target="_blank" href={FilesURL + attachment} title={attachment} />
			{/each}
		</div>
	</div>
</div>
