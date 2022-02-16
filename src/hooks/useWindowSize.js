import { useEffect, useState } from 'react'

export const useWindowHeight = () => {
   const [dimensions, setDimensions] = useState({
      width: 0,
      height: 0,
   })

   const handleWidthResize = () => {
      setDimensions({
         width: window.innerWidth,
         height: window.innerHeight,
      })
   }

   useEffect(() => {
      window.addEventListener('resize', handleWidthResize)

      return () => window.removeEventListener('resize', handleWidthResize)
   }, [])

   return dimensions
}
