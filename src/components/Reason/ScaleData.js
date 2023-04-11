import React from 'react'

function ScaleData({value,info}) {
  return (
    <div className='flex flex-col md:flex-row md:bg-[#EEF6FC] gap-2 md:gap-5 w-full md:rounded-[1rem] items-center md:justify-center md:p-[1.3rem] mb-2'>
      <div className="value text-[53px] leading-[60px] md:text-[29px] font-[600] md:leading-[33px] text-[#1C79C2]">{value}+</div>
      <div className="text-[#4A4A4A] text-[22px] md:text-[15px] leading-[30px] md:leading-[24px] font-[500]">{info}</div>
    </div>
  )
}

export default ScaleData
