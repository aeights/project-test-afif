import React from 'react'

function HeaderComponent({image, title, subtitle}) {
  return (
    <div className={`text-2xl flex flex-col justify-center items-center h-96 bg-fixed bg-cover header-page ${image}`}>
        <h1 className='text-3xl font-semibold text-black'>{title}</h1>
        <p className='text-black'>{subtitle}</p>
    </div>
  )
}

export default HeaderComponent