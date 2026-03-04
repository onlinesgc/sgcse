<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import Navigator from '$lib/components/Navigator.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigator />
{@render children()}
<Footer />
