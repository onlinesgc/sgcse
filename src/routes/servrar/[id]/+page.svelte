<script lang="ts">
	import type { ServersRecord } from '$lib/types/pocketbase-types';
	import { ArrowLeftOutline } from 'flowbite-svelte-icons';

	let { data } = $props();
	const server = $derived(data.server as ServersRecord);
</script>

<div class="flex justify-center">
	<a href="/servrar" class="absolute left-0 m-4 h-16 w-16">
		<ArrowLeftOutline class="h-full w-full" />
	</a>
	<div class="m-8 max-w-[60vw]">
        <img src={"https://pocketbase.lukasabbe.com/api/files/pbc_291812225/" + server.id + "/" + server.image} alt="" class="mb-4 rounded-xl"/>
		<h1 class="Sansumu mb-4 text-4xl font-bold text-primary-500">{server.name}</h1>
		<span class="prose prose-slate dark:prose-invert">{@html server.description}</span>
	</div>
</div>
