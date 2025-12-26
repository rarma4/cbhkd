import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://www.cbhkd.com.br'
  return [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
        url: `${baseURL}/sobre`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      },
      {
        url: `${baseURL}/graduacao`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${baseURL}/galeria`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.7,
      },
      {
        url: `${baseURL}/contato`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.6,
      },
  ]
}