import { Header } from '../../components/Heeader'
import { Hero } from '../../components/Hero'
import { Navbar } from '../../components/Navbar'
import Testimonial from '../../components/Testimonial'

export function Home() {
  return (
    <div className="min-h-screen w-full font-baijamjuree-regular">
      <Navbar />
      <Header />
      <Hero />
      <Testimonial />
      <Testimonial />
      <Testimonial />
      <div className="h-screen bg-blue-600"></div>
      <div className="h-screen bg-blue-500 p-24">
        <h1 className="font-roboto-regular text-2xl">Hello world</h1>
      </div>
      <div className="h-screen bg-blue-400"></div>
    </div>
  )
}
