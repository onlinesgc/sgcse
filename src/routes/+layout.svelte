<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.webp';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';

	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';

	import Logo from '$lib/components/Logo.svelte';

	let { children } = $props();
	let isDark = $state(false);
	let DarkModeIcon = $derived(isDark ? SunSolid : MoonSolid);

	function toggleTheme() {
		toggleMode();
		isDark = !isDark;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="z-10 shadow-xl">
	<Navbar>
		<NavBrand href="/">
			<Logo />
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi class="text-xl" href="/blog">Blog</NavLi>
			<NavLi class="text-xl" href="/kalender">Kalendern</NavLi>
			<NavLi class="text-xl" href="/servrar">Servrar</NavLi>
			<NavLi class="text-xl" href="/servrar">Information</NavLi>
			<NavLi class="text-xl" href="/kontakt">Kontakt</NavLi>
			<button onclick={toggleTheme} class="ml-4 p-2"><DarkModeIcon /></button>
		</NavUl>
	</Navbar>
</div>

{@render children()}
