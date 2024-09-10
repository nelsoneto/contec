import { Body } from '../../components/Body'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Navbar } from '../../components/Navbar'

export function Home() {
  return (
    <div className="min-h-screen w-full font-baijamjuree-regular">
      <Navbar />
      <Header />
      {/* <Hero /> */}
      <Body />
      <div className="h-screen bg-blue-600"></div>
      <Footer />
    </div>
  )
}
