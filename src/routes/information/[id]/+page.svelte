<script lang="ts">
	import type { InformationRecord } from '$lib/types/pocketbase-types';
	import DetailPage from '$lib/components/DetailPage.svelte';

	let { data } = $props();
	const information = $derived(data.information as InformationRecord);
</script>

<DetailPage record={information} />
