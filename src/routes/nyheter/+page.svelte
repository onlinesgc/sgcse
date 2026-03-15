<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	let { data } = $props();

	let { blogPosts } = $derived(data);
</script>

<div class="flex justify-center">
	<div class="mt-8 flex w-[50vw] flex-col items-center gap-8">
		{#each blogPosts.reverse() as post (post.id)}
			{@const created = new Date(post.created).toLocaleDateString()}
			{@const edited = new Date(post.updated).toLocaleDateString()}
			{@const dateString = created === edited ? created : `${created} · Uppdaterad: ${edited}`}
			<Card href={'/nyheter/' + post.id} title={post.title ?? ''}>
				<span class="text-gray-500">{dateString}</span>
				{@html post.content?.substring(0, 150) + '...'}
			</Card>
		{/each}
	</div>
</div>
