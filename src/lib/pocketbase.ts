import PocketBase from 'pocketbase';
import { error } from '@sveltejs/kit';

export async function getList<T>(pb: PocketBase, collection: string) {
	return pb.collection(collection).getList<T>();
}

export async function getOne<T>(pb: PocketBase, collection: string, id: string) {
	try {
		return await pb.collection(collection).getOne<T>(id);
	} catch {
		throw error(404, {
			message: `${collection} inte hittad!`,
		});
	}
}
