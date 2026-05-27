<script lang="ts">
	interface Props {
		href?: string;
		title: string;
		target?: string;
		children?: import('svelte').Snippet<[]>;
		id: string;
		image?: string;
		[key: string]: any;
	}

	let { target, href, title, children, id, image, ...props }: Props = $props();
</script>

{#snippet inner()}
	<div class="flex w-full gap-4 rounded-xl border-gray-200 bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 dark:bg-neutral-800">
		<div class="min-w-0 flex-1">
			<h1 class="Sansemu truncate text-xl font-bold text-primary-500 sm:text-2xl lg:text-4xl">{title}</h1>
			{#if children}
				{@render children()}
			{/if}
		</div>
		{#if image}
			<img src={image} alt="" class="h-16 w-16 shrink-0 rounded-lg object-contain lg:h-24 lg:w-24" />
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
