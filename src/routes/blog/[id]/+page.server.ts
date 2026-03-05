import type { BlogRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { getOne } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ locals, params }) => {
	const blogPost = await getOne<BlogRecord>(locals.pb, 'Blog', params.id);

	return {
		blogPost,
	};
};
