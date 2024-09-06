import { Hero } from '../../components/Hero'
import { Navbar } from '../../components/Navbar'

export function Solutions() {
  return (
    <div className="min-h-screen w-full py-20 font-baijamjuree-regular">
      <Navbar />
      <div className="flex items-center justify-center">
        <span className="font-baijamjuree-bold text-3xl">Soluções</span>
      </div>
      <Hero />
      <Hero />
      <Hero />
    </div>
  )
}
