import React from 'react'
import { Routes,Route } from 'react-router-dom'
import EmployeeLayout from './layout/EmployeeLayout'
import EmployeeDashboard from './pages/EmployeeDashboard'
import AssignedOrder from './pages/AssignedOrder'
import NewOrder from './pages/NewOrder'
import Orders from './pages/Orders'
import Invoice from './pages/Invoice'





function EmployeeRoutes() {
  return (
    

    <Routes>
        <Route path='/dashboard' element={<EmployeeLayout><EmployeeDashboard/></EmployeeLayout>}/>
        <Route path='/assigned-orders' element={<EmployeeLayout><AssignedOrder/></EmployeeLayout>}/>
        <Route path='/new-order' element={<EmployeeLayout><NewOrder/></EmployeeLayout>} />
        <Route path='/orders' element={<EmployeeLayout><Orders/></EmployeeLayout>} />
        <Route path='/settings' element={<EmployeeLayout><Orders/></EmployeeLayout>} />
        <Route path='/view-invoice/1' element={<EmployeeLayout><Invoice/></EmployeeLayout>} />
        
    </Routes>

     
    
  )
}

export default EmployeeRoutes
