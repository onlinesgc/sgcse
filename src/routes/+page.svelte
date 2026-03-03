<script lang="ts">
	import GruppFoto from '$lib/assets/Gruppfoto.webp';
	import Logo from '$lib/components/Logo.svelte';
	import TextPage from '$lib/components/TextPage.svelte';

	let Desc =
		'Vi är en medlemssdriven, HBTQ-vänlig förening och digitalt forum för ungdomar. Vi hänger främst på vår Discord som är öppen för alla!';
</script>

<section class="relative">
	<img src={GruppFoto} alt="" class="img-clip" />
	<div class="absolute top-[10vw] right-[8vw] max-sm:hidden">
		<Logo responsive={true} class="" />
		<h6
			class="absolute mt-[6vw] w-[36vw] -translate-x-[6vw] text-xs font-medium text-clip text-gray-600 md:text-base xl:text-xl dark:text-white"
		>
			{Desc}
		</h6>
	</div>
</section>
<section class="flex justify-center sm:hidden">
	<div class="flex w-[80vw] flex-col items-center">
		<Logo responsive={true} class="m-8" />
		<h6 class="font-medium">{Desc}</h6>
	</div>
</section>
<TextPage>
	<h1 class="Sansumu">Hellåj</h1>
</TextPage>
