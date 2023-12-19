import React from "react";
import { Link } from "react-router-dom";


function Booking() {
  return (
    <>
    
      <div class="container">
        <div class="row py-5">
          <div class="main_booking">
            <h2>Service Booking</h2>
            <div class="boking_detail py-5">
              <div class="list_box">
                <div class="select_heading">
                  <h4>Select A Service</h4>
                </div>
                <div class="list_menu   py-5">
                  <h5>Massage</h5>
                  <Link class="aftehover" to={"/appoimentForm"}>
                    <p>Natural Massage</p>
                  </Link>
                  <Link class="aftehover" to={"/appoimentForm"}>
                    <p>Chair Massage</p>
                  </Link>
                  <Link class="aftehover" to={"/appoimentForm"}>
                    <p>Deep Massage</p>
                  </Link>
                  <Link class="aftehover" to={"/appoimentForm"}>
                    <p>Medical Massage</p>
                  </Link>

                  <h5>Stretch</h5>
                  <Link class="aftehover" to={"/appoimentForm"}>
                    <p>Light Stretching</p>
                  </Link>
                  <a class="aftehover" to={"/appoimentForm"}>
                    <p>Deep Stretching</p>
                  </a>
                  <h5>Fitness & Weight Loss Program</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Booking;
