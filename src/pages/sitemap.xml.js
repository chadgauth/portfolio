import { getCollection } from 'astro:content';

// Get all blog posts
async function getBlogPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf());
}

export async function GET() {
  const posts = await getBlogPosts();
  const siteUrl = 'https://chad.gauthier.dev';
  
  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: '',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: '/blog',
      lastmod: posts.length > 0 ? new Date(posts[0].data.pubDate).toISOString() : new Date().toISOString(),
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: '/cv',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: '/networking',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.7'
    }
  ];

  // Blog posts
  const blogPages = posts.map(post => ({
    url: `/blog/${post.slug}`,
    lastmod: post.data.updatedDate ? new Date(post.data.updatedDate).toISOString() : new Date(post.data.pubDate).toISOString(),
    changefreq: 'monthly',
    priority: '0.8'
  }));

  const allPages = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=3600'
    }
  });
}