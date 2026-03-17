<script lang="ts">
	import GruppFoto from '$lib/assets/Gruppfoto.webp';
	import ContactCard from '$lib/components/ContactCard.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import SverokIcon from '$lib/assets/icons/SverokIcon.svelte';
	import DiscordWidget from '$lib/components/DiscordWidget.svelte';
	import { siDiscord } from 'simple-icons';

	const desc =
		'Vi är en medlemsdriven, HBTQ-vänlig förening och digitalt forum för ungdomar. Vi hänger främst på vår Discord som är öppen för alla!';
</script>

<!-- Hero section -->
<section class="relative">
	<img src={GruppFoto} alt="" class="img-clip" />

	<!-- Desktop overlay -->
	<div class="absolute top-[10vw] right-[8vw] hidden sm:block">
		<Logo responsive />

		<h6 class="absolute mt-[6vw] w-[36vw] -translate-x-[6vw] text-xs font-medium text-gray-600 md:text-base xl:text-xl dark:text-white">
			{desc}
		</h6>
	</div>
</section>

<!-- Mobile description -->
<section class="mx-auto flex w-[80vw] flex-col items-center sm:hidden">
	<h6 class="m-8 text-center font-medium">{desc}</h6>
</section>

<!-- Join section -->
<section class="mt-8 flex items-center justify-around max-md:flex-col">
	<div class="flex flex-col gap-8 text-center">
		<div>
			<h1 class="Sansumu m-4 text-6xl font-bold text-primary-500">Gå med i SGC idag!</h1>
			<span class="markdown">Gå med i vår öppna discord och bli medlem i vår förening helt gratis!</span>
		</div>

		<div class="flex justify-around">
			<ContactCard name="Discord" Icon={siDiscord} link="https://discord.sgc.se" />
			<ContactCard name="Bli medlem" Icon={SverokIcon} link="https://blimedlem.sgc.se" />
		</div>
	</div>

	<div class="m-6">
		<DiscordWidget />
	</div>
</section>
