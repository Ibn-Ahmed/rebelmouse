import React from 'react'

function HeaderHover({one,two,three,four,five,classList}) {
    const classes = `text-[#2088D1] py-1 px-3 hover:underline`
  return (
    <div className={`${classList} lg:hidden mlg:hidden group-hover:flex flex-col  bg-white shadow-md absolute top-[43px] rounded `}>
        <a href="#" className={classes}>{one}</a>
        <a href="#" className={classes}>{two}</a>
        <a href="#" className={classes}>{three}</a>
        <a href="#" className={classes}>{four}</a>
        <a href="#" className={classes}>{five}</a>
    </div>
  )
}

export default HeaderHover

// max-w-[200px] max-h-[200px]