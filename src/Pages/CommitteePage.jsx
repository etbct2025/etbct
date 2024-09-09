
import React from 'react'
import Carousel from '../Components/AboutComponents/Carousel'
import ChiefGuest from '../Components/CommiComponents/ChiefGuest'
// import Vc from '../Components/CommiComponents/Vc'
import ChiefPatron from '../Components/CommiComponents/ChiefPatron'
import ConferenceMember from '../Components/CommiComponents/ConferenceMember'

const CommitteePage = () => {
  return (
   <>
    <Carousel/>
    <section className='flex flex-col gap-y-10 py-5'>
      <ChiefPatron/>
      <ChiefGuest/>
      <ConferenceMember/>
    </section>
   </>
  )
}

export default CommitteePage