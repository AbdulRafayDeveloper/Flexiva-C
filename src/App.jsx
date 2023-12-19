import React, { useState } from "react";
import FrontendRoutes from "./component/main/frontend-routing";
import { Routes,Route } from 'react-router-dom'
import EmployeeRoutes from "./component/employee/employee-routing";
import UserRoutes from "./component/user/user-routing";




function App() {
  return (
    <>
     <Routes>
     <Route path='/*' element={<FrontendRoutes />}/>
     <Route path='/employee/*' element={<EmployeeRoutes />}/>
     <Route path='/user/*' element={<UserRoutes />}/>
     </Routes>
     
    </>
  );
}

export default App;
