import React from 'react'

function HeaderPostComponent({ setSize, show, setSort }) {
    const handleShow = (event) => {
        const value = parseInt(event.target.value);
        setSize(value);
    }
    const handleSort = (event) => {
        const value = event.target.value;
        setSort(value);
    }
    return (
        <div className='flex px-32 justify-between mt-8'>
            <div className='flex justify-center items-center'>
                <p className='font-semibold text-sm'>Showing 1-{show} of 100</p>
            </div>
            <div className='flex gap-4'>
                <div className='flex justify-center items-center gap-2'>
                    <p className='font-semibold text-sm'>Show per page:</p>
                    <select onChange={handleShow} id='showPerPage' className='border rounded-full focus:border-slate-500 duration-300 outline-none py-2 px-8' name="show_per_page">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <p className='font-semibold text-sm'>Sort by:</p>
                    <select onChange={handleSort} id='sortBy' className='border rounded-full focus:border-slate-500 duration-300 outline-none py-2 px-8' name="sort_by">
                        <option value="-published_at">Newest</option>
                        <option value="published_at">Oldest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default HeaderPostComponent