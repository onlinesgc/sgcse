<script lang="ts">
	import type { ServersRecord } from '$lib/types/pocketbase-types';
	import DetailPage from '$lib/components/DetailPage.svelte';

	let { data } = $props();
	const server = $derived(data.server as ServersRecord);
</script>

<DetailPage record={server} backhref="/servrar"/>
