<script lang="ts">
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Sun, Moon, Menu, X } from 'lucide-svelte';

	import Logo from '$lib/components/Logo.svelte';
	import NavLink from '$lib/components/navbar/NavLink.svelte';
	import NavDropdown from '$lib/components/navbar/NavDropdown.svelte';
	import AnimatedThemeToggler from '../magic/animated-theme-toggler/animated-theme-toggler.svelte';

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

	const NAV = {
		main: [
			{ name: 'Blog', href: '/blog' },
			{ name: 'Kalendern', href: '/kalendern' },
		],
		more: [
			{ name: 'Information', href: '/information' },
			{ name: 'Samarbeten', href: '/samarbeten' },
			{ name: 'Minecraft Servrar', href: '/minecraft-servrar' },
		],
		end: [{ name: 'Kontakt', href: '/kontakt' }],
	};
</script>

<ModeWatcher />

<nav class="z-10 flex items-center justify-between bg-white px-4 py-3 shadow-xl dark:bg-[#121212]">
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
		{#each NAV.main as link}
			<NavLink {...link} />
		{/each}

		<NavDropdown title="Mer" items={NAV.more} />

		{#each NAV.end as link}
			<NavLink {...link} />
		{/each}

		<AnimatedThemeToggler />
	</div>
</nav>

{#if menuOpen}
	<div class="flex flex-col bg-white p-4 shadow-xl md:hidden dark:bg-[#121212]">
		{#each NAV.main as link}
			<NavLink {...link} mobile />
		{/each}

		{#each NAV.more as link}
			<NavLink {...link} mobile />
		{/each}

		{#each NAV.end as link}
			<NavLink {...link} mobile />
		{/each}

		<AnimatedThemeToggler />
	</div>
{/if}
