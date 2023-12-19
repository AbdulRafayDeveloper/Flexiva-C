import React from 'react'
import UserSidebar from '../includes/sidebar'

export default function UserSettings() {
  return (
    <div className="main-container">
    <UserSidebar/>
    {/* App container starts */}
    <div className="app-container">
      {/* App hero header starts */}
      <div className="app-hero-header mb-4"></div>
      {/* App Hero header ends */}
      {/* App body starts */}
      <div className="app-body">
        {/* Row start */}
        <div className="row gx-3">
          <div className="col-xxl-12">
            <div className="card mb-3">
              <div className="card-body">
                <div className="custom-tabs-container">
                  <ul className="nav nav-tabs" id="customTab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="tab-oneA"
                        data-bs-toggle="tab"
                        href="#oneA"
                        role="tab"
                        aria-controls="oneA"
                        aria-selected="true"
                      >
                        General
                      </a>
                    </li>
                    {/* {"{"}
                    {"{"}--{" "}
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="tab-twoA"
                        data-bs-toggle="tab"
                        href="#twoA"
                        role="tab"
                        aria-controls="twoA"
                        aria-selected="false"
                      >
                        Settings
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="tab-threeA"
                        data-bs-toggle="tab"
                        href="#threeA"
                        role="tab"
                        aria-controls="threeA"
                        aria-selected="false"
                      >
                        Credit Cards
                      </a>
                    </li>{" "}
                    --{"}"}
                    {"}"} */}
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="oneA"
                      role="tabpanel"
                    >
                      {/* Row start */}
                      <div className="row gx-3 justify-content-between">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                          <div className="card mb-3">
                            <div className="card-header">
                              <h5 className="card-title">Personal Details</h5>
                            </div>
                            <div className="card-body">
                              {/* Row start */}
                              <div className="row gx-3">
                                <div className="col-6">
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="fullName"
                                      className="form-label"
                                    >
                                      Full Name
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="fullName"
                                      placeholder="Full Name"
                                      defaultValue="Noman Pro"
                                    />
                                  </div>
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="contactNumber"
                                      className="form-label"
                                    >
                                      Contact
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="contactNumber"
                                      placeholder="Contact"
                                      defaultValue={'03101118722'}
                                    />
                                  </div>
                                </div>
                                <div className="col-6">
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="emailId"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="emailId"
                                      placeholder="Email ID"
                                      defaultValue="info@email.com"
                                    />
                                  </div>
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="birthDay"
                                      className="form-label"
                                    >
                                      Birthday
                                    </label>
                                    <div className="input-group">
                                      <input
                                        type="text"
                                        className="form-control datepicker-opens-left"
                                        id="birthDay"
                                        placeholder="DD/MM/YYYY"
                                        defaultValue="20/09/2023"
                                      />
                                      <span className="input-group-text">
                                        <i className="bi bi-calendar4" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12">
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <textarea
                                      className="form-control"
                                      rows={3}
                                      defaultValue={"Muzafarpur Bihar, India"}
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* Row end */}
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 col-12">
                          <div className="card mb-3">
                            <div className="card-header">
                              <h5 className="card-title">Reset Password</h5>
                            </div>
                            <div className="card-body">
                              <div className="row gx-3">
                                <div className="col-12">
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="currentPassword"
                                      className="form-label"
                                    >
                                      Current Password
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="currentPassword"
                                      placeholder="Enter Current Password"
                                    />
                                  </div>
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="newPassword"
                                      className="form-label"
                                    >
                                      New Password
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="newPassword"
                                      placeholder="Enter New Password"
                                    />
                                  </div>
                                  {/* Form Field Start */}
                                  <div className="mb-3">
                                    <label
                                      htmlFor="confirmNewPassword"
                                      className="form-label"
                                    >
                                      Confirm New Password
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="confirmNewPassword"
                                      placeholder="Confirm New Password"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Row end */}
                      <div className="d-flex gap-2 justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Reset
                        </button>
                        <button type="button" className="btn btn-success">
                          Update
                        </button>
                      </div>
                    </div>
                
                    <div className="tab-pane fade" id="twoA" role="tabpanel">
                      {/* Row start */}
                      <div className="row gx-3">
                        <div className="col-sm-6 xol-12">
                          {/* Card start */}
                          <div className="card">
                            <div className="card-body">
                              <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                  Show desktop notifications
                                  <div className="form-check form-switch m-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="switchOne"
                                    />
                                  </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                  Show email notifications
                                  <div className="form-check form-switch m-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="switchTwo"
                                      defaultChecked=""
                                    />
                                  </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                  Show chat notifications
                                  <div className="form-check form-switch m-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="switchThree"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Card end */}
                        </div>
                        <div className="col-sm-6 xol-12">
                          {/* Card start */}
                          <div className="card">
                            <div className="card-body">
                              <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                  Show purchase history
                                  <div className="form-check form-switch m-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="switchFour"
                                    />
                                  </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                  Show orders
                                  <div className="form-check form-switch m-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="switchFive"
                                    />
                                  </div>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                  Show alerts
                                  <div className="form-check form-switch m-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="switchSix"
                                    />
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* Card end */}
                        </div>
                      </div>
                      {/* Row end */}
                      <div className="d-flex gap-2 mt-4 justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-success">
                          Update
                        </button>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="threeA" role="tabpanel">
                      {/* Row start */}
                      <div className="row gx-3">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table className="table align-middle table-bordered m-0">
                              <thead>
                                <tr>
                                  <th>Bank Name</th>
                                  <th>Card Number</th>
                                  <th>Card type</th>
                                  <th>Expiry Date</th>
                                  <th>Credit Balance</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Bank of America</td>
                                  <td>0000 0000 0000 0000</td>
                                  <td>Visa</td>
                                  <td>10/10/2025</td>
                                  <td>$100000</td>
                                  <td>
                                    <div className="form-check form-switch m-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="cardActive"
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Citi Group</td>
                                  <td>0000 0000 0000 0000</td>
                                  <td>Master</td>
                                  <td>02/24/2028</td>
                                  <td>$150000</td>
                                  <td>
                                    <div className="form-check form-switch m-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="cardActive2"
                                        defaultChecked=""
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Capital One</td>
                                  <td>0000 0000 0000 0000</td>
                                  <td>Visa</td>
                                  <td>05/05/2025</td>
                                  <td>$50000</td>
                                  <td>
                                    <div className="form-check form-switch m-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="cardActive3"
                                        defaultChecked=""
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>Axix</td>
                                  <td>0000 0000 0000 0000</td>
                                  <td>Visa</td>
                                  <td>08/20/2027</td>
                                  <td>$100000</td>
                                  <td>
                                    <div className="form-check form-switch m-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="cardActive4"
                                        defaultChecked=""
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>HDFC</td>
                                  <td>0000 0000 0000 0000</td>
                                  <td>Visa</td>
                                  <td>05/08/2029</td>
                                  <td>$90000</td>
                                  <td>
                                    <div className="form-check form-switch m-0">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        role="switch"
                                        id="cardActive5"
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      {/* Row end */}
                      <div className="d-flex gap-2 mt-4 justify-content-end">
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-success">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
