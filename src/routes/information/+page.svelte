<script lang="ts">
    import Card from "$lib/components/Card.svelte";

	let { data } = $props();
	let { information } = $derived(data);
</script>

<div class="flex justify-center">
	<div class="mt-8 flex max-w-[80vw] flex-col gap-8">
		{#each information as informationPost (informationPost.id)}
			<Card href={'/information/' + informationPost.id} title={informationPost.title ?? ''}>

			</Card>
		{/each}
	</div>
</div>
