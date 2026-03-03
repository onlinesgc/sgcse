<script>
	import ContactCard from '$lib/components/ContactCard.svelte';
	import { DiscordSolid, GithubSolid, InstagramSolid, TwitterSolid, XSolid, YoutubeSolid } from 'flowbite-svelte-icons';
    import SwerockIcon from '$lib/assets/sverok.svg';
</script>


<div class="flex items-center justify-center">
	<div
		class="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
	>
		<ContactCard name="Discord" Icon={DiscordSolid} link="https://discord.sgc.se" />
		<ContactCard name="X" Icon={XSolid} link="https://x.com/sgckontot/" />
		<ContactCard name="Github" Icon={GithubSolid} link="https://github.com/onlinesgc" />
		<ContactCard name="Instagram" Icon={InstagramSolid} link="https://www.instagram.com/sgckontot/" />
		<ContactCard name="Youtube" Icon={YoutubeSolid} link="https://www.youtube.com/@onlineforeningensgc" />
		<ContactCard name="Discord" Icon={DiscordSolid} link="https://blimedlem.sgc.se" />
		<ContactCard name="Discord" Icon={DiscordSolid} link="https://discord.sgc.se" />
		<ContactCard name="Discord" Icon={DiscordSolid} link="https://discord.sgc.se" />
		<ContactCard name="Discord" Icon={DiscordSolid} link="https://discord.sgc.se" />
		<ContactCard name="Discord" Icon={DiscordSolid} link="https://discord.sgc.se" />
	</div>
</div>
