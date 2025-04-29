import React, { useEffect, useState } from 'react'
import { skillCards } from '../data'
import NavigationCircles from './NavigationCircles'

const Services = () => {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const getPositionClass = (card) => {
    const position = isLargeScreen ? card.hoverPosition.large : card.hoverPosition.small
    return position === 'top' ? 'top-full' : 'bottom-full'
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10">
      <h2 className="text-4xl font-light mb-32 xl:mt-0 mt-12">Skill Set</h2>
      <div className="w-full xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-32 xl:mb-0 mb-16 relative">
        {skillCards.map((card, index) => {
          const position = isLargeScreen ? card.hoverPosition.large : card.hoverPosition.small
          const isHovered = hoveredCardIndex === index

          return (
            <div
              key={index}
              className="relative group lg:max-w-[280px] md:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20"
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
            >
              {/* Main Skill Card */}
              <div className="p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
                <i className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-white transition-colors`} />
                <h3 className="md:text-2xl text-xl font-bold my-4 text-red-500 dark:text-yellow-500 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-900 dark:text-white md:h-28 h-22 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors">
                  {card.description}
                </p>
              </div>

              {/* Hover Content Positioned Outside */}
              {isHovered && (
                <div
                  className={`absolute left-1/2 -translate-x-1/2 ${getPositionClass(card)} z-20 w-max px-6 py-4 bg-gray-100 dark:bg-gray-900 rounded shadow-lg transition-all duration-300`}
                >
                  <h2 className="text-2xl text-center text-gray-900 dark:text-white font-light tracking-wide mb-3">
                    Projects
                  </h2>
                  <div className="flex justify-between gap-2">
                    {[...Array(card.projectCount)].map((_, i) => (
                      <a
                        href="#"
                        key={i}
                        className="text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full hover:scale-110 transition-transform"
                      >
                        {i + 1}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <NavigationCircles section="services"/>
    </div>
  )
}

export default Services





























// import React, { useEffect, useState } from 'react'
// import { skillCards } from '../data'

// const Services = () => {

//   const [hoveredCardIndex, setHoveredCardIndex] = useState(null)
//   const [isLargeScreen, setIsLargeScreen] = useState(false)

//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsLargeScreen(window.innerWidth > 1024)
//     }

//     checkScreenSize()
//     window.addEventListener('resize', checkScreenSize)

//     return () => window.removeEventListener('resize', checkScreenSize)
//   }, [])

//   const getPositionClass = (card) => {
//     const position = isLargeScreen ? card.hoverPosition.large : card.hoverPosition.small
//     return position === 'bottom' ? 'bottom-0' : 'top-0'
//   }

//   const getHoverPositionClass = (card) => {
//     const position = isLargeScreen ? card.hoverPosition.large : card.hoverPosition.small
//     return position === 'bottom' ? 'bottom-full' : 'top-full'
//   }

//   return (
//     <div className='min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10'>
//      <h2 className='text-4xl font-light mb-32 xl:mt-0 mt-12'>Skill Set</h2>
//      <div className='w-full xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 gird-cols-1 lg:gap-12 gap-32 xl:mb-0 mb-16'>
//       {skillCards.map((card, index) => (
//         <div
//            key={index}
//            className='lg:max-w-[280px] md:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate'
//            onMouseEnter={() => setHoveredCardIndex(index)}
//            onMouseLeave={() => setHoveredCardIndex(null)}
//            >
//           <div className='p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500'>
//             <i
//               className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-white transition-colors duration-500`}
//             ></i>
//             <h3 className='md:text-2xl text-xl font-bold my-4 text-red-500 dark:text-yellow-500 transition-colors duration-500'>
//               {card.title}
//             </h3>
//             <p className='text-gray-900 dark:text-white md:h-28 h-22 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors'>
//               {card.description}
//             </p>
//           </div>
//           <div 
//             className={`w-full absolute left-0 flex flex-col gap-y-5 py-4 transition-all duration-300 
//              ${hoveredCardIndex === index ? getHoverPositionClass(card) : getPositionClass(card)}
//               `}
//              >

//             {isLargeScreen && card.hoverPosition.large === 'top' && (
//               <div className='flex justify-between'>
//                 {[...Array(card.projectCount)].map((_, index) => (
//                   <a href="#" key={index} className='text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors'>
//                     {index + 1}
//                   </a>
//                 ))}
//               </div>
//             )}
//             <h2 className='text-2xl text-center text-gray-900 dark:text-white font-light trakcing-wide'>
//               Projects
//             </h2>
//             {(!isLargeScreen || (isLargeScreen && card.hoverPosition.large)) === 'bottom' && (
//               <div className='flex justify-between'>
//                 {[...Array(card.projectCount)].map((_, index) => (
//                   <a href="#" key={index} className='text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors'>
//                     {index + 1}
//                   </a>
//                 ))}
//               </div>
//             )}
//             </div>
//         </div>
//       ))}
//      </div>
//     </div>
//   )
// }

// export default Services

