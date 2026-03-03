<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { ModeWatcher, toggleMode} from 'mode-watcher';

	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';

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
			<NavLi class="text-xl" href="/blog">Blog</NavLi>
			<NavLi class="text-xl" href="/kalendern">Kalendern</NavLi>
			<NavLi class="text-xl" href="/servrar">Servrar</NavLi>
			<NavLi class="text-xl" href="/information">Information</NavLi>
			<NavLi class="text-xl" href="/kontakt">Kontakt</NavLi>
			<button onclick={toggleTheme} class="ml-4 p-2"><DarkModeIcon /></button>
		</NavUl>
	</Navbar>
</div>
