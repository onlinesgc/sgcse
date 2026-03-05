import type { InformationRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getOne } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals, params }) => {
	const information = await getOne<InformationRecord>(locals.pb, 'Information', params.id);

	return {
		information,
	};
};
