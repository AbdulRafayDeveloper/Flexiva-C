import React from 'react'
import { useLocation } from 'react-router-dom';


export default function EmployeeSidebar() {
    const location = useLocation();

  return (
    
<nav id="sidebar" className="sidebar-wrapper">
  
  <div className="app-brand px-3 py-2 d-flex align-items-center">
    <a href="/employee/dashboard" className="text-center">
      {/* <img src="/favicon.png" className="logo" alt="Flexiva" title="Flexiva" /> */}
      <span className="h4">Flexiva</span>
    </a>
  </div>
  {/* App brand ends */}
  {/* Sidebar menu starts */}
  <div className="sidebarMenuScroll">
    <ul className="sidebar-menu">
 
      <li className={location.pathname === '/employee/dashboard' ? 'active current-page' : ''}>
        <a href="/employee/dashboard">
          <i className="bi bi-bar-chart-line" />
          <span className="menu-text">Dashboard</span>
          {/* {'{'}{'{'}-- <span className="badge border border-danger text-danger rounded-5 ms-2">New</span> --{'}'}{'}'} */}
        </a>
      </li>
      <li className={location.pathname === '/employee/new-order' ? 'active current-page' : ''}>
        <a href="/employee/new-order">
          <i className="bi bi-star" />
          <span className="menu-text">New Order</span>
        </a>
      </li>
      <li className={location.pathname === '/employee/assigned-orders' ? 'active current-page' : '' }>
        <a href="/employee/assigned-orders">
          <i className="bi bi-basket" />
          <span className="menu-text">Assigned Orders</span>
        </a>
      </li>
      <li className={location.pathname === '/employee/orders' ? 'active current-page' : '' }>
        <a href="/employee/orders">
          <i className="bi bi-basket" />
          <span className="menu-text">Orders</span>
        </a>
      </li>
      {/* {'{'}{'{'}-- <li className="{{ Request::is('employee/providers') ? 'active current-page' : '' }}">
        <a href="/employee/users">
          <i className="bi bi-person" />
          <span className="menu-text">Providers</span>
        </a>
      </li> --{'}'}{'}'} */}
      {/* <li className={location.pathname === '/employee/settings' ? 'active current-page' : '' }>
        <a href="/employee/settings">
          <i className="bi bi-gear" />
          <span className="menu-text">Settings</span>
        </a>
      </li> */}
    </ul>
  </div>
  {/* Sidebar menu ends */}
</nav>


  )
}
