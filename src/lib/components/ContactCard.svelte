<script lang="ts">
    import type { Component } from 'svelte';
	type IconProp = Component | string;

    let { name, Icon, link } = $props<{ name: string; Icon: IconProp; link: string }>();
</script>

<div class="w-max">
    <a class="flex flex-col items-center p-4 duration-300 hover:scale-110" href={link}>
        {#if typeof Icon === 'string'}
            <img src={Icon} alt={name} class="h-32 w-32" />
        {:else}
            <Icon class="h-32 w-32" />
        {/if}
        <h1 class="text-2xl font-bold">{name}</h1>
    </a>
</div>