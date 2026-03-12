<script lang="ts">
	import GruppFoto from '$lib/assets/Gruppfoto.webp';
	import ContactCard from '$lib/components/ContactCard.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { mode } from 'mode-watcher';
	import SverokIconBlack from '$lib/assets/icons/sverok_black.svg';
	import SverokIconWhite from '$lib/assets/icons/sverok_white.svg';
	import DiscordWidget from '$lib/components/DiscordWidget.svelte';
	import { siDiscord } from 'simple-icons';

	let Desc =
		'Vi är en medlemsdriven, HBTQ-vänlig förening och digitalt forum för ungdomar. Vi hänger främst på vår Discord som är öppen för alla!';
</script>

<div>
	<div class="relative">
		<img src={GruppFoto} alt="" class="img-clip" />
		<div class="absolute top-[10vw] right-[8vw] max-sm:hidden">
			<Logo responsive={true} class="" />
			<h6
				class="absolute mt-[6vw] w-[36vw] -translate-x-[6vw] text-xs font-medium text-clip text-gray-600 md:text-base xl:text-xl dark:text-white"
			>
				{Desc}
			</h6>
		</div>
	</div>
	<div class="flex justify-center sm:hidden">
		<div class="flex w-[80vw] flex-col items-center">
			<Logo responsive={true} class="m-8" />
			<h6 class="font-medium">{Desc}</h6>
		</div>
	</div>
</div>

<div class="mt-16 flex items-center justify-around max-md:flex-col">
	<div class="flex text-center">
		<div class="flex flex-col gap-8">
			<div class="flex flex-col">
				<h1 class="Sansumu text-6xl font-bold text-primary-500">Gå med i Discorden!</h1>
				<span class="markdown">Eller gå direkt med i föreningen!</span>
			</div>
			<div class="flex justify-around">
				<ContactCard name="Discord" Icon={siDiscord} link="https://discord.sgc.se" />
				<ContactCard name="Bli medlem" Icon={mode.current === 'light' ? SverokIconBlack : SverokIconWhite} link="https://sverok.se" />
			</div>
		</div>
	</div>
	<div class="m-6">
		<DiscordWidget />
	</div>
</div>
