import { getList } from '$lib/pocketbase';
import type { InformationRecord } from '$lib/types/pocketbase-types';

export async function GET({ locals }) {
	const siteUrl = 'https://dev.sgc.se';
	const information = await getList<InformationRecord>(locals.pb, 'Information');

	const pages = ['', '/information', '/kalendern', '/kontakt', '/nyheter', '/servrar'];

	for (const item of information.items) {
		pages.push(`/information/${item.id}`);
	}

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
        >
            ${pages
							.map(
								(page) => `
                <url>
                    <loc>${siteUrl}${page}</loc>
                    <changefreq>weekly</changefreq>
                    <priority>${page === '' ? '1.0' : '0.8'}</priority>
                </url>
            `,
							)
							.join('')}
        </urlset>
    `.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
}
