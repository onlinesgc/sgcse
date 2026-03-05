import type { ServersRecord } from '$lib/types/pocketbase-types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
    const { id } = params;

    try {
        const serversRecord = await locals.pb.collection('Servers').getOne<ServersRecord>(id);
        return { server: serversRecord };
    } catch {
        throw error(404, {
            message: "Server inte hittad!",
        })
    }

};
