import React from 'react'

const Footer = () => {
  return (
    <div className='h-[40vh] w-full relative'>

        <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent absolute top-0 left-0'></div>


        <div className="h-[50%] w-full"></div>


        <div className='h-[30%] w-full flex flex-col gap-12'>
            <h1 className='text-3xl text-center'>Created By</h1>
            <div className='h-auto w-full flex justify-around'>
                <h3>Manseez Bahadur Pradhan</h3>
                <h3>Pranaya Basukala</h3>
                <h3>Riju Phaiju</h3>
                <h3>Salon Raut</h3>
            </div>
        </div>
        

    </div>
  )
}

export default Footer
