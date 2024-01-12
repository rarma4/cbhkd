import './styles/pages/page.scss'
import Header from './sections/Header'
import Sobre from  './sections/Sobre'
import Servicos from './sections/Conhecimentos'
import Skills from './sections/Skils'


export default function Home() {
  return (
    <>
      <Header/>
      <Skills/>
      <Servicos/>
      <Sobre/>
    </>
  )
}
