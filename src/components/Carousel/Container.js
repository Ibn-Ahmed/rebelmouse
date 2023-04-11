import React from 'react'
import Avatar from '../../assets/img_avatar2.png'
function Container() {
  return (
    <div className=' flex flex-col items-center bg-[#B8FFDD] w-[40%]'>
      <img className='w-[30%]' src={Avatar} alt="" />
        <p className='max-w-[300px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus possimus modi quam cum aliquam.</p>
        <div className="flex flex-col items-center justify-center">
            <h2 className='font-[500]'>Jill Braff</h2>
            <p>Executive Editor</p>
            <p>Narcity Media</p>
        </div>
    </div>
  )
}

export default Container
