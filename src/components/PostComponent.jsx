import React from 'react'

function PostComponent({image, alt, date, title}) {
  return (
    <div className='w-60 h-80 rounded-lg mt-12 shadow-lg hover:shadow-xl duration-300'>
        <div className='w-full h-[60%] rounded-t-lg'>
            <img className='object-cover w-full h-full rounded-t-lg' src={image} alt={alt} />
        </div>
        <div className='p-4 flex flex-col gap-2'>
            <p className='font-semibold text-sm text-slate-300'>{date}</p>
            <p className='font-semibold overflow-hidden line-clamp-3'>{title}</p>
        </div>
    </div>
  )
}

export default PostComponent