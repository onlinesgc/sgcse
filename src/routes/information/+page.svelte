<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { useSearchParams } from 'runed/kit';
	import { z } from 'zod';
	import { distance } from 'fastest-levenshtein';
	import { scale } from 'svelte/transition';

	const SearchSchema = z.object({
		search: z.string().default(''),
	});

	const params = useSearchParams(SearchSchema);

	let { data } = $props();
	let information = $derived(data.information || []);

	let sortedInformation = $derived.by(() => {
		const query = params.search.trim().toLowerCase();

		if (!query) {
			return [...information].sort((a, b) => {
				if (a.id === 'om-oss') return -1;
				if (b.id === 'om-oss') return 1;
				return 0;
			});
		}

		const mapped = information.map((item) => {
			const title = item.title?.toLowerCase() ?? '';
			const d = distance(title, query);

			const maxAllowedDist = Math.max(2, title.length * 0.8);

			return { item, dist: d, isValid: d <= maxAllowedDist };
		});

		return mapped
			.filter((obj) => obj.isValid)
			.sort((a, b) => {
				if (a.item.id === 'om-oss') return -1;
				if (b.item.id === 'om-oss') return 1;
				return a.dist - b.dist;
			})
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
				<div transition:scale>
					<Card href={'/information/' + info.id} title={info.title ?? 'Untitled'} id={info.id}>
						<span class="markdown">{@html info.description?.substring(0, 400) + '...'}</span>
					</Card>
				</div>
			{/each}
			<div transition:scale>
				<Card href="/samarbeten" title="Samarbeten" id="samarbeten" />
				<span class="markdown">Vi har samarbeten med flera olika föreningar och aktörer. Läs mer om de här.</span>
			</div>
			<div transition:scale>
				<Card href="/servrar" title="Servrar" id="servrar" />
			</div>
		{:else}
			<p class="mt-4 text-center text-gray-500">Inga resultat hittade för "{params.search}"</p>
		{/if}
	</div>
</div>
