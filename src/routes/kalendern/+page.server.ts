import type { CalanderRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';

/** @type {PageServerLoad} */
export const load: PageServerLoad = async ({ locals }) => {
	const calanderRecord = await locals.pb.collection('calander').getList<CalanderRecord>();

	return {
		calanderRecord: calanderRecord.items
	};
};
