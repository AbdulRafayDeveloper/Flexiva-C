import React from "react";
import { Helmet } from "react-helmet";

export default function EmployeeHeader() {
  return (
    <>
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Employee Dashboard - Flexiva</title>
        <meta name="description" content="Flexiva" />
        <meta name="author" content="ProNauman" />
        <link rel="canonical" href="" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Flexiva" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="Website" />
        <meta property="og:site_name" content="Flexiva" />
        <link rel="shortcut icon" href="favicon.png" />

        {/* <!-- *************
         ************ CSS Files *************
         ************* --> */}
        <link
          rel="stylesheet"
          href="/employee/assets/fonts/bootstrap/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/employee/assets/css/main.min.css" />

        {/* <!-- *************
         ************ Vendor Css Files *************
         ************ --> */}

        {/* <!-- Scrollbar CSS --> */}
        <link
          rel="stylesheet"
          href="/employee/assets/vendor/overlay-scroll/OverlayScrollbars.min.css"
        />
        <link
          href="https://cdn.datatables.net/1.10.23/css/dataTables.bootstrap4.min.css"
          rel="stylesheet"
        />
        {/* <!-- Toastify CSS --> */}
        <link
          rel="stylesheet"
          href="/employee/assets/vendor/toastify/toastify.css"
        />
      </Helmet>

      <>
        {/* App header starts */}
        <div className="app-header d-flex align-items-center">
          {/* Toggle buttons start */}
          <div className="d-flex">
            <button
              className="btn btn-outline-primary me-2 toggle-sidebar"
              id="toggle-sidebar"
            >
              <i className="bi bi-text-indent-left fs-5" />
            </button>
            <button
              className="btn btn-outline-primary me-2 pin-sidebar"
              id="pin-sidebar"
            >
              <i className="bi bi-text-indent-left fs-5" />
            </button>
          </div>
          {/* Toggle buttons end */}
          {/* App brand sm start */}
          <div className="app-brand-sm d-md-none d-sm-block">
            <a href="/employee/dashboard">
              <img src="/favicon.png" className="logo" alt="Flexiva Logo" />
            </a>
          </div>
          {/* App brand sm end */}
          {/* Breadcrumb start */}
          {/* Breadcrumb end */}
          {/* App header actions start */}
          <div className="header-actions">
          
            {/* <div className="dropdown border-start">
         
         
            </div> */}
            <div className="dropdown ms-2">
              <a
                id="userSettings"
                className="dropdown-toggle d-flex py-2 align-items-center text-decoration-none"
                href="#!"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/employee/assets/images/user.png"
                  className="rounded-2 img-3x"
                  alt="Bootstrap Gallery"
                />
              </a>
              <div className="dropdown-menu dropdown-menu-end shadow-sm">
                <div className="p-3 border-bottom mb-2">
                  <h6 className="mb-1">Pro Nauman</h6>
                  <p className="m-0 small opacity-50" />
                </div>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="profile.html"
                >
                  <i className="bi bi-person fs-4 me-2" />
                  Profile
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="settings.html"
                >
                  <i className="bi bi-gear fs-4 me-2" />
                  Settings
                </a>
                <div className="d-grid p-3 py-2">
                  <a className="btn btn-danger" href="#">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* App header actions end */}
        </div>
        {/* App header ends */}
      </>
    </>
  );
}
