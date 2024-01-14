import './styles/pages/page.scss'
import HeaderHome from './sections/HeaderHome'
import Sobre from  './sections/Sobre'
import Servicos from './sections/Conhecimentos'
import Skills from './sections/Skils'
import Treine from './sections/Treine'

export default function Home() {
  return (
    <>
      <HeaderHome/>
      <Skills/>
      <Treine/>
      <Servicos/>
      <Sobre/>
    </>
  )
}
