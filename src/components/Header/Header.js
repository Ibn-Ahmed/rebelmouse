import { Search } from '@material-ui/icons'
import { Button } from '@mui/material'
import {IoMdArrowDropdown} from 'react-icons/io'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import HeaderHover from './HeaderHover'

function Header() {
  const [menuIcon,setMenuIcon] = useState(true)
  // const [showMenuCard,setMenuCard] = useState(false)
  const toggleNav = ()=>{
    const mainNav = document.querySelector('.main-nav')
    setMenuIcon(!menuIcon)

      mainNav.classList.toggle('lg:-translate-x-full')  
  }

  const toggleSearch = ()=>{
    const input = document.querySelector('.input')
        input.classList.toggle('w-0')
  
  }
  const listItem = `flex items-center pl-3 mlg:ml-5 cursor-pointer mlg:hover:text-[#1A76D2] lg:border-b lg:border-b-[#79B5E6] lg:py-[10px] `
  
  return (
   
    <div className='w-full text-black bg-white shadow-md  lg:p-0 lg:flex  lg:items-center sticky top-0 lg:h-full z-50'>
      
       <div onClick={toggleNav}  className='hidden lg:block cursor-pointer mx-2 text-[20px]'>
       {menuIcon ? (<AiOutlineMenu  />): <AiOutlineClose/>}
       </div>

      <div className='max-w-[1240px] container flex  items-center mx-auto bg-fixed lg:mx-0 lg:justify-between lg:w-full lg:p-2 mlg:p-3' >
      <img className='object-contain w-[136px] ' src="https://www.rebelmouse.com/media-library/rebelmouse.png?id=27588908&width=282&height=74" alt="rebelmouse logo" />

      <ul className='main-nav flex items-center text-[13px] ml-2 mr-[95px]  lg:block lg:text-white lg:bg-[#3490D9] lg:fixed lg:w-[60%] lg:h-screen lg:top-[3.25rem] lg:left-[-8px] lg:overflow-y-scroll lg:-translate-x-full lg:overflow-x-hidden lg:transition-all lg:delay-150 lg:duration-300 mlg:p-3 lg:z-20'>

        <div className={`${listItem} hidden lg:flex items-center  w-full text-white`}>
        <input type="text" placeholder='Search' className='placeholder-white bg-[#3490D9] cursor-auto w-full outline-none'/>
        <Search/>
        </div>    
        <li className={`${listItem} lg:hover:bg-[#57A4E2] lg:hidden group `}>Products <IoMdArrowDropdown /> <HeaderHover one='CMS' two='Performance Monitoring' three='AI Features' classList=' left-[145px]'/></li>
        <li className={`${listItem} lg:hover:bg-[#57A4E2] mlg:hidden`}>Products</li>
           
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>CMS</li>

        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Performance Monitoring</li>

        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>AI Features</li>

        <li className={`${listItem} lg:hover:bg-[#57A4E2]`}>Services</li>

        <li className={`${listItem} lg:hover:bg-[#57A4E2] lg:hidden group`}>Insights <IoMdArrowDropdown className='lg:hidden'/><HeaderHover one='Blog' two='Case Studies' three='Product Updates' classList=' left-[360px]'/>
        </li>
        <li className={`${listItem} lg:hover:bg-[#57A4E2] mlg:hidden`}>Insights</li>
        
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Blog</li>
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Case Studies</li>
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Product Updates</li>
        <li className={`${listItem} lg:hover:bg-[#57A4E2]`}>Customers</li>
        <li className={`${listItem} lg:hover:bg-[#57A4E2]`}>Partners</li>
        <li className={`${listItem} lg:hover:bg-[#57A4E2] lg:p-3 lg:hidden group`}>Resources <IoMdArrowDropdown className='lg:hidden'/><HeaderHover one='Developer Portal' two='Platform Status' three='Support Portal' four='Product Release Notes' five='Rebelmouse APIs'classList='left-[637px]'/></li>
        <li className={`${listItem} lg:hover:bg-[#57A4E2] mlg:hidden`}>Resources</li>

        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Developer Portal</li>
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Platform Status</li>
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Support Portal</li>
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Product Release Notes</li>
        <li className={`${listItem} hidden lg:block pl-[30px] hover:underline`}>Rebelmouse APIs</li>
        <li className={`${listItem} lg:mb-[55px] lg:hover:bg-[#57A4E2]`}>About Us</li>
      </ul>
      <div className=' relative mlg:flex mlg:items-center'>
        <input className='text-[13px] input w-0 absolute bottom-[10px] right-[102px] outline-transparent border-b  border-b-[#999] transition-width duration-700' type="text" placeholder='search'/>
         
           <AiOutlineSearch className='lg:hidden text-[#3490D9] text-[1.5rem] cursor-pointer' onClick={toggleSearch}/>
          <button href="#" className='bg-[#3490D9] hover:bg-[#57A4E2] rounded-[17px] font-bold text-[13px] p-2 text-white '>Talk to Us</button>
      </div>
      </div>
    </div>
  
  )
}

export default Header
