
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://www.cbhkd.com.br/'),
    alternates: {
        canonical: '/galeria',
    },
    title: `Galeria de imagens da Confederação Brasileira de Hapkido`,
    description: 'Pagina da confederação Brasileira de Hapkido, arte marcial mundial de defesa pessoal ',
    robots: 'index, follow',
    keywords: ['Hapkido', 'CBHKD', 'Confederação Brasileira de Hapkido', 'Artes Marciais', 'Defesa Pessoal'],
    openGraph: {
        title: 'Galeria de imagens da Confederação Brasileira de Hapkido',
        description: 'Pagina da confederação Brasileira de Hapkido, arte marcial mundial de defesa pessoal',
        url: 'https://www.cbhkd.com.br/galeria',
        siteName: 'Confederação Brasileira de Hapkido',
    },
    twitter: {
        title: 'Galeria de imagens da Confederação Brasileira de Hapkido',
        description: 'Pagina da confederação Brasileira de Hapkido, arte marcial mundial de defesa pessoal',
        card: 'summary_large_image',
    },
}

export default function GraduacaoLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
