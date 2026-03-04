<script lang="ts">
  import type { CalanderRecord } from '$lib/types/pocketbase-types.js';
  import { Card, Badge } from 'flowbite-svelte';

  // Svelte 5 props
  let { 
    event, 
    onclick 
  }: { 
    event: CalanderRecord; 
    onclick: () => void; 
  } = $props();
</script>

<Card 
  class="mb-3 p-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all dark:bg-[#1a1a1a] dark:border-gray-800 w-full cursor-pointer"
  onclick={onclick}
>
  <div class="flex justify-between items-start mb-2">
    <h5 class="text-sm font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
      {event.title}
    </h5>
    <Badge color={event.color || 'blue'} size="small">
      {#if event.type === 'weekly'}
        Veckovis
      {:else if event.type === 'nth-weekday'}
        Månadsvis
      {:else}
        En gång
      {/if}
    </Badge>
  </div>
  <p class="font-normal text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
    {@html event.description}
  </p>
</Card>