import Hero from '@/sections/Hero'
import Button from '@/components/Button'
import Field from '@/components/Field'
import About from '@/sections/About'
import Gallery from '@/sections/Gallery'
import Testimonials from '@/sections/Testimonials'
import Contacts from '@/sections/Contacts'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <Hero />
      <About/>
      <Gallery/>
      <Testimonials/>
      <Contacts/>
    </>
  )
}
