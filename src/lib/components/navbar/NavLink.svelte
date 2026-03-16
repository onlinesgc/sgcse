<script lang="ts">
	let {
		href,
		name,
		mobile = false,
		onclick,
	} = $props<{
		href: string;
		name: string;
		mobile?: boolean;
		onclick?: () => void;
	}>();
</script>

<a {href} class={mobile ? 'py-2 text-xl hover:text-primary-500' : 'text-xl hover:text-primary-500'} {onclick}>
	{name}
</a>
