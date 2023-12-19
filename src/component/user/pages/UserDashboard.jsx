import React from 'react'
import UserSidebar from '../includes/sidebar'

export default function UserDashboard() {
  return (
    <div className="main-container">
   <UserSidebar />
  
  <div className="app-container">
  
    <div className="app-hero-header mb-4"></div>
    <div className="app-body">
      
      <div className="row gx-3">
        <div className="col-xl-7 col-sm-12 col-12">
          <div
            className="card mb-3"
            style={{ height: "211px!important", border: "0px solid black" }}
          >
            <div className="card-body">
              <div className="row align-items-end">
                <div className="col-sm-10">
                  <h3 className="mb-4">Welcome Nauman! 🎉</h3>
                  <p>
                    Coming up Appointment with{" "}
                    <span className="fw-bold">Mr. Raj </span> at
                    <span className="text-success fw-bold">
                      Thursday 21-09-2023 - 01:00 PM
                    </span>
                  </p>
                  <a className="card-title" href="#">
                    Track Status
                  </a>
                
                
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>

 
      <div className="row gx-3">
        <div className="col-xxl-12">
          {/* Card start */}
          <div className="card">
            <div className="card-body">
              <div id="dayGrid" />
            </div>
          </div>
          {/* Card end */}
        </div>
      </div>
      {/* Row end */}
    </div>
    {/* App body ends */}
    {/* App footer start */}
    <div className="app-footer">
      <span>© Flexiva 2023</span>
    </div>
    {/* App footer end */}
  </div>
  {/* App container ends */}
</div>

  )
}
