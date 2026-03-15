import type { NewsRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getList } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals }) => {
	const blogPosts = await getList<NewsRecord>(locals.pb, 'News');

	return {
		blogPosts: blogPosts.items,
	};
};
