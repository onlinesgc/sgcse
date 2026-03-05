<script lang="ts">
	interface Props {
		href: string;
		title: string;
		children?: import('svelte').Snippet<[]>;
	}

	let { href, title, children }: Props = $props();
</script>

<a class="w-full rounded-xl border-gray-200 bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 dark:bg-neutral-800" {href}>
	<h1 class="Sansumu text-4xl font-bold text-primary-500">{title}</h1>
	{#if children}
		{@render children()}
	{/if}
</a>
