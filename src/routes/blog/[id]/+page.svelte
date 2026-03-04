<script lang="ts">
	import type { BlogRecord } from '$lib/types/pocketbase-types';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';

	let { data } = $props();

	const blogPost = $derived(data.blogPost as BlogRecord);
</script>

<div class="flex justify-center">
	<a href="/blog" class="absolute left-0 m-4 h-16 w-16">
		<ArrowLeftOutline class="h-full w-full" />
	</a>
	<div class="m-8 max-w-[60vw]">
		<h1 class="Sansumu mb-4 text-4xl font-bold text-primary-500">{blogPost.title}</h1>
		{@html blogPost.content}
	</div>
</div>
