<script lang="ts">
    let { children, ...rest } = $props();
</script>

<section class="flex justify-center {rest.class}">
    {@render children()}
</section>