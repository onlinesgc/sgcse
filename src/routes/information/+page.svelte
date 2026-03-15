<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { useSearchParams } from 'runed/kit';
	import { z } from 'zod';
	import { distance } from 'fastest-levenshtein';

	const SearchSchema = z.object({
		search: z.string().default(''),
	});

	const params = useSearchParams(SearchSchema);

	let { data } = $props();
	let information = $derived(data.information || []);

	let sortedInformation = $derived.by(() => {
		const query = params.search.trim().toLowerCase();

		if (!query) return information;

		const mapped = information.map((item) => {
			const title = item.title?.toLowerCase() ?? '';
			const d = distance(title, query);

			const maxAllowedDist = Math.max(2, title.length * 0.8);

			return { item, dist: d, isValid: d <= maxAllowedDist };
		});

		return mapped
			.filter((obj) => obj.isValid)
			.sort((a, b) => a.dist - b.dist)
			.map((obj) => obj.item);
	});
</script>

<div class="flex justify-center">
	<div class="mt-8 flex w-full max-w-[80vw] flex-col gap-8">
		<input
			class="rounded-2xl border border-gray-300 bg-white p-4 dark:border-gray-700 dark:bg-background"
			type="search"
			placeholder="Sök..."
			bind:value={params.search}
		/>

		{#if sortedInformation.length > 0}
			{#each sortedInformation as info (info.id)}
				<Card href={'/information/' + info.id} title={info.title ?? 'Untitled'} />
			{/each}
		{:else}
			<p class="mt-4 text-center text-gray-500">Inga resultat hittade för "{params.search}"</p>
		{/if}
	</div>
</div>
