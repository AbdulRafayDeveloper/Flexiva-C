import React from 'react'
import { Routes,Route } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import UserDashboard from './pages/UserDashboard';
import UserOrders from './pages/UserOrders';
import Invoice from './pages/Invoice';
import UserSettings from './pages/settings';






function UserRoutes() {
  return (
    

    <Routes>
        <Route path='/dashboard' element={<UserLayout><UserDashboard/></UserLayout>}/>
        <Route path='/orders' element={<UserLayout><UserOrders/></UserLayout>}/>
        <Route path='/view-invoice' element={<UserLayout><Invoice/></UserLayout>}/>
        <Route path='/settings' element={<UserLayout><UserSettings/></UserLayout>}/>
        
        
    </Routes>

     
    
  )
}

export default UserRoutes
