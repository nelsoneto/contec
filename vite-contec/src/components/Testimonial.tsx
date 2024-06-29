import { useRef } from 'react'
import { testimonials } from '../data/testimonials'

/**
 * Related to the React Slick
 */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

/**
 * Related to the React Icons
 */

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonial() {
  const sliderRef = useRef<any>()

  //  Settings Related to the React Slick

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <div className="py-4">
      {/* Container for the Slider */}
      <section className="relative mx-auto w-full max-w-[1800px] overflow-hidden rounded-xl">
        {/* Main Section */}
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((single, index) => {
            return (
              <div key={index} className="h-full">
                <section className="mx-auto grid grid-cols-1 items-center gap-5 overflow-hidden rounded-xl bg-white p-5 sm:grid-cols-[1fr_3fr] sm:p-4 md:grid-cols-[1fr_4fr] md:gap-8">
                  {/* Left Section */}
                  <div className="space-y-5 text-center">
                    {/* Image */}
                    <div className="inline-block rounded-sm">
                      <div className="mx-auto h-96 w-96 overflow-hidden rounded-xl bg-gray-200 object-cover">
                        <img
                          src={single.img}
                          alt="Boy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Other */}
                    {/* <div className="flex-col items-center justify-center bg-slate-500">
                      <h2 className="text-xl font-medium">{single.name}</h2>
                      <p className="text-gray-600">{single.profession}</p>
                    </div> */}
                  </div>

                  {/* Right Section */}
                  <div className="space-y-3 text-[16px] sm:text-[18px]">
                    {/* Testimonial */}
                    <p className="font-bold leading-[30px]">
                      {single.testimonial}
                    </p>
                  </div>
                </section>
              </div>
            )
          })}
        </Slider>

        {/* Custom Buttons */}
        <button
          className="absolute left-[10px] top-[50%] z-10 text-2xl text-gray-600 sm:top-[30%] md:top-[40%] lg:top-[50%]"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute right-[10px] top-[50%] z-10 text-2xl text-gray-600 sm:top-[30%] md:top-[40%] lg:top-[50%]"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <ChevronRight />
        </button>
      </section>
    </div>
  )
}
