import type { CollaborationsRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getList } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals }) => {
    const collabs = await getList<CollaborationsRecord>(locals.pb, 'Collaborations');

    return {
        collabs: collabs.items,
    };
};