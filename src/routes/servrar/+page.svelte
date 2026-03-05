<script lang="ts">
	import { onMount } from 'svelte';
	import type { ServersRecord } from '$lib/types/pocketbase-types';
	import Card from '$lib/components/Card.svelte';

	let { data } = $props();
	let { servers } = $derived(data);

	let onlinePlayers = $state<Record<string, number>>({});

	onMount(async () => {
		for (const server of servers) {
			if (server.ip) {
				const res = await fetch(`https://api.mcsrvstat.us/3/${server.ip}`);
				const data = await res.json();
				onlinePlayers[server.id] = data.players?.online ?? 0;
			}
		}
	});
</script>

<div class="flex justify-center">
	<div class="mt-8 flex max-w-[80vw] flex-col gap-8">
		{#each servers as server (server.id)}
			<Card href={'/servrar/' + server.id} title={server.name ?? ''}>
				<h2 class="text-xl">
					<span class="font-bold">Ip:</span>
					<span>{server.ip}</span>
				</h2>
				<h2 class="text-xl">
					<span class="font-bold">Whitelist:</span>
					<span>{server.whitelist}</span>
				</h2>
				<h2 class="text-xl">
					<span class="font-bold">Online:</span>
					<span>{onlinePlayers[server.id] ?? '...'}</span>
				</h2>
			</Card>
		{/each}
	</div>
</div>
