import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/home/Hero'
import Company from '@/components/home/companies'
import Ourservices from '@/components/home/services'
import Section2 from '@/components/home/section2'
import Pricecomponent from '@/components/home/pricecomponent'
import Footercomponent from '@/components/home/footer'
import TeamComponent from '@/components/home/team'

export default function Home() {
  return (<div>
    <Navbar />
    <Hero />
    <Company/>
    <Ourservices/>
    <Section2/>
    <TeamComponent/>
    <Pricecomponent/>
    <Footercomponent/>
  </div>
  )
}
