<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SGClogo from '$lib/assets/SGC-logo.webp';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="shadow-xl">
	<Navbar>
		<NavBrand href="/">
			<img src={SGClogo} alt="logo" class="h-12" />
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi class="text-xl" href="/kalender">Kalendern</NavLi>
			<NavLi class="text-xl" href="/servrar">Servrar</NavLi>
			<NavLi class="text-xl" href="/om-oss">Om oss</NavLi>
			<NavLi class="text-xl" href="/sociala-medier">Sociala Medier</NavLi>
		</NavUl>
	</Navbar>
</div>
{@render children()}
