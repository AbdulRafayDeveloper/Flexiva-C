import React from "react";
var massageDetails = {
  "Order #": "FLX6458",
  "Started At": "25-10-2023 01-03-00",
  "Finished At": "25-10-2023 02-03-00",
  "Full Name": "Alia Williams",
  Address: "H 152/d, Bihar",
  Phone: "+913-148-60985",
  "Date & Time": "09-10-2023 05:00 pm",
  "Service Type": "Swedish Massage",
  Duration: "60 m",
  "Total People": "1",
  "Massage For": "Female",
  Duration: "6 m",
  "Medical Condition": "I am Pregnant (Selected)",
};

var fitnessProgramDetails = {
  "Order #": "FLX5488",
  "Full Name": "Kevin Oliver",
  Email: "izaid57@gmail.com",
  Gender: "Male",
  Address: "H 152/d, Bihar",
  Phone: "+913-148-60985",
  Age: "32",
  Weight: "75 kg",
  Height: "00",
  "Do you have any existing medical conditions or health concerns?": "No",
  "Are you currently taking any medications?": "No",
  "Please briefly describe your fitness or weight loss goals:":
    "Neque porro quisquam est qui dolorem ips There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
  "Have you participated in any fitness or exercise programs before?": "No",
  "Do you have any allergies, food sensitivities, or dietary restrictions we should be aware of?":
    "No",
  "Have you undergone any surgeries or medical procedures in the past?":
    "Neque porro quisquam est qui dolorem ips There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
  "Are you currently experiencing any pain or discomfort, particularly in the joints or muscles?":
    "No",
  "Do you have a history of chronic medical conditions such as diabetes, hypertension, heart disease, or respiratory conditions?":
    "No",
  "Are you currently under the care of a healthcare provider or specialist for any medical condition?":
    "No",
  "Are you taking any dietary supplements, vitamins, or herbal remedies?": "No",
  "Are you currently using any mobility aids or assistive devices, such as crutches, braces, or a wheelchair?":
    "No",
  "Do you smoke or use tobacco products?": "No",
  "Do you consume alcoholic beverages?": "No",
  "How would you describe your current fitness level?": "No",
  "Have you previously worked with a fitness trainer or participated in any exercise program":
    "No",
  "Are there any specific fitness goals you would like to achieve through our program, such as weight loss, muscle gain, improved flexibility, or increased cardiovascular fitness?":
    "I want to be fit",
  "What is your typical daily dietary intake like? Are you following any specific diet plan or eating regimen?":
    "Mix Fruits",
  "Do you have any dietary preferences or restrictions, such as vegetarian, vegan, gluten-free, or other dietary choices?":
    "No",
  "Is there any other health-related information you believe is important for us to know in order to provide you with the best fitness and weight loss program experience?":
    "No",
  " Terms Aclnowledged": "Accepted",
};

