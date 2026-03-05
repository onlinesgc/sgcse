<script lang="ts">
	import SGClogo from '$lib/assets/SGC-logo.webp';

	type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

	let { responsive = false, size = 'm', ...rest } = $props<{ responsive?: boolean; size?: Size; class?: string }>();

	const responsive_sizes: Record<string, string> = {
		xs: 'h-4',
		s: 'h-8',
		m: 'h-16',
		l: 'h-32',
		xl: 'h-64',
	};

	const sizes: Record<string, string> = {
		xs: 'h-[4vw]',
		s: 'h-[8vw]',
		m: 'h-[16vw]',
		l: 'h-[32vw]',
		xl: 'h-[64vw]',
	};
</script>

<img src={SGClogo} alt="logo" class={`${responsive ? sizes[size] : responsive_sizes[size]} ${rest.class ?? ''}`} />
