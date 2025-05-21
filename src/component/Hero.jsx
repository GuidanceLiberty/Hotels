import React from 'react'
import heroImg from '../assets/hero/hero-1.jpg'

{/* <script setup>
import { frame, motion, useMotionValue, useSpring } from "motion-v"
import { ref, onMounted, onUnmounted } from "vue"

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 }

const elementRef = ref(null)
const xPoint = useMotionValue(0)
const yPoint = useMotionValue(0)
const x = useSpring(xPoint, spring)
const y = useSpring(yPoint, spring)

const handlePointerMove = ({ clientX, clientY }) => {
    const element = elementRef.value?.$el
    if (!element) return

    frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - element.offsetWidth / 2)
        yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2)
    })
}

onMounted(() => {
    window.addEventListener("pointermove", handlePointerMove)
})

onUnmounted(() => {
    window.removeEventListener("pointermove", handlePointerMove)
})
</script>

<template>
    <motion.div ref="elementRef" class="ball" :style="{ x, y }" />
</template>

<style>
.ball {
    width: 100px;
    height: 100px;
    background-color: #ff0088;
    border-radius: 50%;
}
</style> */}



const Hero = () => {
  return (
    <section className='hero h-[640px] bg-center bg-no-repeat bg-fixed relative z-20 mt-7 mb-10'
    style={{backgroundImage: `url(${heroImg})`, }}>
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="hero__text">
          <h1 className='text-[2.3rem] md:text-[3.5rem] sm:text-[2.3rem] font-b text-center'>Holiday Bliss Await You</h1>

          <p className='mb-8 text-[1.1rem] text-center mt-8 text-gray-800 font-bold'>
            immerse yourself in the epitome of luxury at New-Guidance, your premier destination in Lagos.
            Our hotel redefines elegance and comfort, offering an equisite escap for discerning travels.
          </p>

          <button className='btn btn-primary mx-auto lg-mx-0 bg-accent text-white ml-4'>
            BOOK YOUR STAY
          </button>
        </div>
      </div>

      

    </section>
  )
}

export default Hero
