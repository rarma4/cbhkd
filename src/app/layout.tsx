import './styles/globals.scss'
import type { Metadata } from 'next'
import { lato } from './utils/Fonts'
// import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootswatch/dist/flatly/bootstrap.min.css'
import 'bootswatch/dist/lux/bootstrap.min.css';
import Navigation from './components/Navigation'
import Footer from './sections/Footer'
import Rodape from './sections/Rodape'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cbhkd.com.br/'),
  alternates: {
    canonical: 'https://www.cbhkd.com.br/',
  },
  title: `Confederação Brasileira de Hapkido`,
  description: 'Pagina da confederação Brasileira de Hapkido, arte marcial mundial de defesa pessoal',
  robots: 'index, follow',
  keywords: ['Hapkido', 'CBHKD', 'Confederação Brasileira de Hapkido', 'Artes Marciais', 'Defesa Pessoal'],
  openGraph: {
    title: 'Confederação Brasileira de Hapkido',
    description: 'Pagina da confederação Brasileira de Hapkido, arte marcial mundial de defesa pessoal',
    url: 'https://www.cbhkd.com.br/',
    siteName: 'Confederação Brasileira de Hapkido',
  },
  twitter: {
    title: 'Confederação Brasileira de Hapkido',
    description: 'Pagina da confederação Brasileira de Hapkido, arte marcial mundial de defesa pessoal',
    card: 'summary_large_image',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${lato.className}`}>
        <Navigation />
        {children}
        <Rodape />
        <Footer />
        <script src="../../assets/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  )
}
