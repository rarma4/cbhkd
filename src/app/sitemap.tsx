import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.cbhkd.com.br/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
        url: 'https://www.cbhkd.com.br/sobre',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.cbhkd.com.br/graduacao',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.cbhkd.com.br/galeria',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: 'https://www.cbhkd.com.br/contato',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
  ]
}