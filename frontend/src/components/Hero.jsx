import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { letters, professionTexts } from '../data'

const Hero = () => {

  const [hoveredLetter, setHoveredLetter] = useState(null)
  const [currentText, setCurrentText] = useState(professionTexts[0])
  let currentIndex = 0 
  const [isRotating, setIsRotation] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotation(true)
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % professionTexts.length
        setCurrentText(professionTexts[currentIndex])
        setIsRotation(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  },[])


  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <Navbar/>
      <div className='flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0'>
        <h1 className='flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bolder text-yellow-500'>
          <span className='flex'>
            {letters.map((letter, index) => (
              <span 
              key={index} 
              className='inline-block md:w-38 w-32 xl:-mr-20 -mr-24 relative' 
              onMouseEnter={() => setHoveredLetter(index)}
              onMouseLeave={() => setHoveredLetter(null)}>
              {letter.char}
                <img  
                src={letter.img} 
                alt={`Hover image ${index + 1}`} 
                className={`xl:h-36 h-24 absolute bottom-full -translate-x-1/2 ${letter.rotate} 
                ${hoveredLetter === index ? 'visible' : 'invisible'}`} />
              </span>
            ))}
          </span>
          <span className='xl:text-6xl md:text-4xl text-2xl tracking-wider xl:py-4 py-2 overflow-hidden'>
            I'm 
            <span className={`inline-block xl:w-[380px] md:w-[240px] w-[160px] lg:ml-6 ml-2 font-extrabold
              ${isRotating ? 'rotate-[100deg]' : 'rotate-0'} transform origin-left transition-transform duration-300 ease-out
              `}> {currentText}
              </span>{' '} 
            Web Developer
          </span>
        </h1>
      </div>
    </div>
  )
}

export default Hero
