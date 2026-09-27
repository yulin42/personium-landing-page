export const metadata = {
  title: { absolute: 'Hava AI' },
  description: 'Hava AI is a calm reading app. Generate short posts on a theme, read them one at a time, and keep the ones you want.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
// import Newsletter from '@/components/newsletter'
// import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Zigzag /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
