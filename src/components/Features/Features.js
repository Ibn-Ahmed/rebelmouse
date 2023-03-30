import React, { useState } from 'react'
import './Features.css'
import src from './FeaturesArr'
function Features() {
    const [imageSrc,setImageSrc] = useState(src[0])
    const listEl = document.querySelectorAll('li')
    // listEls.forEach(listEl=>{
    //     listEl.addEventListener('click',()=>{
    //         // if(listEl.querySelector('.active')) {

    //             // listEl.querySelector('.active').classList.remove('active')
    //         // } 
    //         listEl.classList.add('active')
    //     })
    // })

  return (
    <div className='w-full'>
        <div className=' mlg:pl-[50px]'>     
            
            <div className='flex items-start gap-3 mb-[100px]'>
                <div className='w-[65%]'>
                    <img className='object-contain w-full' src={imageSrc} alt="powered by ai" />
                </div>
                <div className='features-list w-[30%] mt-3 mr-3'>
                    <li onClick={(event)=>{ document.querySelector('.active')?.classList.remove('active');event.target.classList.add('active'); setImageSrc(src[0])}} className='hover:border border-[#F20791]'>Powered by Artificial Intelligence</li>
                    <li onClick={(event)=>{event.target.classList.add('active'); setImageSrc(src[1])}} className='hover:border border-[#014F93]'>Lightning-Fast Page Speeds</li>
                    <li onClick={()=>setImageSrc(src[2])} className='hover:border border-[#D38611]'>Beautiful User Experiences</li>
                    <li onClick={()=>setImageSrc(src[3])} className='hover:border border-[#20DB76]'>Organic Reach and Search Wins</li>
                    <li onClick={()=>setImageSrc(src[4])} className='hover:border border-[#DB204D]'>Diversified Monetization Methods</li>
                    <li onClick={()=>setImageSrc(src[5])} className='hover:border border-[#2088DB]'>Engaged User Communities</li>
                    <li onClick={()=>setImageSrc(src[6])} className='hover:border border-[#6720DB]'>Secure, 99.99% Uptimes</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
