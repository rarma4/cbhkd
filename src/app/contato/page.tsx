'use client'
import '../styles/pages/page.scss'
import HeaderContato from '../sections/HeaderContato'
import QuemPodeTreinar from '../sections/QuemPodeTreinar'
import Contato from '../sections/Contato'
import Regras from '../sections/Regras'
import Estudo from '../sections/Estudo'
import BannerInferiorContato from '../sections/BannerInferiorContato'

export default function Graduacao() {
  return (
    <>
      <HeaderContato/>
      <Contato/>
      <BannerInferiorContato/>
    </>
  )
}
