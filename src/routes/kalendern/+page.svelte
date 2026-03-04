<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';
	import EventModal from '$lib/components/EventModal.svelte';
  import type { CalanderRecord } from '$lib/types/pocketbase-types.js';
  import { Card, Badge, Button, Modal } from 'flowbite-svelte';
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  let { data } = $props();

  let events = $derived(data.calanderRecord);

  let baseDate = $state(new Date());

  let showModal = $state(false);
  let selectedEvent = $state<CalanderRecord | null>(null);

  let weekDays = $derived.by(() => {
    const startOfWeek = new Date(baseDate);
    const day = startOfWeek.getDay() || 7;
    startOfWeek.setDate(startOfWeek.getDate() - day + 1);
    startOfWeek.setHours(0, 0, 0, 0);

    return Array.from({ length: 7 }, (_, i) => {
      const current = new Date(startOfWeek);
      current.setDate(startOfWeek.getDate() + i);
      return current;
    });
  });

  let currentMonthDisplay = $derived.by(() => {
    const monthStr = weekDays[0].toLocaleDateString('sv-SE', { month: 'long', year: 'numeric' });
    return monthStr.charAt(0).toUpperCase() + monthStr.slice(1);
  });

  function getEventsForDay(date: Date) {
    const offset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - offset);
    const dateString = localDate.toISOString().split('T')[0];
    
    const dayOfWeek = date.getDay();
    const weekOfMonth = Math.ceil(date.getDate() / 7);

    return events.filter(event => {
      if (event.type === 'nth-weekday') {
        return event.dayOfWeek === dayOfWeek && event.weekOfMonth === weekOfMonth;
      }
      if (event.type === 'weekly') {
        return event.dayOfWeek === dayOfWeek;
      }
      return event.date === dateString;
    });
  }

  function prevWeek() {
    baseDate = new Date(baseDate.setDate(baseDate.getDate() - 7));
  }

  function nextWeek() {
    baseDate = new Date(baseDate.setDate(baseDate.getDate() + 7));
  }

  function openEvent(event: CalanderRecord) {
    selectedEvent = event;
    showModal = true;
  }
</script>


<div class="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8 min-h-[85vh] flex flex-col">
  
  <div class="grow flex flex-col w-full p-5 sm:p-7 bg-gray-50 dark:bg-[#121212] rounded-2xl shadow-inner border border-gray-200 dark:border-gray-800">
    
    <div class="flex justify-between items-center mb-6 px-2">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
        {currentMonthDisplay}
      </h2>
      <div class="flex gap-2">
        <Button outline size="sm" color="light" class="dark:bg-[#1a1a1a] dark:border-gray-700" onclick={prevWeek}>
          <ChevronLeftOutline class="w-4 h-4 mr-1" /> Föregående
        </Button>
        <Button outline size="sm" color="light" class="dark:bg-[#1a1a1a] dark:border-gray-700" onclick={() => baseDate = new Date()}>
          Idag
        </Button>
        <Button outline size="sm" color="light" class="dark:bg-[#1a1a1a] dark:border-gray-700" onclick={nextWeek}>
          Nästa <ChevronRightOutline class="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-7 gap-4 grow">
      {#each weekDays as day}
        <div class="flex flex-col bg-white dark:bg-[#151515] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
          
          <div class="text-center p-3 border-b border-gray-200 dark:border-gray-800 
            {day.toDateString() === new Date().toDateString() ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-100 dark:bg-[#1a1a1a]'}">
            <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {day.toLocaleDateString('sv-SE', { weekday: 'short' })}
            </p>
            <p class="text-lg font-bold {day.toDateString() === new Date().toDateString() ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}">
              {day.getDate()}
            </p>
          </div>

          <div class="p-3 grow bg-transparent">
            {#each getEventsForDay(day) as event}
              <EventCard {event} onclick={() => openEvent(event)} />
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>


<EventModal
  bind:open={showModal} 
  event={selectedEvent} 
/>