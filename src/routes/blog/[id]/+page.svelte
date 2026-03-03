<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
	import type { BlogRecord } from '$lib/types/pocketbase-types';

	let { data } = $props();

	const blogPost = $derived(data.blogPost as BlogRecord | null);
</script>

{#if blogPost}
	<BlogPost title={blogPost.title} content={blogPost.content} />
{:else}
	<p>Blog post not found</p>
{/if}
