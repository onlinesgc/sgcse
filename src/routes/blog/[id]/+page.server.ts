import type { BlogRecord } from '$lib/types/pocketbase-types';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals, params }) => {
	const { id } = params;

	try {
		const blogRecord = await locals.pb.collection('Blog').getOne<BlogRecord>(id);

		return { blogPost: blogRecord };
	} catch {
		throw error(404, {
			message: 'Inlägg inte hittat!'
		});
	}
};
