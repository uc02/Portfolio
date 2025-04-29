import React from 'react'
import Hero from './components/Hero'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
     <div className='min-h-screen bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500'>
       <Hero/>
     </div>
    </ThemeProvider>
  )
}

export default App
