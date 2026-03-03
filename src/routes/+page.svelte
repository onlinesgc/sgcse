<script lang="ts">
    import { Button } from "flowbite-svelte";
    let { data } = $props();

    function sayHello() {
        console.log("Hello")
    }
</script>

<div class="p-4 flex flex-col gap-4">
    {#each data.homePagePosts as post}
        <h2>{post.text}</h2>
    {/each}
</div>