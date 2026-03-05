import type { ServersRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getOne } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals, params }) => {
	const server = await getOne<ServersRecord>(locals.pb, 'Servers', params.id);

	return {
		server,
	};
};
