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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    <div className="py-14 pb-10 xl:px-96">
      {/* Container for the Slider */}
      <section className="relative mx-auto w-full max-w-[1800px] rounded-xl px-4">
        {/* Main Section */}
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((single, index) => {
            return (
              <div key={index} className="h-full">
                <section className="mx-auto grid grid-cols-1 items-center gap-5 overflow-hidden rounded-xl sm:p-4 md:grid-cols-[1fr_4fr] md:gap-10">
                  {/* Left Section */}
                  <div className="space-y-5 text-center">
                    {/* Image */}
                    <div className="inline-block rounded-sm">
                      <div className="mx-auto h-60 w-60 bg-gray-200 object-cover md:h-96 md:w-96">
                        <img
                          src={single.img}
                          alt="Boy"
                          className="h-full w-full rounded-lg object-cover ring-8 ring-blue-200"
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
                  <div className="h-full rounded-lg bg-blue-200 px-4 py-5 text-[16px] text-zinc-900 sm:text-[18px]">
                    <span className="font-baijamjuree-bold text-2xl">
                      {single.name}
                    </span>
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
          className="absolute left-[0px] top-[50%] z-10 text-2xl text-zinc-400 sm:top-[30%] md:top-[40%] lg:top-[50%]"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute right-[0px] top-[50%] z-10 text-2xl text-zinc-400 sm:top-[30%] md:top-[40%] lg:top-[50%]"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <ChevronRight />
        </button>
      </section>
    </div>
  )
}
