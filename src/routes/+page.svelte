<script lang="ts">
    import { Button } from "flowbite-svelte";

    function sayHello() {
        console.log("Hello")
    }
</script>

<Button onclick={sayHello}>Hello</Button>