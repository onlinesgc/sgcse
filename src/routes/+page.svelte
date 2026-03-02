<script lang="ts">
    import Button from "$lib/components/ui/button/button.svelte";

    function sayHello() {
        console.log("Hello")
    }
</script>

<Button onclick={sayHello}>Hello</Button>