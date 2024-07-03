import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className="min-h-screen w-full pt-16 font-baijamjuree-regular">
      <Navbar />
      <Hero />
      <Testimonial />
      <div>
        <div className="h-screen bg-blue-600"></div>
        <div className="h-screen bg-blue-500 p-24">
          <h1 className="font-roboto-regular text-2xl">Hello world</h1>
        </div>
        <div className="h-screen bg-blue-400"></div>
      </div>
    </div>
  )
}

export default App
