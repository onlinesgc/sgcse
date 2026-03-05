import type { BlogRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';

/** @type {PageServerLoad} */
export const load: PageServerLoad = async ({ locals }) => {
	const blogRecord = await locals.pb.collection('Blog').getList<BlogRecord>();

	return {
		blogPosts: blogRecord.items,
	};
};
