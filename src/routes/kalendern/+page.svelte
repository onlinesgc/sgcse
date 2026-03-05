<script lang="ts">
	import EventCard from '$lib/components/EventCard.svelte';
	import EventModal from '$lib/components/EventModal.svelte';
	import type { CalanderRecord } from '$lib/types/pocketbase-types.js';
	import { Button } from 'flowbite-svelte';
	import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons';
	import { SvelteDate } from 'svelte/reactivity';

	let { data } = $props();

	let events = $derived(data.calanderRecord);

	let baseDate = $state(new Date());

	let showModal = $state(false);
	let selectedEvent = $state<CalanderRecord | null>(null);

	let weekDays = $derived.by(() => {
		const startOfWeek = new SvelteDate(baseDate);
		const day = startOfWeek.getDay() || 7;
		startOfWeek.setDate(startOfWeek.getDate() - day + 1);
		startOfWeek.setHours(0, 0, 0, 0);

		return Array.from({ length: 7 }, (_, i) => {
			const current = new SvelteDate(startOfWeek);
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

		return events.filter((event) => {
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
		baseDate = new SvelteDate(baseDate.setDate(baseDate.getDate() - 7));
	}

	function nextWeek() {
		baseDate = new SvelteDate(baseDate.setDate(baseDate.getDate() + 7));
	}

	function openEvent(event: CalanderRecord) {
		selectedEvent = event;
		showModal = true;
	}
</script>

<div class="mx-auto flex min-h-[85vh] max-w-screen-2xl flex-col p-4 sm:p-6 lg:p-8">
	<div
		class="flex w-full grow flex-col rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-inner sm:p-7 dark:border-gray-800 dark:bg-[#121212]"
	>
		<div class="mb-6 flex items-center justify-between px-2">
			<h2 class="text-2xl font-bold text-gray-800 dark:text-white">
				{currentMonthDisplay}
			</h2>
			<div class="flex gap-2">
				<Button outline size="sm" color="light" class="dark:border-gray-700 dark:bg-[#1a1a1a]" onclick={prevWeek}>
					<ChevronLeftOutline class="mr-1 h-4 w-4" /> Föregående
				</Button>
				<Button
					outline
					size="sm"
					color="light"
					class="dark:border-gray-700 dark:bg-[#1a1a1a]"
					onclick={() => (baseDate = new SvelteDate())}
				>
					Idag
				</Button>
				<Button outline size="sm" color="light" class="dark:border-gray-700 dark:bg-[#1a1a1a]" onclick={nextWeek}>
					Nästa <ChevronRightOutline class="ml-1 h-4 w-4" />
				</Button>
			</div>
		</div>

		<div class="grid grow grid-cols-1 gap-4 md:grid-cols-7">
			{#each weekDays as day (day.getTime())}
				<div
					class="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#151515]"
				>
					<div
						class="border-b border-gray-200 p-3 text-center dark:border-gray-800
            {day.toDateString() === new Date().toDateString() ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-100 dark:bg-[#1a1a1a]'}"
					>
						<p class="text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
							{day.toLocaleDateString('sv-SE', { weekday: 'short' })}
						</p>
						<p
							class="text-lg font-bold {day.toDateString() === new Date().toDateString()
								? 'text-blue-600 dark:text-blue-400'
								: 'text-gray-900 dark:text-white'}"
						>
							{day.getDate()}
						</p>
					</div>

					<div class="grow bg-transparent p-3">
						{#each getEventsForDay(day) as event (event.id)}
							<EventCard {event} onclick={() => openEvent(event)} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<EventModal bind:open={showModal} event={selectedEvent} />
