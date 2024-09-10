import React from 'react'

const ImportantDates = () => {
  return (
    <section className='important-dates '>
        <div className=' text-center text-orange-500  text-2xl sm:text-4xl font-bold mb-5'>
            <h1>Important Dates</h1>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center md:gap-x-5 gap-y-5 '>
             <div className='border h-48  w-full md:w-2/6 bg-orange-200 flex flex-col justify-center gap-y-2 rounded-xl'>
                   <h1 className='text-3xl font-bold text-gray-700 text-center'>12 SEP, 2024</h1>
                    <p className='text-xl md:text-2xl font-regular text-gray-700 text-center' >Abstract submission opens</p>
             </div>
             <div className='border h-48  w-full md:w-2/6 bg-blue-300 flex flex-col justify-center gap-y-2 rounded-xl'>
                   <h1 className='text-3xl font-bold text-gray-700 text-center'>1 JAN, 2025</h1>
                    <p className='text-2xl font-regular text-gray-700 text-center' >Abstracts submission deadline</p>
             </div>
             <div className='border h-48  w-full md:w-2/6 bg-green-300 flex flex-col justify-center gap-y-2 rounded-xl'>
                   <h1 className='text-3xl font-bold text-gray-700 text-center'>20 JAN, 2025</h1>
                    <p className='text-xl md:text-2xl font-regular text-gray-700 text-center' >Acceptance or Rejection</p>
             </div>
             <div className='border h-48  w-full md:w-2/6 bg-yellow-300 flex flex-col justify-center gap-y-2 rounded-xl'>
                   <h1 className='text-3xl font-bold text-gray-700 text-center'>14-15 FEB, 2025</h1>
                    <p className='text-xl md:text-2xl font-regular text-gray-700 text-center' >Conference Dates</p>
             </div>
           
        </div>
    </section>
  )
}

export default ImportantDates