export default function NewOrder() {
  return (
    <div className="container-fluid">
      <div className="col-12">
        <div className="card mb-3">
          <div className="card-header">
            <h4 className="card-title">New Orders</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <div className="border-dark rounded-3 ">
                <div
                  className="modal fade"
                  id="exampleModalCenter"
                  tabIndex={-1}
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5
                          className="modal-title"
                          id="exampleModalCenterTitle"
                        >
                          Assign Provider
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        {/*                        
                        <div className="card mb-4">
                          <div className="card-header bg-primary text-white">
                            Order Details
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">User: John Doe</h5>
                            <p className="card-text">Order ID: 123456</p>
                            <p className="card-text">
                              Massage Type: Swedish Massage
                            </p>
                            <p className="card-text">
                              Location: 123 Main St, City
                            </p>
                          </div>
                        </div> */}
                        <div className="card mb-4">
                          <div className="card-header">Select Provider</div>
                          <div className="card-body">
                            {/* Provider Selection */}
                            <div className="card mb-4">
                              <div className="card-header bg-primary text-white">
                                Select Provider
                              </div>
                              <div className="card-body">
                                <form />
                                <div className="form-group">
                                  <label htmlFor="providerSelect">
                                    Choose Provider:
                                  </label>
                                  <select
                                    className="form-control"
                                    id="providerSelect"
                                  >
                                    <option value="provider1">
                                      Provider 1
                                    </option>
                                    <option value="provider2">
                                      Provider 2
                                    </option>
                                    <option value="provider3">
                                      Provider 3
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {/* Bodyguard Selection */}
                            <div className="card mb-4">
                              <div className="card-header bg-primary text-white">
                                Select Bodyguard
                              </div>
                              <div className="card-body">
                                <form />
                                <div className="form-group">
                                  <label htmlFor="bodyguardSelect">
                                    Choose Bodyguard:
                                  </label>
                                  <select
                                    className="form-control"
                                    id="bodyguardSelect"
                                  >
                                    <option value="bodyguard1">
                                      Bodyguard 1
                                    </option>
                                    <option value="bodyguard2">
                                      Bodyguard 2
                                    </option>
                                    <option value="bodyguard3">
                                      Bodyguard 3
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Assign
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <table
                  id="data-table"
                  className="table align-middle table-striped table-hover m-0"
                >
                  <thead className="thead-light">
                    <tr>
                      <th>Sr #</th>
                      <th>Order ID</th>
                      <th>Customer Name</th>
                      <th>Service Type</th>
                      <th>Duration</th>
                      <th>Total People</th>
                      <th>Massage For</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Gross Amount</th>
                      <th>Action</th>
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
                      <td>60 m</td>
                      <td>1</td>
                      <td>Male</td>
                      <td>+913-148-60985</td>
                      <td>H 152/d, Bihar</td>
                      <td>INR 4500</td>
                      <td>
                        <div className="row m-1">
                          <button
                            className="btn btn-info btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLg"
                          >
                            <i className="bi bi-eye" />
                            View Detail
                          </button>
                          {/* Modal Detail */}
                          <div
                            className="modal fade"
                            id="exampleModalLg"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLgLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title h3"
                                    id="exampleModalLgLabel"
                                  >
                                    Order Detail{" "}
                                    <span className="btn btn-success badge badge-pill badge-success">
                                      Paid
                                    </span>
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="table-responsive">
                                      <table className="table table-striped ">
                                        <tbody>
                                          {Object.entries(massageDetails).map(
                                            ([label, value]) => (
                                              <tr key={label}>
                                                <td className="h6">{label}</td>
                                                <td>{value}</td>
                                              </tr>
                                            )
                                          )}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i className="bi bi-pencil" />
                            Assign Provider
                          </button>
                        </div>
                      </td>
                      {/* Modal */}
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
                      <td>60 m</td>
                      <td>1</td>
                      <td>Male</td>
                      <td>+918-119-88790</td>
                      <td>H 152/d, Bihar</td>
                      <td>INR 3500</td>
                      <td>
                        <div className="row m-1">
                          <button className="btn btn-info btn-sm">
                            <i className="bi bi-eye" />
                            View Detail
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i className="bi bi-pencil" />
                            Assign Provider
                          </button>
                        </div>
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
                      <td>60 m</td>
                      <td>1</td>
                      <td>Male</td>
                      <td>+915-117-88763</td>
                      <td>H 152/d, Bihar</td>
                      <td>INR 2400</td>
                      <td>
                        <div className="row m-1">
                          <button className="btn btn-info btn-sm">
                            <i className="bi bi-eye" />
                            View Detail
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i className="bi bi-pencil" />
                            Assign Provider
                          </button>
                        </div>
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
                      <td>60 m</td>
                      <td>1</td>
                      <td>Male</td>
                      <td>+914-676-66530</td>
                      <td>H 152/d, Bihar</td>
                      <td>INR 7890</td>
                      <td>
                        <div className="row m-1">
                          <button className="btn btn-info btn-sm">
                            <i className="bi bi-eye" />
                            View Detail
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i className="bi bi-pencil" />
                            Assign Provider
                          </button>
                        </div>
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
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>+915-667-99808</td>
                      <td>H 152/d, Bihar</td>
                      <td>INR 5690</td>
                      <td>
                        <div className="row m-1">
                          <button
                            className="btn btn-info btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalLg2"
                          >
                            <i className="bi bi-eye" />
                            View Detail
                          </button>
                          {/* Modal Detail */}
                          <div
                            className="modal fade"
                            id="exampleModalLg2"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLgLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title h3"
                                    id="exampleModalLgLabel"
                                  >
                                    Order Detail{" "}
                                    <span className="btn btn-success badge badge-pill badge-success">
                                      Paid
                                    </span>
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  />
                                </div>
                                <div className="modal-body">
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="table-responsive">
                                      $value) {"{"} ?&gt;
                                      <table className="table table-striped ">
                                        <tbody>
                                          {Object.entries(
                                            fitnessProgramDetails
                                          ).map(([label, value]) => (
                                            <tr key={label}>
                                              <td className="h6">{label}</td>
                                              <td>{value}</td>
                                            </tr>
                                          ))}
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="btn btn-primary btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModalCenter"
                          >
                            <i className="bi bi-pencil" />
                            Assign Provider
                          </button>
                        </div>
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
  );
}
