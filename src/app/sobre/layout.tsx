
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Sobre a CBHKD`,
    description: 'Pagina de Rafael Marinho',
}

export default function SobreLayout({
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
