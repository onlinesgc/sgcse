<script lang="ts">
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';

	interface Props {
		backHref: string;
		title: string;
		content?: string;
		image?: { id: string; filename: string } | null;
		children?: import('svelte').Snippet<[]>;
	}

	let { backHref, title, content, image, children }: Props = $props();
</script>

<div class="flex justify-center">
	<a href={backHref} class="absolute left-0 m-4 h-16 w-16">
		<ArrowLeftOutline class="h-full w-full" />
	</a>
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
			<span class="prose prose-slate dark:prose-invert">{@html content}</span>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
