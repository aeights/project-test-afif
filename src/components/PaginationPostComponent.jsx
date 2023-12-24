import React from 'react'


function PaginationPostComponent({ page, setPage }) {
    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handleNext = () => {
        setPage((prevState) => prevState+1);
        scrollTop();
    }
    const handlePrev = () => {
        setPage((prevState) => prevState-1);
        scrollTop();
    }
    return (
        <div className='flex justify-center items-center my-16'>
            <button className='font-semibold' onClick={handlePrev}>Prev</button>
            <div className='mx-8 px-2 py-1 bg-orange-500 rounded-md'>
                <p className='text-white'>{page}</p>
            </div>
            <button className='font-semibold' onClick={handleNext}>Next</button>
        </div>
    )
}

export default PaginationPostComponent