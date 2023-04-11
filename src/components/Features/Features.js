import React, { useState } from 'react'
import './Features.css'
import src from './FeaturesArr'
function Features() {
    const [imageSrc,setImageSrc] = useState(src[0])
    const listEls = document.querySelectorAll('li')

   
  return (
    <div className='w-full'>
        <div className=' mlg:pl-[50px]'>     
          
            
            <div className='flex items-start gap-3 mb-[100px] md:flex-col'>
                <div className='w-[65%] md:hidden'>
                    <img className='object-contain w-full' src={imageSrc} alt="powered by ai" />
                </div>

                <div className='features-list w-[30%] mt-3 mr-3 md:w-[100%] md:text-center'>
                    <a className='active1 md:text-center md:border md:border-[#F20791] md:p-3 block md:inline' href='' onClick={(event)=>{event.preventDefault(); setImageSrc(src[0]);}}  onFocus={(event)=>event.target.style.border='1px solid #F20791'} onBlur={(event)=>event.target.style.border=''}>Powered by Artificial Intelligence</a>
                    <img src={src[0]} alt="" className="object-contain my-[3rem] w-full hidden md:block" />

                    <a className='active2 md:text-center md:border md:border-[#014F93] md:p-3 block md:inline' href='' onClick={(e)=>{e.preventDefault(); setImageSrc(src[1]);}} onFocus={(event)=>event.target.style.border='1px solid #014F93'} onBlur={(event)=>event.target.style.border=''}>Lightning-Fast Page Speeds</a>
                    <img src={src[1]} alt="" className="object-contain my-[3rem] w-full hidden md:block" />

                    <a className='active3 md:text-center md:border md:border-[#D38611] md:p-3 block md:inline' href='' onClick={(e)=>{e.preventDefault(); setImageSrc(src[2]);}} onFocus={(event)=>event.target.style.border='1px solid #D38611'} onBlur={(event)=>event.target.style.border=''}>Beautiful User Experiences</a>
                    <img src={src[2]} alt="" className="object-contain my-[3rem] w-full hidden md:block" />

                    <a className='active4 md:text-center md:border md:border-[#20DB76] md:p-3 block md:inline' href='' onClick={(e)=>{e.preventDefault(); setImageSrc(src[3]);}} onFocus={(event)=>event.target.style.border='1px solid #20DB76'} onBlur={(event)=>event.target.style.border=''}>Organic Reach and Search Wins</a>
                    <img src={src[3]} alt="" className="object-contain my-[3rem] w-full hidden md:block" />

                    <a className='active5 md:text-center md:border md:border-[#DB204D] md:p-3 block md:inline' href='' onClick={(e)=>{e.preventDefault(); setImageSrc(src[4]);}} onFocus={(event)=>event.target.style.border='1px solid #DB204D'} onBlur={(event)=>event.target.style.border=''}>Diversified Monetization Methods</a>
                    <img src={src[4]} alt="" className="object-contain my-[3rem] w-full hidden md:block" />

                    <a className='active6 md:text-center md:border md:border-[#2088DB] md:p-3 block md:inline' href='' onClick={(e)=>{e.preventDefault(); setImageSrc(src[5]);}} onFocus={(event)=>event.target.style.border='1px solid #2088DB'} onBlur={(event)=>event.target.style.border=''}>Engaged User Communities</a>
                    <img src={src[5]} alt="" className="object-contain my-[3rem] w-full hidden md:block" />

                    <a className='active7 md:text-center md:border md:border-[#6720DB] md:p-3 block md:inline' href='' onClick={(e)=>{e.preventDefault(); setImageSrc(src[6]);}} onFocus={(event)=>event.target.style.border='1px solid #6720DB'} onBlur={(event)=>event.target.style.border=''}>Secure, 99.99% Uptimes</a>
                    <img src={src[6]} alt="" className="object-contain my-[3rem] w-full hidden md:block" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
