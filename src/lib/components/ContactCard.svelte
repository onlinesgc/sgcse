<script lang="ts">
	import type { Mail } from 'lucide-svelte';
	import type { siDiscord, SimpleIcon } from 'simple-icons';
	import type { Component } from 'svelte';

	type IconProp = typeof Mail | Component | typeof siDiscord | string;

	let { name, Icon, link }: { name: string; Icon: IconProp; link: string } = $props();
</script>

<div class="w-max">
	<a href={link} class="flex flex-col items-center p-4 duration-300 hover:scale-110">
		{#if typeof Icon === 'string'}
			<img src={Icon} alt={name} class="h-32 w-32 text-white" />
		{:else if 'svg' in Icon}
			<div class="h-32 w-32">
				{@html Icon.svg.replace('<svg', '<svg fill="currentColor"')}
			</div>
		{:else}
			<Icon class="h-32 w-32" />
		{/if}

		<h1 class="text-2xl font-bold">{name}</h1>
	</a>
</div>
