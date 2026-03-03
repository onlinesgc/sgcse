<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SGClogo from '$lib/assets/SGC-logo.webp';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from 'flowbite-svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';

	let { children } = $props();
	let isDark = $state(false);

	function toggleTheme() {
		toggleMode();
		isDark = !isDark;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

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
		<Button onclick={toggleTheme} class="ml-4 dark:bg-secondary-50 dark:hover:bg-secondary-50">{isDark ? '☀️' : '🌙'}</Button>
	</Navbar>
</div>

{@render children()}
