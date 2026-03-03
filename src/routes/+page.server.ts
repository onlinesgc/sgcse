import type { HomePagePostRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';

/** @type {PageServerLoad} */
export const load: PageServerLoad  = async ({ locals }) => {
    const homePageRecords = await locals.pb.collection("HomePagePost").getList<HomePagePostRecord>();

    return {
        homePagePosts: homePageRecords.items
    }
};