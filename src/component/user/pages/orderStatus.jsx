import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserSidebar from '../includes/sidebar';

const OrderDetail = () => {
  const [countdownTime, setCountdownTime] = useState(3600); // 1 hour in seconds
  const [sosButtonVisible, setSOSButtonVisible] = useState(false);
  const [starRating, setStarRating] = useState(0);
  const [cashAmount, setCashAmount] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const startCountdown = () => {
    setSOSButtonVisible(true);
  };

  const showCashPaymentModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const updateCountdown = () => {
    setCountdownTime((prevTime) => prevTime - 1);

    if (countdownTime <= 0) {
      clearInterval(updateCountdown);
      showSOSButton();
    }
  };

  const showSOSButton = () => {
    setSOSButtonVisible(true);
  };

  const handleFinishButtonClick = () => {
    // Handle cash payment and review submission logic here

    // Close the modal
    handleCloseModal();
  };

  const handleStarClick = (rating) => {
    setStarRating(rating);
  };

  const updateStarRating = () => {
    // Function to update the star rating display
  };

  const formatCountdownTime = () => {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="main-container">
          <UserSidebar/>
      <div className='app-container'>
      <div className="app-hero-header mb-4"></div>
      <div className="app-body">
      <div className="col-12">
        <div className="card mb-3">
          <div className="card-header">
            <h4 className="card-title">Order Detail</h4>
          </div>
          <div className="card-body">
            <div className="container text-center mt-1">
              <h2 className="text-info">Natural Massage</h2>
            </div>

            {/* Client Details */}
            <div className="container text-center">
              <h2>Client Details</h2>
              <p>
                Client Name: John Doe<br />
                Client Address: 123, Following Address<br />
                Phone Number: (123) 456-7890
              </p>
              <div>
                <h2>Payment: 4500</h2>
              </div>
            </div>

            {/* Modal for Cash Payment */}
            <Modal show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Receive Cash Payment</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Cash payment form */}
                <form id="cashPaymentForm">
                  <div className="form-group">
                    <label htmlFor="cashAmount">Enter Cash Amount:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cashAmount"
                      value={cashAmount}
                      onChange={(e) => setCashAmount(e.target.value)}
                      required
                    />
                  </div>
                </form>

                <form id="reviewForm">
                  <div className="form-group">
                    <label htmlFor="starRating">Rate the service:</label>
                    {/* Star Rating Component */}
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <span
                          key={rating}
                          className={`star ${rating <= starRating ? 'active' : ''}`}
                          onClick={() => handleStarClick(rating)}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                    <input type="hidden" name="rating" id="rating" value={starRating} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="reviewText">Give a Review:</label>
                    <textarea
                      className="form-control"
                      id="reviewText"
                      rows="4"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                    ></textarea>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleFinishButtonClick}>
                  Finish
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Countdown Timer */}
            <div className="container countdown-container">
              <h2 className="countdown-title">Time Remaining</h2>
              <div className="countdown">{formatCountdownTime()}</div>
            </div>

            {/* Start Now Button */}
            <div className="container start-now-button-container">
              <button className="btn btn-primary btn-lg" onClick={startCountdown}>
                {sosButtonVisible ? 'Finish' : 'Start Now'}
              </button>
            </div>

            {/* SOS Button (Initially Hidden) */}
            {sosButtonVisible && (
              <div className="container sos-button-container">
                <button className="btn btn-danger btn-lg" onClick={showCashPaymentModal}>
                  Need Help?
                </button>
              </div>
            )}

            {/* Custom JavaScript for Countdown Timer and Start Now Button */}
          </div>
        </div>
      </div>
      </div>
      <div className="card"></div>
      <div className="card"></div>
    </div>
    </div>
  );
};

export default OrderDetail;
