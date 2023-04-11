import React from 'react'
import ScaleData from './ScaleData'
import ImgSrc from './ImgSrc'
import './Reason.css'

function Reason() {
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(11rem, 1fr))',
        gridGap: '1rem',
        margin: '1rem',
    }
  return (
    <div className='mt-[10rem]  mx-10 md:mx-6 md:mt-[7rem] overflow-hidden'>
      <div className='flex w-full flex-col items-center justify-center mb-5'>
        <h2 className='font-[600] text-[40px] md:text-[24px]'>Why RebelMouse?</h2>
        <img className='w-[90%]' src="https://www.rebelmouse.com/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yNzcwNDg4Mi9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTcyMDgyMzYzOH0.BHKUWlYBj66CZkzrLwsMe-hlbzFA5JxiBJ3sALCPVo4/image.png?width=1946&height=1446" alt="" />
      </div>
        <div>
      <div className='flex w-full items-center justify-center flex-col'>
            <h2 className='font-[600] text-[40px] md:text-[24px]'>Unprecedented Scale</h2>
            <p className='text-center mt-5 text-[14px] leading-[24.6px] font-[400] max-w-[800px]'>RebelMouse sites reach more than 120M people a month, with an always-modern solution that combines cutting-edge technology with decades of media savvy. And due to our massive scale, 1 in 3 Americans have visited a website powered by RebelMouse.</p>
        </div>
        </div>
        <div className='flex md:flex-col gap-3 mt-[5rem] '>
            <ScaleData value='120M' info='Users'/>
            <ScaleData value='550M' info='Pageviews'/>
            <ScaleData value='17' info='Avg. Minutes per User'/>
            <ScaleData value='5' info='Avg. Pages per User'/>

        </div>
        <div className='flex w-full items-center justify-center flex-col gap-4 mt-[6rem]'>
            <h2 className='font-[600] text-[40px] md:text-[24px]'>Today's Top Websites Use RebelMouse</h2>
            <p className='text-center mt-5 text-[14px] leading-[24.6px] font-[400] max-w-[800px]'>Thanks to the tremendous scale of our network, we are able to analyze a wealth of traffic data that informs our strategies and allows us to be a true strategic partner instead of just a vendor.</p>
        </div>
        <div className='w-full flex items-center justify-center mt-10'>
            <div  className='gridStyles w-[80%] slide '>
                <ImgSrc/>
            </div>
        </div>
    </div>
  )
}

export default Reason
