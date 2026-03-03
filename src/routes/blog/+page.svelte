<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';
	import TextPage from '$lib/components/TextPage.svelte';

	let { data } = $props();
</script>

<TextPage class="m-8">
	{#each data.blogPosts as post} 
		<BlogPost title={post.title} content={post.content} />
	{/each}
</TextPage>
