<script lang="ts">
	import type { ServersRecord } from '$lib/types/pocketbase-types';
	import DetailPage from '$lib/components/DetailPage.svelte';

	let { data } = $props();
	const server = $derived(data.server as ServersRecord);
</script>

<DetailPage
	backHref="/servrar"
	title={server.name ?? ''}
	content={server.description}
	image={server.image ? { id: server.id, filename: server.image } : null}
/>
