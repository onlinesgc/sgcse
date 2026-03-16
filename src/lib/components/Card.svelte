<script lang="ts">
	interface Props {
		href?: string;
		title: string;
		target?: string;
		children?: import('svelte').Snippet<[]>;
		id: string;
		[key: string]: any;
	}

	let { target, href, title, children, id, ...props }: Props = $props();
</script>

{#snippet inner()}
	<div class="w-full rounded-xl border-gray-200 bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 dark:bg-neutral-800">
		<h1 class="Sansumu truncate text-4xl font-bold text-primary-500">{title}</h1>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/snippet}

<div {...props} {id} title={id} class="{props.class ?? ''} w-full">
	{#if href}
		<a {href} {target}>
			{@render inner()}
		</a>
	{:else}
		{@render inner()}
	{/if}
</div>
