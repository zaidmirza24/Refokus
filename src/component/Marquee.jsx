import { motion } from 'framer-motion'
import React from 'react'

function Marquee({imagesurls}) {

  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-x-hidden' >
        {imagesurls.map(url => {
            return (<img src={url}  className="w-[6vw] flex-shrink-0" />)
        })}
        {/* {imagesurls.map(url => {
            return (<img src={url}  className="w-[6vw] flex-shrink-0" />)
        })} */}
    </div>
  )
}

export default Marquee