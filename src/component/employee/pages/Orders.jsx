import React from 'react'

export default function Orders() {
  return (
<div className="container-fluid">
  <div className="col-12">
    <div className="card mb-3">
      <div className="card-header">
        <h4 className="card-title">Orders</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <div className="border-dark rounded-3">
            <table
              id="data-table"
              className="table align-middle table-striped table-hover m-0"
            >
              <thead>
                <tr>
                  <th>Sr #</th>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Service Type</th>
                  <th>Provider</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Gross Amount</th>
                  <th>Transportation</th>
                  <th>GST</th>
                  <th>Promotional Discount</th>
                  <th>Net Amount</th>
                  <th>Status</th>
                  <th>Invoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>#00001</td>
                  <td>
                    <a href="#" className="text-red">
                      Alia
                    </a>
                  </td>
                  <td className="h6">Swedish Massage</td>
                  <td>Some provider</td>
                  <td>+913-148-60985</td>
                  <td>H 152/d, Bihar</td>
                  <td>4500</td>
                  <td>200</td>
                  <td>150</td>
                  <td>150</td>
                  <td>5000</td>
                  <td>
                    <span className="btn btn-outline-success">Completed</span>
                  </td>
                  <td>
                    <a
                      className="btn btn-info btn-sm"
                      href="/employee/view-invoice/1"
                    >
                      <i className="bi bi-eye" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>#00002</td>
                  <td>
                    <a href="#" className="text-red">
                      Nathan
                    </a>
                  </td>
                  <td className="h6">Natural Massage</td>
                  <td>Some Prov</td>
                  <td>+918-119-88790</td>
                  <td>H 152/d, Bihar</td>
                  <td>4500</td>
                  <td>200</td>
                  <td>150</td>
                  <td>150</td>
                  <td>5000</td>
                  <td>
                    <span className="btn btn-outline-warning">Processing</span>
                  </td>
                  <td>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="bi bi-eye" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>#00003</td>
                  <td>
                    <a href="#" className="text-red">
                      Kelly
                    </a>
                  </td>
                  <td className="h6">Medical Massage</td>
                  <td>Somename</td>
                  <td>+915-117-88763</td>
                  <td>H 152/d, Bihar</td>
                  <td>4500</td>
                  <td>200</td>
                  <td>150</td>
                  <td>150</td>
                  <td>5000</td>
                  <td>
                    <span className="btn btn-outline-info">Started</span>
                  </td>
                  <td>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="bi bi-eye" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>#00004</td>
                  <td>
                    <a href="#" className="text-red">
                      Steve
                    </a>
                  </td>
                  <td className="h6">Stretch</td>
                  <td>some name</td>
                  <td>+914-676-66530</td>
                  <td>H 152/d, Bihar</td>
                  <td>4500</td>
                  <td>200</td>
                  <td>150</td>
                  <td>150</td>
                  <td>5000</td>
                  <td>
                    <span className="btn btn-outline-info">Processing</span>
                  </td>
                  <td>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="bi bi-eye" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>#00005</td>
                  <td>
                    <a href="#" className="text-red">
                      Kevin
                    </a>
                  </td>
                  <td className="h6">Fitness Program</td>
                  <td>Some Name</td>
                  <td>+915-667-99808</td>
                  <td>H 152/d, Bihar</td>
                  <td>4500</td>
                  <td>200</td>
                  <td>150</td>
                  <td>150</td>
                  <td>5000</td>
                  <td>
                    <span className="btn btn-outline-info">Processing</span>
                  </td>
                  <td>
                    <a className="btn btn-info btn-sm" href="#">
                      <i className="bi bi-eye" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>#00005</td>
                  <td>
                    <a href="#" className="text-red">
                      Kevin
                    </a>
                  </td>
                  <td className="h6">Fitness Program</td>
                  <td>name</td>
                  <td>+915-667-99808</td>
                  <td>H 152/d, Bihar</td>
                  <td>4500</td>
                  <td>200</td>
                  <td>150</td>
                  <td>150</td>
                  <td>5000</td>
                  <td>
                    <span className="btn btn-outline-success">Completed</span>
                  </td>
                  <td>
                    <a className="btn btn-info btn-sm" href="#">
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
</div>

  )
}
