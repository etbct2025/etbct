import React from 'react'
import WelcomeSection from '../Components/HomeComponents/WelcomeSection'
import CollabSection from '../Components/HomeComponents/CollabSection'
import Timeline from '../Components/HomeComponents/Timeline'
import KeyPersons from '../Components/HomeComponents/KeyPersons'
import Contact from '../Components/HomeComponents/Contact'

import Carousel from '../Components/AboutComponents/Carousel'

const HomePage = () => {
  return (
    <>
     <Carousel/>
     <WelcomeSection/>
     {/* <CollabSection/> */}
     <Timeline/>
     <KeyPersons/>
     <Contact/>
    
    </>
  )
}

export default HomePage