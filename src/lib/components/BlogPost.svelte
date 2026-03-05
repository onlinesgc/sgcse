<script lang="ts">
	import type { BlogRecord } from '$lib/types/pocketbase-types';

	let { post } = $props<{ post: BlogRecord }>();

	let created = $derived(new Date(post.created).toLocaleDateString());
	let edited = $derived(new Date(post.updated).toLocaleDateString());

	let dateString = $derived(created === edited ? created : `${created} · Uppdaterad: ${edited}`);
</script>

<a
	class="w-full rounded-xl border-gray-200 bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 dark:bg-neutral-800"
	href="/blog/{post.id}"
>
	<span class="flex items-center justify-between">
		<h1 class="Sansumu text-4xl font-bold text-primary-500">{post.title}</h1>
		<span class="ml-4 text-gray-500">{dateString}</span>
	</span>
	{@html post.content.substring(0, 150) + '...'}
</a>
