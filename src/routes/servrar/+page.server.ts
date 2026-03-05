import type { ServersRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getList } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals }) => {
	const servers = await getList<ServersRecord>(locals.pb, 'Servers');

	return {
		servers: servers.items,
	};
};
