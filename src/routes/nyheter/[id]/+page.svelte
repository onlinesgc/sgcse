<script lang="ts">
	import type { NewsRecord } from '$lib/types/pocketbase-types';
	import DetailPage from '$lib/components/DetailPage.svelte';

	let { data } = $props();
	const blogPost = $derived(data.blogPost as NewsRecord);
</script>

<DetailPage record={blogPost} backhref="/nyheter"/>
