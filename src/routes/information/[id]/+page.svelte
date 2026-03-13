<script lang="ts">
	import type { InformationRecord } from '$lib/types/pocketbase-types';
	import DetailPage from '$lib/components/DetailPage.svelte';

	let { data } = $props();
	const information = $derived(data.information as InformationRecord);
</script>

<DetailPage
	backHref="/information"
	title={information.title ?? ''}
	content={information.description}
	image={information.image ? { id: information.id, filename: information.image } : null}
	attachments={information.attachments}
	record_id={information.id}
	collection_name="Information"
/>
