import '../styles/pages/page.scss'
import HeaderSobre from '../sections/HeaderSobre'
import QuemPodeTreinar from '../sections/QuemPodeTreinar'
import Historia from '../sections/Historia'
import Regras from '../sections/Regras'
import Estudo from '../sections/Estudo'
import BannerInferior from '../sections/BannerInferior'

export default function Sobre() {
  return (
    <>
      <HeaderSobre/>
      <QuemPodeTreinar/>
      <Historia/>
      <Regras/>
      <Estudo/>
      <BannerInferior/>
    </>
  )
}
