<script lang="ts">
	let {
		href,
		name,
		mobile = false,
	} = $props<{
		href: string;
		name: string;
		mobile?: boolean;
	}>();
</script>

<a {href} class={mobile ? 'py-2 text-xl hover:text-primary-500' : 'text-xl hover:text-primary-500'}>
	{name}
</a>
