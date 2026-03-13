<script lang="ts">
	import type { BlogRecord } from '$lib/types/pocketbase-types';
	import DetailPage from '$lib/components/DetailPage.svelte';

	let { data } = $props();
	const blogPost = $derived(data.blogPost as BlogRecord);
</script>

<DetailPage record={blogPost} />
