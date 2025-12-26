import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseURL = 'https://www.cbhkd.com.br'
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseURL}/sitemap.xml`,
    }
}