import { error } from '@sveltejs/kit';

export async function GET({ params, locals }) {
	const pbFileUrl = `https://pocketbase.lukasabbe.com/api/files/${params.path}`;

	const response = await fetch(pbFileUrl);

	if (!response.ok) throw error(404, 'File not found');

	return new Response(response.body, {
		headers: {
			'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
