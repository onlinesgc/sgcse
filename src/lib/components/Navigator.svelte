<script lang="ts">
	import { ModeWatcher, toggleMode } from 'mode-watcher';

	import { Sun, Moon, ChevronDown, Menu, X } from 'lucide-svelte';

	import Logo from '$lib/components/Logo.svelte';

	let isDark = $state(false);
	let menuOpen = $state(false);
	let moreOpen = $state(false);
	let moreMenuRef: HTMLDivElement;

	$effect(() => {
		if (typeof window !== 'undefined') {
			isDark = document.documentElement.classList.contains('dark');
		}
	});

	function handleClickOutside(event: MouseEvent) {
		if (moreOpen && moreMenuRef && !moreMenuRef.contains(event.target as Node)) {
			moreOpen = false;
		}
	}

	$effect(() => {
		if (moreOpen) {
			window.addEventListener('click', handleClickOutside);
			return () => window.removeEventListener('click', handleClickOutside);
		}
	});

	function toggleTheme() {
		toggleMode();
		isDark = !isDark;
	}

	const MenuItems = [
		{ name: 'Om Oss', href: '/om-oss' },
		{ name: 'Servrar', href: '/servrar' },
		{ name: 'Information', href: '/information' },
		{ name: 'Samarbeten', href: '/samarbeten' },
	];
</script>

<ModeWatcher />

<nav class="z-10 flex items-center justify-between bg-white px-4 py-3 shadow-xl dark:bg-[#121212]">
	<a href="/" class="flex items-center">
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
		<a class="text-xl hover:text-primary-500" href="/blog">Blog</a>
		<a class="text-xl hover:text-primary-500" href="/kalendern">Kalendern</a>

		<div class="relative" bind:this={moreMenuRef}>
			<button class="flex items-center text-xl hover:text-primary-500" onclick={() => (moreOpen = !moreOpen)}>
				Mer <ChevronDown class="ml-1 h-4 w-4" />
			</button>
			{#if moreOpen}
				<div class="absolute right-0 mt-2 w-48 rounded-lg bg-white py-2 shadow-lg dark:bg-[#121212]">
					{#each MenuItems as item}
						<a href={item.href} class="block px-4 py-2 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">{item.name}</a>
					{/each}
				</div>
			{/if}
		</div>

		<a class="text-xl hover:text-primary-500" href="/kontakt">Kontakt</a>
		<button onclick={toggleTheme} class="ml-4 p-2">
			{#if isDark}
				<Sun class="h-5 w-5" />
			{:else}
				<Moon class="h-5 w-5" />
			{/if}
		</button>
	</div>
</nav>

{#if menuOpen}
	<div class="flex flex-col bg-white p-4 shadow-xl md:hidden dark:bg-[#121212]">
		<a class="py-2 text-xl hover:text-primary-500" href="/blog">Blog</a>
		<a class="py-2 text-xl hover:text-primary-500" href="/kalendern">Kalendern</a>
		{#each MenuItems as item}
			<a class="py-2 text-xl hover:text-primary-500" href={item.href}>{item.name}</a>
		{/each}
		<a class="py-2 text-xl hover:text-primary-500" href="/kontakt">Kontakt</a>
		<button onclick={toggleTheme} class="mt-2 flex items-center py-2">
			{#if isDark}
				<Sun class="mr-2 h-5 w-5" /> Ljust läge
			{:else}
				<Moon class="mr-2 h-5 w-5" /> Mörkt läge
			{/if}
		</button>
	</div>
{/if}
