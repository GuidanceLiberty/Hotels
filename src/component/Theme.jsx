import React, { useEffect } from 'react'
import theme_1 from '../assets/images/theme-1.jpeg'
import theme_2 from '../assets/images/theme-2.jpeg'
import theme_3 from '../assets/images/theme-3.jpeg'
import theme_4 from '../assets/images/theme-4.jpeg'
import theme_5 from '../assets/images/theme-5.jpeg'
import theme_6 from '../assets/images/theme-6.jpeg'
import theme_7 from '../assets/images/theme-7.jpeg'
import theme_8 from '../assets/images/theme-8.jpeg'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Theme = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <section className="bg-accent mb-0 pb-0">
      <div className="pt-32 text-center text-white">
        <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-8">@newguidance_hotel_theme</h2>
      </div>

      <div className="project__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-4 lg:p-8">
        {/* Theme Image 1 */}
        <div
          data-aos="zoom-in"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_1} alt="Theme 1" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Theme Image 2 */}
        <div
          data-aos="zoom-out"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_2} alt="Theme 2" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Theme Image 3 */}
        <div
          data-aos="flip-right"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_3} alt="Theme 3" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Theme Image 4 */}
        <div
          data-aos="slide-left"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_4} alt="Theme 4" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Theme Image 5 */}
        <div
          data-aos="fade-up"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_5} alt="Theme 5" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Theme Image 6 */}
        <div
          data-aos="zoom-in"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_6} alt="Theme 6" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Theme Image 7 */}
        <div
          data-aos="zoom-out"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_7} alt="Theme 7" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Theme Image 8 */}
        <div
          data-aos="slide-left"
          className="w-full h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img src={theme_8} alt="Theme 8" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  )
}

export default Theme
