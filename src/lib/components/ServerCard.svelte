<script lang="ts">
	import { onMount } from 'svelte';
	import type { ServersRecord } from '$lib/types/pocketbase-types';
	import { writable } from 'svelte/store';

	let { server, ...rest } = $props<{ server: ServersRecord }>();
	const onlinePlayers = writable<number | null>(null);

	onMount(async () => {
		const res = await fetch(`https://api.mcsrvstat.us/3/${server.ip}`);
		const data = await res.json();
		onlinePlayers.set(data.players?.online ?? 0);
	});
</script>

<a class="rounded-xl bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 dark:bg-neutral-800" href={'/servrar/' + server.id}>
	<h1 class="Sansumu text-5xl font-bold text-primary-500">{server.name}</h1>
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
		<span>{$onlinePlayers}</span>
	</h2>
</a>
