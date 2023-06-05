import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/home/Hero'
import Company from '@/components/home/companies'
import Ourservices from '@/components/home/services'

export default function Home() {
  return (<div>
    <Navbar />
    <Hero />
    <Company/>
    <Ourservices/>
  </div>
  )
}
