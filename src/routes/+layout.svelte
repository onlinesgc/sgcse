<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Onlineföreningen SGC</title>
</svelte:head>

<Navbar />
{@render children()}
<Footer />
