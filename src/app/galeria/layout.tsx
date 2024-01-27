
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Galeria da CBHKD`,
    description: 'Pagina de Rafael Marinho',
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
