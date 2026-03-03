import type { BlogRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { id } = params;

	try {
		const blogRecord: BlogRecord = await locals.pb.collection('Blog').getOne(id);
		return { blogPost: blogRecord };
	} catch {
		return { blogPost: null };
	}
};
