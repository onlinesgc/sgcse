<script lang="ts">
	let { title, content } = $props<{ title?: string; content?: string }>();
</script>

<div class="rounded-xl bg-neutral-50 p-4 shadow-xl">
	<h1 class="Sansumu text-4xl font-bold text-primary-500">{title}</h1>
	<span>{@html content}</span>
</div>
