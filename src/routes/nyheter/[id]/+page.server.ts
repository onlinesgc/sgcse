import type { NewsRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getOne } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals, params }) => {
	const blogPost = await getOne<NewsRecord>(locals.pb, 'News', params.id);

	return {
		blogPost,
	};
};
