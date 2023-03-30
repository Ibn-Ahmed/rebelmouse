import React, { useEffect } from 'react'
import Type from './Type'
import image from '../../assets/image.svg'
import image49 from '../../assets/49.svg'
import image86 from '../../assets/86.svg'
import image100 from '../../assets/100.svg'
import imageArrow from '../../assets/arrow.svg'
import background from '../../assets/background.svg'
import {BsArrowRight} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
function Hero() {

  const smImage = ()=>{
   document.querySelector('.smImage').classList.remove('-translate-x-[100vw]')
  }

  const arrow1 = ()=> setTimeout(()=>{
   document.querySelector('.arrow1').classList.remove('-translate-x-[100vw]')
   },500)

   const mdImage = ()=>setTimeout(()=>{
   document.querySelector('.mdImage').classList.remove('-translate-x-[100vw]')
   },1000)
   
   const arrow2 = ()=>setTimeout(()=>{
      document.querySelector('.arrow2').classList.remove('-translate-x-[100vw]')
   },1500)

  const lgImage = ()=>setTimeout(()=>{
   document.querySelector('.lgImage').classList.remove('-translate-x-[100vw]')
     },2000)
  return (
    <div className=' w-full mt-8' >

     <div className='container mlg:pl-[150px] flex items-center justify-center flex-col'>
        <div className='flex items-center  text-[52px] font-[700] md:font-[600] leading-[62.4px] md:text-[24px] md:leading-[34.8px]'>
            <h1 className='mr-2'>Where</h1>
            <Type/>
            <span className='text-[#FFF614] font-extralight md:hidden' >|</span>
            <img className='md:hidden' src={image} alt="rebelmouse pointer" />      
         </div>
         <div className='mr-[130px] md:mr-0 text-[52px] font-[700] leading-[62.4px] md:text-[24px] md:font-[600] md:leading-[34.8px]'>
            <h1 className='mb-[15px]'>Websites Are Built</h1>
         </div>
         <p className='text-[18px] leading-[31.68px] font-[500] align-center mb-[25px] mr-[85px] md:text-[11px] md:leading-[19.36px] md:mr-0'>The Fastest Sites in the World Run on RebelMouse</p>
         <button href="#" className='bg-[#3490D9] hover:bg-[#57A4E2] flex items-center rounded-[45px] mr-[40px] md:mr-0  text-[16px] py-4 px-8 text-white font-[500] '>Let's Chat <BsArrowRight className='arrow font-[500] ml-3'/></button>
         <div className=' my-[30px] flex overflow-hidden'>
            
            <img className='smImage  -translate-x-[100vw] transition-all delay-150 duration-300 w-[110px] xsm:w-[80px] object-contain' src={image49} onLoad={smImage} />

            <img className='arrow1 w-[25px] xsm:w-[15px]  -translate-x-[100vw] transition-all delay-150 duration-300 object-contain' src={imageArrow} onLoad={arrow1} />

            <img className='mdImage w-[140px] xsm:w-[90px]  -translate-x-[100vw] transition-all delay-150 duration-300 object-contain' src={image86} onLoad={mdImage} />

            <img className='arrow2 w-[25px] xsm:w-[15px] -translate-x-[100vw] transition-all delay-150 duration-300 object-contain' src={imageArrow} onLoad={arrow2} />

            <img className='lgImage w-[160px] xsm:w-[110px]  -translate-x-[100vw] transition-all delay-150 duration-300 object-contain' src={image100} onLoad={lgImage} />
         </div>
         <div className="bg-[#EBF5FC] text-center flex flex-col items-center gap-2 py-3 px-9 justify-center rounded-[2rem]">
            <p className='font-[700] text-[#479AD2]'>NEW!</p>
            <p className='text-[24px] font-[500] md:text-[18px]'>RebelMouse Performance Monitoring</p>
            <p className='text-[15px]'>Real-time Core Web Vitals</p>
            <button href="#" className='bg-[#3490D9] hover:bg-[#57A4E2] rounded-[25px] text-[15px] py-3 px-5 text-white '>Get Started</button>
         </div>
            <img className='relative top-[-7rem] z-[-99]' src={background} alt="svg background" />
            <a href='#more' className='uppercase mt-[-15%] text-[10px] hover:underline font-[700] space-[1rem] flex flex-col items-center justify-center leading-[16.2px]'>Discover More   <IoIosArrowDown className='text-[2.3rem] font-extralight'/>  </a>
        </div>

    </div>
  )
}

export default Hero
