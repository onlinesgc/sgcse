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
	<div class="w-full rounded-xl border-gray-200 bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 dark:bg-neutral-800">
		{#if image}
			<img src={image} alt="" class="mb-4 h-40 w-full rounded-lg object-cover lg:mb-6 lg:h-80" />
		{/if}
		<h1 class="Sansemu truncate text-xl font-bold text-primary-500 sm:text-2xl lg:text-4xl">{title}</h1>
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
