import './styles/pages/page.scss'
import HeaderHome from './sections/HeaderHome'
import Sobre from  './sections/Sobre'
import Servicos from './sections/Conhecimentos'
import Skills from './sections/Skils'

export default function Home() {
  return (
    <>
      <HeaderHome/>
      <Skills/>
      <Servicos/>
      <Sobre/>
    </>
  )
}
