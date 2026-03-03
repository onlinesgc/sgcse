<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, MegaMenu } from 'flowbite-svelte';
	import { ModeWatcher, toggleMode } from 'mode-watcher';

	import { SunSolid, MoonSolid, ChevronDownOutline } from 'flowbite-svelte-icons';

	import Logo from '$lib/components/Logo.svelte';

	let isDark = $state(false);
	let DarkModeIcon = $derived(isDark ? SunSolid : MoonSolid);

	function toggleTheme() {
		toggleMode();
		isDark = !isDark;
	}

	const Menu = [
		{ name: 'Om Oss', href: '/om-oss' },
		{ name: 'Servrar', href: '/servrar' },
		{ name: 'Information', href: '/information' },
		{ name: 'Samarbeten', href: '/samarbeten' }
	];
</script>

<ModeWatcher />

<div class="z-10 shadow-xl">
	<Navbar>
		<NavBrand href="/">
			<Logo />
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi class="text-xl" href="/blog">Blog</NavLi>
			<NavLi class="text-xl" href="/kalendern">Kalendern</NavLi>

			<NavLi class="flex cursor-pointer items-center">
				<span class="text-xl">Mer</span><ChevronDownOutline />
			</NavLi>
			<MegaMenu items={Menu} class="dark:bg-[#121212]">
				{#snippet children({ item })}
					<a
						href={item.href}
						class="hover:text-primary-500 dark:text-gray-400 dark:hover:text-white">{item.name}</a
					>
				{/snippet}
			</MegaMenu>

			<NavLi class="text-xl" href="/kontakt">Kontakt</NavLi>
			<button onclick={toggleTheme} class="ml-4 p-2"><DarkModeIcon /></button>
		</NavUl>
	</Navbar>
</div>
