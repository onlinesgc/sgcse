<script lang="ts">
	import { ChevronDown } from 'lucide-svelte';

	interface Props {
		title: string;
		items: { name: string; href: string }[];
		mobile?: boolean;
		onClick: () => void;
	}

	let { title, items, mobile = false, onClick }: Props = $props();

	let open = $state(false);
	let ref: HTMLDivElement;

	function handleClickOutside(event: MouseEvent) {
		if (open && ref && !ref.contains(event.target as Node)) {
			open = false;
		}
	}

	$effect(() => {
		if (!mobile && open) {
			window.addEventListener('click', handleClickOutside);
			return () => window.removeEventListener('click', handleClickOutside);
		}
	});
</script>

<div class="relative" bind:this={ref}>
	<button class="flex cursor-pointer items-center text-xl hover:text-primary-500" onclick={() => (open = !open)}>
		{title}
		<ChevronDown class="ml-1 h-4 w-4" />
	</button>

	{#if open}
		{#if mobile}
			<div class="mt-2 flex flex-col pl-4">
				{#each items as item}
					<a
						href={item.href}
						class="py-2 text-lg hover:text-primary-500"
						onclick={() => {
							open = false;
							onClick();
						}}
					>
						{item.name}
					</a>
				{/each}
			</div>
		{:else}
			<div class="absolute -left-4 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg dark:bg-background">
				{#each items as item}
					<a
						href={item.href}
						class="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
						onclick={() => {
							open = false;
							onClick();
						}}
					>
						{item.name}
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>
