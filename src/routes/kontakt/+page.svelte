<script>
	import ContactCard from '$lib/components/ContactCard.svelte';
	import { Mail } from 'lucide-svelte';
	import { siDiscord, siX, siGithub, siInstagram, siYoutube, siFacebook } from 'simple-icons';
	import SverokIconBlack from '$lib/assets/icons/sverok_black.svg';
	import SverokIconWhite from '$lib/assets/icons/sverok_white.svg';
	import { mode } from 'mode-watcher';
</script>

<div class="flex flex-col items-center justify-center text-center">
	<span class="m-4">
		<h1 class="Sansumu text-6xl text-primary-500">Kontakta oss</h1>
		<p class="markdown">
			Via mail: <a href="mailto:kontakt@sgc.se">kontakt@sgc.se</a><br />
			Via discord: Öppna en ticket i <a href="https://discord.com/channels/516605157795037185/834118959053275176">#hjälp</a>
		</p>
	</span>
	<h1 class="Sansumu text-6xl text-primary-500">Våra Sociala Medier</h1>
	<div class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
		<ContactCard name="Email" Icon={Mail} link="mailto:kontakt@sgc.se" />
		<ContactCard name="Bli medlem" Icon={mode.current === 'dark' ? SverokIconWhite : SverokIconBlack} link="https://sverok.se" />
		<ContactCard name="Discord" Icon={siDiscord} link="https://discord.sgc.se" />
		<ContactCard name="Instagram" Icon={siInstagram} link="https://www.instagram.com/sgckontot/" />
		<ContactCard name="Youtube" Icon={siYoutube} link="https://www.youtube.com/@onlineforeningensgc" />
		<ContactCard name="X" Icon={siX} link="https://x.com/sgckontot/" />
		<ContactCard name="Facebook" Icon={siFacebook} link="https://www.facebook.com/people/Onlinef%C3%B6reningen-SGC/61554997371254/" />
		<ContactCard name="Github" Icon={siGithub} link="https://github.com/onlinesgc" />
	</div>
</div>
