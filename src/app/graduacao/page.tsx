'use client'
import '../styles/pages/page.scss'
import HeaderGraduacao from '../sections/HeaderGraduacao'
import QuemPodeTreinar from '../sections/QuemPodeTreinar'
import Mestres from '../sections/Mestres'
import Regras from '../sections/Regras'
import Estudo from '../sections/Estudo'
import BannerInferior from '../sections/BannerInferior'

export default function Graduacao() {
  return (
    <>
      <HeaderGraduacao/>
      <Mestres/>
      <BannerInferior/>
    </>
  )
}
