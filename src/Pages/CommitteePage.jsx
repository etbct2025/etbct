
import React from 'react'
import Carousel from '../Components/AboutComponents/Carousel'
import ChiefGuest from '../Components/CommiComponents/ChiefGuest'
// import Vc from '../Components/CommiComponents/Vc'
import ChiefPatron from '../Components/CommiComponents/ChiefPatron'
import ConferenceConvener from '../Components/CommiComponents/ConferenceConvener'
import CommitteeMembers from '../Components/CommiComponents/CommitteeMembers'
import Registrar from '../Components/CommiComponents/Registrar'
import SpecialMembers from '../Components/CommiComponents/SpecialMembers'
import WorkshopMembers from '../Components/CommiComponents/WorkshopMembers'
import WorkCoord from '../Components/CommiComponents/WorkCoord'

const CommitteePage = () => {
  return (
   <>
    <Carousel/>
    <section className='flex flex-col gap-y-10 py-5'>
    {/* <ChiefGuest/> */}
      <ChiefPatron/>
      <Registrar/>
      <ConferenceConvener/>
      <SpecialMembers/>
      <CommitteeMembers/>
      <WorkCoord/>
      <WorkshopMembers/>
    </section>
   </>
  )
}

export default CommitteePage