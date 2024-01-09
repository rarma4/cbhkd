import { Salsa, Permanent_Marker, Inter, Roboto_Mono } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
 
export const salsa = Salsa({
  weight: '400',
  variable: '--font-salsa',
  subsets: ['latin'],
  display: 'swap',
})

export const marker = Permanent_Marker({
  weight: '400',
  variable: '--font-marker',
  subsets: ['latin'],
  display: 'swap',
})