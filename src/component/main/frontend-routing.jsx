import React from 'react'
import { Routes,Route } from 'react-router-dom'
import "./assets/css/style.css";
import "./assets/css/media.css";
import "./assets/css/animation.css";
import Business from './pages/Business.jsx'
import Membership from './pages/Membership.jsx'
import BecomeProvider from './pages/Become-a-Provider.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Massage from './pages/Massage.jsx'
import Stretch from './pages/Stretch.jsx'
import Fitness from './pages/Fitness.jsx'
import Signin from './pages/signin.jsx'
import Joinprogram from './pages/Joinprogram.jsx'
import Paymentmethod from './pages/Payment-method.jsx'
import ThankU from './pages/ThankU.jsx'
import Becomemember from './pages/Become-a-member.jsx'
import Booking from './pages/Booking.jsx'
import AppoimentForm from './pages/Appoiment-Form.jsx'
import Becomeapartner from './pages/Becomeapartner.jsx'
import MainLayout from './layout/layout.jsx';



function FrontendRoutes() {



  return (
    <div>
 
    <Routes>
        <Route path='/business' element={<MainLayout><Business/></MainLayout>}/>
        <Route path='/membership' element={<MainLayout><Membership/></MainLayout>}/>
        <Route path='/become-a-provider' element={<MainLayout><BecomeProvider/></MainLayout>}/>
        <Route path='/contact' element={<MainLayout><Contact/></MainLayout>}/>
        <Route path='/' element={<MainLayout><Home/></MainLayout>}/>
        <Route path='/massage' element={<MainLayout><Massage/></MainLayout>}/>
        <Route path='/stretch' element={<MainLayout><Stretch/></MainLayout>}/>
        <Route path='/fitness' element={<MainLayout><Fitness/></MainLayout>}/>
        <Route path='/signin' element={<MainLayout><Signin/></MainLayout>}/>
        <Route path='/join-program' element={<MainLayout><Joinprogram/></MainLayout>}/>
        <Route path='/paymentmethod' element={<MainLayout><Paymentmethod/></MainLayout>}/>
        <Route path='/thankU' element={<MainLayout><ThankU/></MainLayout>}/>
        <Route path='/become-a-member' element={<MainLayout><Becomemember/></MainLayout>}/>
        <Route path='/booking' element={<MainLayout><Booking/></MainLayout>}/>
        <Route path='/appoimentForm' element={<MainLayout><AppoimentForm/></MainLayout>}/>
        <Route path='/become-a-partner' element={<MainLayout><Becomeapartner/></MainLayout>}/>
  
    </Routes>

    </div>
  )
}

export default FrontendRoutes
