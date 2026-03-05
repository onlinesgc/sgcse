import type { CalanderRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getList } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals }) => {
	const calanderRecord = await getList<CalanderRecord>(locals.pb, 'Calander');

	return {
		calanderRecord: calanderRecord.items,
	};
};
