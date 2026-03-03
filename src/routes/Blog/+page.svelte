<script lang="ts">
	let { data } = $props();

	function sayHello() {
		console.log('Hello');
	}
</script>

<div class="flex flex-col gap-4 p-4">
	{#each data.homePagePosts as post}
		{@html post.text}
	{/each}
</div>
