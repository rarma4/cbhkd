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
  title: `Confederação Brasileira de Hapkido`,
  description: 'Pagina de Rafael Marinho',
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
