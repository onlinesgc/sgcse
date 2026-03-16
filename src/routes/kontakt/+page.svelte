<script lang="ts">
	import ContactCard from '$lib/components/ContactCard.svelte';
	import { Mail } from 'lucide-svelte';
	import { siDiscord, siX, siGithub, siInstagram, siYoutube, siFacebook } from 'simple-icons';
	import SverokIcon from '$lib/assets/icons/SverokIcon.svelte';
	import type { Component } from 'svelte';

	type Contact = {
		name: string;
		icon: string | typeof Mail | Component | typeof siDiscord;
		link: string;
	};

	const contacts: Contact[] = [
		{ name: 'Email', icon: Mail, link: 'mailto:kontakt@sgc.se' },
		{ name: 'Bli medlem', icon: SverokIcon, link: 'https://blimedlem.sgc.se' },
		{ name: 'Discord', icon: siDiscord, link: 'https://discord.sgc.se' },
		{ name: 'Instagram', icon: siInstagram, link: 'https://www.instagram.com/sgckontot/' },
		{ name: 'Youtube', icon: siYoutube, link: 'https://www.youtube.com/@onlineforeningensgc' },
		{ name: 'X', icon: siX, link: 'https://x.com/sgckontot/' },
		{ name: 'Facebook', icon: siFacebook, link: 'https://www.facebook.com/people/Onlinef%C3%B6reningen-SGC/61554997371254/' },
		{ name: 'Github', icon: siGithub, link: 'https://github.com/onlinesgc' },
	];
</script>

<div class="flex flex-col items-center justify-center text-center">
	<section class="m-4">
		<h1 class="Sansumu text-6xl text-primary-500">Kontakta oss</h1>
		<p class="markdown">
			Via mail: <a href="mailto:kontakt@sgc.se">kontakt@sgc.se</a><br />
			Via discord: Öppna en ticket i <a href="https://discord.com/channels/516605157795037185/834118959053275176">#hjälp</a>
		</p>
	</section>

	<h1 class="Sansumu text-6xl text-primary-500">Våra Sociala Medier</h1>
	<div class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		{#each contacts as contact}
			<ContactCard name={contact.name} Icon={contact.icon} link={contact.link} />
		{/each}
	</div>
</div>
