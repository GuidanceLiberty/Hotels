import 'yet-another-react-lightbox/styles.css';
import React, { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion'

import image_1 from '../assets/images/img-1.jpg'
import image_2 from '../assets/images/img-2.jpg'
import image_3 from '../assets/images/img-3.jpg'
import image_4 from '../assets/images/img-4.jpg'

const projectData = [
  { image: image_2, title: 'Ocean View Suite' },
  { image: image_3, title: 'Luxury Poolside Lounge' },
  { image: image_1, title: 'Modern Villa Interiors' },
  { image: image_4, title: 'Elegant Outdoor Dining' },
]

const Projects = () => {
  const [index, setIndex] = useState(-1) // -1 = closed

  return (
    <section className="bg-white py-20 px-4 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-sm text-accent font-bold tracking-widest">OUR GALLERY</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mt-2">Hotel Showcase</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projectData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg cursor-pointer group hover:scale-[1.02] transition"
            onClick={() => setIndex(i)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[350px] object-cover group-hover:brightness-90 transition"
            />
            <div className="p-4 bg-white text-center">
              <h3 className="text-lg font-medium text-gray-800">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={projectData.map((item) => ({
          src: item.image,
          description: item.title,
        }))}
      />
    </section>
  )
}

export default Projects
