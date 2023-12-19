import React from 'react'
import UserSidebar from '../includes/sidebar'

export default function UserOrders() {
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
        <div className="col-12">
          <div className="card mb-3 grd-primary">
            <div className="card-body bg-hexagon">
              {/* Row start */}
              <div className="row g-4">
                <div className="px-0 border-end col-xl-3 col-lg-6 col-sm-6">
                  <div className="text-center text-white">
                    <p className="m-0 small">Total Orders</p>
                    <h3 className="my-2">6</h3>
                 
                  </div>
                </div>
                <div className="px-0 border-end col-xl-3 col-lg-6 col-sm-6">
                  <div className="text-center text-white">
                    <p className="m-0 small">New Order</p>
                    <h3 className="my-2">1</h3>
          
                  </div>
                </div>
                <div className="px-0 border-end col-xl-3 col-lg-6 col-sm-6">
                  <div className="text-center text-white">
                    <p className="m-0 small">Pending Order</p>
                    <h3 className="my-2">1</h3>
               
                  </div>
                </div>
                <div className="px-0 col-xl-3 col-lg-6 col-sm-6">
                  <div className="text-center text-white">
                    <p className="m-0 small">Completed</p>
                    <h3 className="my-2">4</h3>
                  
                  </div>
                </div>
              </div>
              {/* Row end */}
            </div>
          </div>
        </div>
      </div>
      {/* Row end */}
      {/* Row start */}
      <div className="row gx-3">
        <div className="col-xxl-12">
          <div className="card mb-3">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table align-middle table-hover m-0">
                  <thead>
                    <tr>
                      <th scope="col">Service</th>
                      <th scope="col">Cost</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Person Appointed</th>
                      <th scope="col">Review</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="grd-primary-light">
                      <td>Massage</td>
                      <td>INR 800</td>
                      <td>21-09-2023 01:00 PM</td>
                      <td>
                        <span className="badge border bg-info">Pending</span>
                      </td>
                      <td>
                        <b>Mr. Raj Kumar</b>
                      </td>
                      <td>
                        <div className="star-rating">
                          <span className="star " data-rating={1}>
                            ★
                          </span>
                          <span className="star " data-rating={2}>
                            ★
                          </span>
                          <span className="star " data-rating={3}>
                            ★
                          </span>
                          <span className="star " data-rating={4}>
                            ★
                          </span>
                          <span className="star " data-rating={5}>
                            ★
                          </span>
                        </div>
                      </td>
                      <td>
                        <a className="btn btn-info btn-sm" href="#">
                          <i className="bi bi-speedometer2" />
                        </a>
                        <a
                          className="btn btn-success btn-sm"
                          href="/user/view-invoice"
                        >
                          <i className="bi bi-eye" />
                        </a>
                      </td>
                    </tr>
                    <tr className="grd-primary-light">
                      <td>Stretch</td>
                      <td>INR 650</td>
                      <td>21-09-2023 01:00 PM</td>
                      <td>
                        <span className="badge border bg-success ">
                          Completed
                        </span>
                      </td>
                      <td>
                        <b>Mr. Tushar </b>
                      </td>
                      <td>
                        <div className="star-rating">
                          <span className="star selected" data-rating={1}>
                            ★
                          </span>
                          <span className="star selected" data-rating={2}>
                            ★
                          </span>
                          <span className="star selected" data-rating={3}>
                            ★
                          </span>
                          <span className="star selected" data-rating={4}>
                            ★
                          </span>
                          <span className="star selected" data-rating={5}>
                            ★
                          </span>
                        </div>
                      </td>
                      <td>
                        <a className="btn btn-info btn-sm" href="#">
                          <i className="bi bi-speedometer2" />
                        </a>
                        <a
                          className="btn btn-success btn-sm"
                          href="/user/view-invoice"
                        >
                          <i className="bi bi-eye" />
                        </a>
                      </td>
                    </tr>
                    <tr className="grd-primary-light">
                      <td>Fitness</td>
                      <td>INR 1800</td>
                      <td>20-09-2023 01:00 PM</td>
                      <td>
                        <span className="badge border bg-danger">Canceled</span>
                      </td>
                      <td>
                        <b>Mr. Gautam</b>
                      </td>
                      <td>
                        <div className="star-rating">
                          <span className="star " data-rating={1}>
                            ★
                          </span>
                          <span className="star " data-rating={2}>
                            ★
                          </span>
                          <span className="star " data-rating={3}>
                            ★
                          </span>
                          <span className="star " data-rating={4}>
                            ★
                          </span>
                          <span className="star " data-rating={5}>
                            ★
                          </span>
                        </div>
                      </td>
                      <td>
                        <a className="btn btn-info btn-sm" href="#">
                          <i className="bi bi-speedometer2" />
                        </a>
                        <a className="btn btn-success btn-sm" href="#">
                          <i className="bi bi-eye" />
                        </a>
                      </td>
                    </tr>
                    <tr className="grd-primary-light">
                      <td>Massage</td>
                      <td>INR 320</td>
                      <td>21-09-2023 01:00 PM</td>
                      <td>
                        <span className="badge border bg-success">
                          Completed
                        </span>
                      </td>
                      <td>
                        <b>Mr. Raj Kumar</b>
                      </td>
                      <td>
                        <div className="star-rating">
                          <span className="star selected" data-rating={1}>
                            ★
                          </span>
                          <span className="star selected" data-rating={2}>
                            ★
                          </span>
                          <span className="star selected" data-rating={3}>
                            ★
                          </span>
                          <span className="star selected" data-rating={4}>
                            ★
                          </span>
                          <span className="star selected" data-rating={5}>
                            ★
                          </span>
                        </div>
                      </td>
                      <td>
                        <a className="btn btn-info btn-sm" href="#">
                          <i className="bi bi-speedometer2" />
                        </a>
                        <a
                          className="btn btn-success btn-sm"
                          href="/user/view-invoice"
                        >
                          <i className="bi bi-eye" />
                        </a>
                      </td>
                    </tr>
                    <tr className="grd-primary-light">
                      <td>Fitness</td>
                      <td>INR 1800</td>
                      <td>20-09-2023 01:00 PM</td>
                      <td>
                        <span className="badge border bg-success ">
                          Completed
                        </span>
                      </td>
                      <td>
                        <b>Mr. Arjun</b>
                      </td>
                      <td>
                        <div className="star-rating">
                          <span className="star selected" data-rating={1}>
                            ★
                          </span>
                          <span className="star selected" data-rating={2}>
                            ★
                          </span>
                          <span className="star selected" data-rating={3}>
                            ★
                          </span>
                          <span className="star selected " data-rating={4}>
                            ★
                          </span>
                          <span className="star " data-rating={5}>
                            ★
                          </span>
                        </div>
                      </td>
                      <td>
                        <a className="btn btn-info btn-sm" href="#">
                          <i className="bi bi-speedometer2" />
                        </a>
                        <a className="btn btn-success btn-sm" href="#">
                          <i className="bi bi-eye" />
                        </a>
                      </td>
                    </tr>
                    <tr className="grd-primary-light">
                      <td>Fitness</td>
                      <td>INR 1200</td>
                      <td>20-09-2023 01:00 PM</td>
                      <td>
                        <span className="badge border bg-success">
                          Completed
                        </span>
                      </td>
                      <td>
                        <b>Mr. Gautam</b>
                      </td>
                      <td>
                        <div className="star-rating">
                          <span className="star selected" data-rating={1}>
                            ★
                          </span>
                          <span className="star selected" data-rating={2}>
                            ★
                          </span>
                          <span className="star selected" data-rating={3}>
                            ★
                          </span>
                          <span className="star " data-rating={4}>
                            ★
                          </span>
                          <span className="star " data-rating={5}>
                            ★
                          </span>
                        </div>
                      </td>
                      <td>
                        <a className="btn btn-info btn-sm" href="#">
                          <i className="bi bi-speedometer2" />
                        </a>
                        <a
                          className="btn btn-success btn-sm"
                          href="/user/view-invoice"
                        >
                          <i className="bi bi-eye" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
