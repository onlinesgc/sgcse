<script lang="ts">
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Menu, X } from 'lucide-svelte';

	import Logo from '$lib/components/Logo.svelte';
	import NavLink from '$lib/components/navbar/NavLink.svelte';
	import AnimatedThemeToggler from '../animated-theme-toggler.svelte';
	import { Moon, Sun } from '@lucide/svelte';

	let isDark = $state(false);
	let menuOpen = $state(false);

	$effect(() => {
		if (typeof window !== 'undefined') {
			isDark = document.documentElement.classList.contains('dark');
		}
	});

	function toggleTheme() {
		toggleMode();
		isDark = !isDark;
	}

	function closeMenu() {
		menuOpen = false;
	}

	const NAV = [
		{ name: 'Nyheter', href: '/nyheter' },
		{ name: 'Kalendern', href: '/kalendern' },
		{ name: 'Info', href: '/information' },
		{ name: 'Kontakt', href: '/kontakt' },
	];
</script>

<ModeWatcher />

<nav class="relative z-10 flex items-center justify-between bg-white px-4 py-3 shadow-xl dark:bg-background">
	<a href="/">
		<Logo />
	</a>

	<button class="md:hidden" onclick={() => (menuOpen = !menuOpen)}>
		{#if menuOpen}
			<X class="h-6 w-6" />
		{:else}
			<Menu class="h-6 w-6" />
		{/if}
	</button>

	<div class="hidden items-center gap-6 md:flex">
		{#each NAV as link}
			<NavLink href={link.href} name={link.name} />
		{/each}
		<AnimatedThemeToggler />
	</div>

	{#if menuOpen}
		<div class="absolute top-full left-0 z-50 flex w-full flex-col bg-white p-4 shadow-xl md:hidden dark:bg-background">
			{#each NAV as link}
				<NavLink href={link.href} name={link.name}/>
			{/each}

			<button
				onclick={() => {
					toggleTheme();
					closeMenu();
				}}
				class="mt-3 flex items-center py-2"
			>
				{#if isDark}
					<Sun class="mr-2 h-5 w-5" /> Ljust läge
				{:else}
					<Moon class="mr-2 h-5 w-5" /> Mörkt läge
				{/if}
			</button>
		</div>
	{/if}
</nav>
