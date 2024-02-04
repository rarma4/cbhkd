'use client'
import '../styles/pages/page.scss'
import HeaderGraduacao from '../sections/HeaderGraduacao'
import Mestres from '../sections/Mestres'
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
