import type { CollaborationsRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getList } from '$lib/pocketbase';
import type { ListResult } from 'pocketbase';

export const load: PageServerLoad = async ({ locals }) => {
	let collabs = await getList<CollaborationsRecord>(locals.pb, 'Collaborations');

	return {
		collabs: collabs.items.sort((a, b) => {
			const az = a?.z_index ?? 0;
			const bz = b?.z_index ?? 0;

			if (az > bz) return -1;
			if (az < bz) return 1;
			return 0;
		}),
	};
};
