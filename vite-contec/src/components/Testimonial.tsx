import { useRef } from "react";
import { testimonials } from "../data/testimonials";

/**
 * Related to the React Slick
 */
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

/**
 * Related to the React Icons
 */

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Testimonial() {
  const sliderRef = useRef<any>();

  //  Settings Related to the React Slick

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="py-4">
      {/* Container for the Slider */}
      <section className="max-w-[1800px] mx-auto w-full rounded-xl relative overflow-hidden">
        {/* Main Section */}
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((single, index) => {
            return (
              <div key={index} className="h-full">
                <section className="mx-auto bg-white p-5 sm:p-4 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden">
                  {/* Left Section */}
                  <div className="space-y-5 text-center">
                    {/* Image */}
                    <div className="inline-block rounded-sm">
                      <div className="mx-auto h-96 w-96 object-cover rounded-xl bg-gray-200 overflow-hidden">
                        <img
                          src={single.img}
                          alt="Boy"
                          className="w-full h-full object-cover"
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
                  <div className="text-[16px] sm:text-[18px] space-y-3">
                    {/* Testimonial */}
                    <p className="leading-[30px] font-bold">
                      {single.testimonial}
                    </p>
                  </div>
                </section>
              </div>
            );
          })}
        </Slider>

        {/* Custom Buttons */}
        <button
          className="absolute top-[50%] left-[10px] z-10 text-2xl text-gray-600 sm:top-[30%] md:top-[40%] lg:top-[50%]"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <ChevronLeft />
        </button>
        <button
          className="absolute top-[50%] right-[10px] z-10 text-2xl text-gray-600 sm:top-[30%] md:top-[40%] lg:top-[50%]"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <ChevronRight />
        </button>
      </section>
    </div>
  );
}