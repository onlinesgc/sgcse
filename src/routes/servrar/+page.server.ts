import type { ServersRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';

/** @type {PageServerLoad} */
export const load: PageServerLoad = async ({ locals }) => {
    const serversRecord = await locals.pb.collection('Servers').getList<ServersRecord>();

    return {
        servers: serversRecord.items,
    };
};
