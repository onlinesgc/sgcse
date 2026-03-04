<script>
	import ContactCard from '$lib/components/ContactCard.svelte';
	import {
		DiscordSolid,
		EnvelopeSolid,
		FacebookSolid,
		GithubSolid,
		InstagramSolid,
		XSolid,
		YoutubeSolid
	} from 'flowbite-svelte-icons';
	import SverokIconBlack from '$lib/assets/sverok_black.svg';
	import SverokIconWhite from '$lib/assets/sverok_white.svg';
	import { mode } from 'mode-watcher';
</script>

<div class="flex items-center justify-center">
	<div
		class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
	>
		<ContactCard name="Discord" Icon={DiscordSolid} link="https://discord.sgc.se" />
		<ContactCard name="X" Icon={XSolid} link="https://x.com/sgckontot/" />
		<ContactCard name="Github" Icon={GithubSolid} link="https://github.com/onlinesgc" />
		<ContactCard
			name="Instagram"
			Icon={InstagramSolid}
			link="https://www.instagram.com/sgckontot/"
		/>
		<ContactCard
			name="Youtube"
			Icon={YoutubeSolid}
			link="https://www.youtube.com/@onlineforeningensgc"
		/>
		<ContactCard
			name="Bli medlem"
			Icon={mode.current === 'dark' ? SverokIconWhite : SverokIconBlack}
			link="https://sverok.se"
		/>
		<ContactCard
			name="Facebook"
			Icon={FacebookSolid}
			link="https://www.facebook.com/people/Onlinef%C3%B6reningen-SGC/61554997371254/"
		/>
		<ContactCard name="Email" Icon={EnvelopeSolid} link="mailto:kontakt@sgc.se" />
	</div>
</div>
