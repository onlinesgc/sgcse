import type { InformationRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getList } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals }) => {
    const information = await getList<InformationRecord>(locals.pb, 'Information');

    return {
        information: information.items,
    };
};