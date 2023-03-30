import React from 'react'
import Typed from 'react-typed';


function Type() {
  return (
    <div>
       <Typed className='text-[52px] font-[700] leading-[62.4px] md:text-[24px] md:font-[600] md:leading-[34.8px]' strings={['Easy-to-Use','Gorgeous','Social','High-Traffic','AI-Enabled','High-Performance','Hyper-Modern','SEO-optimized','Data-Oriented']}  typeSpeed={40} backSpeed={50} loop showCursor={false}/>
    </div>
  )
}

export default Type
