import type { BlogRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getList } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals }) => {
	const blogPosts = await getList<BlogRecord>(locals.pb, 'Blog');

	return {
		blogPosts: blogPosts.items,
	};
};
