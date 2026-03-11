<script lang="ts">
	import GruppFoto from '$lib/assets/Gruppfoto.webp';
	import Logo from '$lib/components/Logo.svelte';

	let Desc =
		'Vi är en medlemsdriven, HBTQ-vänlig förening och digitalt forum för ungdomar. Vi hänger främst på vår Discord som är öppen för alla!';
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
<div class="flex justify-center">
	<div class="flex max-w-[80vw] flex-col justify-center text-center">
		<p class="mt-16 text-xl">
			Vi är en medlemsdriven, HBTQ-vänlig förening och digitalt forum för ungdomar. Vi hänger främst på vår Discord som är öppen för alla!
			Med stöd av Sverok. Detta är vår hemsida där ni kan hitta information om våra event (digitala och fysiska) på vår kalender, om våra
			spelservrar under servrar, och om vår förening i allmänhet på om oss. Om du är förälder till ett barn som hänger i SGC och vill veta
			mer om oss, besök gärna vår flik för föräldrar. Vill du få reda på vilken level någon medlem av discorden är? Besök
			discord-medlemssidan.
		</p>
	</div>
</div>
