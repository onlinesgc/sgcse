<script lang="ts">
	import ServerCard from '$lib/components/ServerCard.svelte';

	let { data } = $props();
</script>

<div class="flex justify-center">
	<div class="flex max-w-[80vw] flex-col gap-8 mt-8">
		{#each data.servers as server}
            <ServerCard {server} />
		{/each}
	</div>
</div>
