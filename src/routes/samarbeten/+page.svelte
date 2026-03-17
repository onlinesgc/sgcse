<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	let { data } = $props();
	let { collabs } = $derived(data);
</script>

<div class="flex justify-center">
	<div class="mt-8 flex max-w-[80vw] flex-col gap-8">
		{#each collabs as collab (collab.id)}
			<Card title={collab.name ?? ''} href={collab.link} id={collab.id}>
				<span class="markdown"> {@html collab.description}</span>
			</Card>
		{/each}
	</div>
</div>
