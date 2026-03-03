<script lang="ts">
	import type { Component } from 'svelte';
	let { name, Icon, link } = $props<{ name: string; Icon: Component; link: string }>();
</script>

<div class="w-max">
	<a class="flex flex-col items-center p-4 duration-300 hover:scale-110" href={link}>
		<Icon class="h-32 w-32" />
		<h1 class="text-2xl font-bold">{name}</h1>
	</a>
</div>
