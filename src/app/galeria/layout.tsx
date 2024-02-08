
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://www.cbhkd.com.br/'),
    alternates: {
      canonical: '/galeria',
    },
    title: `Galeria de imagens da Confederação Brasileira de Hapkido`,
    description: 'Pagina da confederação Brasileira de Hapkido, arte marcial mundial de defesa pessoal ',
    robots: 'index, follow',
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
