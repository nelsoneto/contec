import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <div className='font-baijamjuree-regular'>
      <Navbar />
      <Hero />
      <Testimonial />
      <div>
        <div className="bg-blue-600 h-screen">
        </div>
        <div className="bg-blue-500 h-screen p-24">
          <h1 className="font-roboto-regular text-2xl">Hello world</h1>
        </div>
        <div className="bg-blue-400 h-screen"></div>
      </div>
    </div>
  )
}

export default App
