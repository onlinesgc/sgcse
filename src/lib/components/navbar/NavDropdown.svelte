<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	let { title, items } = $props<{
		title: string;
		items: { name: string; href: string }[];
	}>();

	let open = $state(false);
	let ref: HTMLDivElement;

	function handleClickOutside(event: MouseEvent) {
		if (open && ref && !ref.contains(event.target as Node)) {
			open = false;
		}
	}

	$effect(() => {
		if (open) {
			window.addEventListener('click', handleClickOutside);
			return () => window.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="relative" bind:this={ref}>
	<button class="flex items-center text-xl hover:text-primary-500 cursor-pointer" onclick={() => (open = !open)}>
		{title}
		<ChevronDown class="ml-1 h-4 w-4" />
	</button>

	{#if open}
		<div class="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg dark:bg-background">
			{#each items as item}
				<a href={item.href} class="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
					{item.name}
				</a>
			{/each}
		</div>
	{/if}
</div>
