<script lang="ts">
	import BlogPost from '$lib/components/BlogPost.svelte';

	let { data } = $props();
</script>

<div class="flex justify-center">
	<div class="mt-8 flex w-[50vw] flex-col items-center gap-8">
		{#each data.blogPosts.reverse() as post (post.id)}
			<BlogPost {post} />
		{/each}
	</div>
</div>
