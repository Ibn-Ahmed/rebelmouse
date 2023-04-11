import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineCloseCircle } from 'react-icons/ai'
import './More.css'
function More() {
  const video = useRef(null)
  // const container = useRef(null)
  const [pop,setPop] = useState(false)
  // useEffect(()=>{
      // const videoHeight = video.current.offsetHeight
    
    //   window.addEventListener('scroll',()=>{
    //    if((window.scrollY )> (videoHeight)) {
    //     setPop(true)
       
    //    }else{

    //    setPop(false)
    //    }
    //   })
      
    // })
    const removePopup = ()=>{
        setPop(false)
    }
  return (
    <div className='w-full mb-3 relative' id='more'>
      <div className="container mlg:pl-[150px] flex items-center justify-center flex-col">
        <div className='flex items-center justify-center'>
        <h2 className='capitalize text-[55px] font-[600] md:text-[24px]'>What is rebelMouse?</h2>
        <button className='relative top-[-15px] rounded-[10px] text-[11px] font-[600] px-1 text-white bg-[#F66D68] -z-20'>NEW</button>
        </div>
        
          <div className={pop?" stuck " :" video w-screen h-screen flex-col flex items-center justify-center"}>
           <AiOutlineCloseCircle onClick={removePopup} className={pop?'w-[150%] mb-4 text-[1.5rem]':'hidden'}/>
          <iframe className="w-[80%] h-[80%] md:h-[50%]" title="What is Rebelmouse?"  allow="autoplay; fullscreen; picture-in-picture" src="https://www.youtube.com/embed/FoBv7C9_Adk?mute=1&amp;autoplay=1&amp;playlist=FoBv7C9_Adk&amp;loop=1"></iframe>
          </div>
        <div ref={video} className='text-center mt-[85px] mb-[75px]'>
                <h2 className='text-[55px] font-[600] md:text-[24px]'>Our core Features</h2>
                <p className='leading-[28.16px] max-w-[600px]'>Our platform is a complete digital publishing toolbox that's built for modern-day content creators, and includes game-changing features such as our:</p>
            </div>
        
      </div>
     </div>
  )
}

export default More
