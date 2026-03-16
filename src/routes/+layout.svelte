<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';
	import { page } from '$app/state';
	import GroupPicture from '$lib/assets/Gruppfoto.webp';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Onlineföreningen SGC</title>
	<meta
		name="description"
		content="Vi är en medlemsdriven, HBTQ-vänlig förening och digitalt forum för ungdomar. Vi hänger främst på vår Discord som är öppen för alla!"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://sgc.se/" />
	<meta property="og:title" content="Onlineföreningen SGC" />
	<meta
		property="og:description"
		content="Vi är en medlemsdriven, HBTQ-vänlig förening och digitalt forum för ungdomar. Vi hänger främst på vår Discord som är öppen för alla!"
	/>

	<meta property="og:image" content="{page.url.origin}{GroupPicture}" />
</svelte:head>

<svelte:body />

<Navbar />
{@render children()}
<Footer />
