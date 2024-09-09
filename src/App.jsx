
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Layout from './Components/Layout'
import AboutPage from './Pages/AboutPage'
import CallPage from './Pages/CallPage'
import RegisterPage from './Pages/RegisterPage'

import ContactPage from './Pages/ContactPage'
import CommitteePage from './Pages/CommitteePage'

function App() {
 

  return (
    <>
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route path='' element={<HomePage/>}/>
            <Route path='about' element={<AboutPage/>}/>
            <Route path='call' element={<CallPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='committee' element={<CommitteePage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
         </Route>
       </Routes>

    </>
  )
}

export default App
