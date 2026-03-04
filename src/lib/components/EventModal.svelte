<script lang="ts">
  import type { CalanderRecord } from '$lib/types/pocketbase-types.js';
  import { Modal, Badge, Button } from 'flowbite-svelte';

  let { 
    event, 
    open = $bindable(false) 
  }: { 
    event: CalanderRecord | null; 
    open: boolean; 
  } = $props();
</script>

<Modal 
  title={event?.title || 'Händelsedetaljer'} 
  bind:open={open} 
  outsideclose 
  class="dark:bg-[#1a1a1a]"
>
  <div class="space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
    <div class="flex items-center gap-2">
      {#if event}
        <Badge color={event.color || 'blue'}>
          {#if event.type === 'weekly'}
            Veckovis händelse
          {:else if event.type === 'nth-weekday'}
            Månatlig händelse
          {:else}
            Engångshändelse
          {/if}
        </Badge>
      {/if}
    </div>
    
    <div class="prose dark:prose-invert max-w-none">
      {#if event?.description}
        {@html event.description}
      {:else}
        <p class="italic text-gray-400">Inga ytterligare detaljer angivna.</p>
      {/if}
    </div>
  </div>
</Modal>