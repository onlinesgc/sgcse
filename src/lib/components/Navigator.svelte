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
</script>

<ModeWatcher />

<div class="z-10 shadow-xl">
	<Navbar>
		<NavBrand href="/">
			<Logo />
		</NavBrand>
		<NavHamburger />
		<NavUl>
			<NavLi class="text-xl mr-4" href="/om-oss">Om Oss</NavLi>
			<NavLi class="text-xl mr-4" href="/blog">Blog</NavLi>
			<NavLi class="text-xl mr-4" href="/information">Information</NavLi>
			<NavLi class="text-xl mr-4" href="/samarbeten">Samarbeten</NavLi>
			<NavLi class="text-xl mr-4" href="/servrar">Servrar</NavLi>
			<NavLi class="text-xl mr-4" href="/kontakt">Kontakt</NavLi>
			<button onclick={toggleTheme} class="ml-4 p-2"><DarkModeIcon /></button>
		</NavUl>
	</Navbar>
</div>
