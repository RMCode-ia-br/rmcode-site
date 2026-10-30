import { ScrollProgress } from '@/components/scroll-progress'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
