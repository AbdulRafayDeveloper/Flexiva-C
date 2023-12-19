import React from 'react'

export default function EmployeeDashboard() {
  return (
    <div className="container-fluid">
  <div className="card mb-2">
    <ol className="breadcrumb d-none d-lg-flex ms-3">
      <li className="breadcrumb-item">
        <i className="bi bi-bell lh-2" />
        <a href="/employee/new-order" className="text-decoration-none">You have <span className="badge bg-danger">5</span> New Order</a>
      </li>
    </ol>
  </div>
  <div className="card mb-4">
    <ol className="breadcrumb d-lg-flex ms-3">
      <li className="breadcrumb-item">
        <i className="bi bi-bell lh-2" />
        <span className="badge bg-danger">X</span><a href="/employee/new-order" className="text-decoration-none">Provider Name Rejected the Request for Order # flx-2654
          New Orders 
          <span className="badge btn bg-success">Assign New Provider</span> 
          {/* {'{'}{'{'}-- <span className="badge btn bg-danger">Reject</span> */}
          </a> 
      </li>
    </ol>
  </div>
  {/* Row start */}
  <div className="row">
    <div className="col-xl-4 col-lg-6 col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h5 className="mb-4 fw-normal">New Order</h5>
              <h1 className="fw-bold m-0 display-6">1</h1>
            </div>
            <div className="d-flex justify-content-between flex-column">
              <div className="growth-block mb-4 danger rounded-5">
                <i className="bi bi-caret-up-fill" />
                <span>20%</span>
              </div>
              <a href="javascript:void(0)" className="text-primary text-decoration-none d-flex align-items-center">Details <i className="bi bi-caret-right-fill fs-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-6 col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h5 className="mb-4 fw-normal">Total Orders</h5>
              <h1 className="fw-bold m-0 display-6">390</h1>
            </div>
            <div className="d-flex justify-content-between flex-column">
              <div className="growth-block mb-4 info rounded-5">
                <i className="bi bi-caret-up-fill" />
                <span>30%</span>
              </div>
              <a href="javascript:void(0)" className="text-primary text-decoration-none d-flex align-items-center">Details <i className="bi bi-caret-right-fill fs-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-4 col-lg-12 col-12">
      <div className="card mb-4">
        <div className="card-body">
          <div className="d-flex flex-row justify-content-between">
            <div>
              <h5 className="mb-4 fw-normal">Available Providers</h5>
              <h1 className="fw-bold m-0 display-6">15</h1>
            </div>
            <div className="d-flex justify-content-between flex-column">
              {/* {'{'}{'{'}-- <div className="growth-block mb-4 success rounded-5">
                <i className="bi bi-caret-down-fill" />
                <span>30%</span>
              </div> --{'}'}{'}'} */}
              <a href="javascript:void(0)" className="text-primary text-decoration-none d-flex align-items-center">Details <i className="bi bi-caret-right-fill fs-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Row end */}
  {/* Row start */}
  <div className="row">
    <div className="col-xl-6 col-12">
      <div className="card mb-4">
        <div className="card-header">
          <h4 className="card-title">Recent Orders</h4>
        </div>
        <div className="card-body">
          <div className="border border-dark rounded-3">
            <div className="table-responsive">
              <table className="table align-middle custom-table m-0">
                <thead>
                  <tr>
                    <th>OrderId</th>
                    <th>Customer Name</th>
                    <th>provider</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123</td>
                    <td>Some Name</td>
                    <td>Some Provider</td>
                    <td>
                      <a href="#" className="btn-link">Natural Massage</a>
                    </td>
                    <td>24/02/2023</td>
                    <td>$29</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm">
                        Completed
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td>Some Name</td>
                    <td>Some Provider</td>
                    <td>
                      <a href="#" className="btn-link">Natural Massage</a>
                    </td>
                    <td>24/02/2023</td>
                    <td>$29</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm">
                        Processing
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td>Some Name</td>
                    <td>Some Provider</td>
                    <td>
                      <a href="#" className="btn-link">Natural Massage</a>
                    </td>
                    <td>24/02/2023</td>
                    <td>$29</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm">
                        Processing
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td>Some Name</td>
                    <td>Some Provider</td>
                    <td>
                      <a href="#" className="btn-link">Medical Massage</a>
                    </td>
                    <td>26/02/2023</td>
                    <td>$48</td>
                    <td>
                      <button className="btn btn-outline-success btn-sm">
                        Completed
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td>Some Name</td>
                    <td>Some Provider</td>
                    <td>
                      <a href="#" className="btn-link">Stretch</a>
                    </td>
                    <td>29/03/2023</td>
                    <td>$65</td>
                    <td>
                      <button className="btn btn-outline-danger btn-sm">
                        Processing
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xl-6 col-12">
      <div className="card mb-4">
        <div className="card-header">
          <h4 className="card-title">Customers Data</h4>
        </div>
        <div className="card-body">
          <div className="d-flex gap-4 justify-content-center flex-row">
            <div className="stats-block bg-primary">
              <i className="bi bi-bag-plus" />
              <span>New Client</span>
            </div>
            <div className="stats-block bg-dark">
              <i className="bi bi-cart3" />
              <span>Services</span>
            </div>
          </div>
          <div id="customersData" />
        </div>
      </div>
    </div>
  </div>
  {/* Row end */}
</div>

  )
}
