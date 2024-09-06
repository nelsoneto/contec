import { Body } from '../../components/Body'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'
import Testimonial from '../../components/Testimonial'

export function Home() {
  return (
    <div className="min-h-screen w-full font-baijamjuree-regular">
      <Navbar />
      <Header />
      {/* <Hero /> */}
      <Body />
      <Testimonial />
      <div className="h-screen bg-blue-600"></div>
      <Footer />
    </div>
  )
}
