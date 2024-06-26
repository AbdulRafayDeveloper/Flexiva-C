import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import singUp from "../assets/image/singnin.png";
import singIn from "../assets/image/signin.png";
import rightArrow from "../assets/image/arrow-right.png";
import GoogleIcon from "../assets/image/Google.png";
import GitIcon from "../assets/image/GitHub.png";
import logo from "../assets/image/logo.png";
import { Helmet } from 'react-helmet';


function Header() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleCloseSignUp = () => {setShowSignUp(false)};
  const handleShowSignUp = () => {setShowSignUp(true); setShowSignIn(false)};

  const handleCloseSignIn = () => {setShowSignIn(false)};
  const handleShowSignIn = () => {setShowSignIn(true);setShowSignUp(false)};

    ///////////////////////////////////////////

  const [showSignUpMobile, setShowSignUpMobile] = useState(false);
  const [showSignInMobile, setShowSignInMobile] = useState(false);

  const handleCloseSignUpMobile = () => setShowSignUpMobile(false);
  const handleShowSignUpMobile = () => setShowSignUpMobile(true);

  const handleCloseSignInMobile = () => setShowSignInMobile(false);
  const handleShowSignInMobile = () => setShowSignInMobile(true);

  return (
    <>
    <Helmet>
        <title>Flexiva</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<link rel="stylesheet" href="/assets/css/style.css" />
<link rel="stylesheet" href="/assets/css/media.css"/>
<link rel="stylesheet" href="/assets/css/form.css"/>
<link rel="stylesheet" href="/assets/animation/animation.css"/>


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700;800;900&family=Prompt:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;600;700;800;900&family=Prompt:wght@200;400;500;600;700;800;900&family=Roboto+Slab:wght@400;600;700;800&display=swap" rel="stylesheet"/>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
      </Helmet>

      <div className="hero-container nav_main">
        <div className="header">
          <ul>
            <Link className="text-light mx-2" to={"/business"}>
              <li>Business</li>
            </Link>
            <Link className="text-light mx-2" to={"/membership"}>
              <li>Membership</li>
            </Link>
            <Link className="text-light mx-2" to={"/become-a-provider"}>
              <li>Become A Provider</li>
            </Link>
          </ul>
          <ul>
            <li>
              <Button variant="" className="text-light" onClick={handleShowSignUp}>
                Sign Up
              </Button>

              <Modal size="lg" show={showSignUp} onHide={handleCloseSignUp}>
                <Modal.Body className="p-0">
                  <div className="hero-container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="sing_img">
                          <img src={singUp} alt="signupImg" />
                        </div>
                      </div>
                      <div className="col-lg-6  col-md-6 col-sm-6">
                        <div className="sing_detail p-3 ps-0">
                          <Form>
                            <h4 className="sign_title py-3 pt-5">
                              Welcome to Flexiva
                            </h4>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Full Name</Form.Label>
                              <Form.Control
                                className="mb-2"
                                type="text"
                                placeholder=""
                              />
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                className="mb-2"
                                type="email"
                                placeholder=""
                              />
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                className="mb-2"
                                type="password"
                                placeholder=""
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-3"
                              controlId="formBasicCheckbox"
                            >
                              <Form.Check
                                type="checkbox"
                                label="Accept the rules"
                              />
                            </Form.Group>
                            
                              <Button className="sign_but" type="submit">
                              <Link className="text-light" to={'/signin'}>
                                Create An Account
                            </Link>

                                {/* <img src={rightArrow} alt="rightArrow"/> */}
                              </Button>
                           
                          </Form>
                          <div class="s_main">
                            <p>
                              Already have an account? <span onClick={handleShowSignIn}> Log in </span>
                            </p>
                            <h5>OR</h5>
                          </div>
                          <div class="s_but">
                            <div class="go_but mt-3">
                              <img src={GoogleIcon} alt="GoogleIcon" />
                              <button class="btn  " type="submit">
                                Sign up with Google
                              </button>
                            </div>
                            {/* <div class="go_but mt-3">
                              <img src={GitIcon} alt="GitIcon" />
                              <button class="btn  " type="submit">
                                Sign up with GitHub
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </li>
            <li>
              <Button variant="" className="text-light" onClick={handleShowSignIn}>
                Sign In
              </Button>

              <Modal size="lg" show={showSignIn} onHide={handleCloseSignIn}>
                <Modal.Body className="p-0">
                  <div className="hero-container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="sing_img">
                          <img src={singIn} alt="signupImg" />
                        </div>
                      </div>
                      <div className="col-lg-6  col-md-6 col-sm-6">
                        <div className="sing_detail p-3 ps-0">
                          <Form>
                            <h4 className="sign_title py-3 pt-5">
                              Hello Again
                            </h4>
                            <p className="sign_para">
                              Wellcome back you've been missed!
                            </p>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                className="mb-2"
                                type="email"
                                placeholder=""
                              />
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                className="mb-2"
                                type="password"
                                placeholder=""
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-3 d-flex"
                              controlId="formBasicCheckbox"
                            >
                              <Form.Check type="checkbox" label="Remember me" />
                              <Form.Label className="forgot">
                                Forgot password?
                              </Form.Label>
                            </Form.Group>
                            
                            <Button className="sign_but" type="submit">
                            <Link className="text-light" to={'/user/dashboard'}>
                              Sign In
                              {/* <img src={rightArrow} alt="rightArrow"/> */}
                            </Link>

                            </Button>
                          </Form>
                          <div class="s_main">
                            <p>
                              Not a member yet?<span onClick={handleShowSignUp}> Register Now</span>
                            </p>
                            <h5>OR</h5>
                          </div>
                          <div class="s_but">
                            <div class="go_but mt-3">
                              <img src={GoogleIcon} alt="GoogleIcon" />
                              <button class="btn  " type="submit">
                                Sign up with Google
                              </button>
                            </div>
                            {/* <div class="go_but mt-3">
                              <img src={GitIcon} alt="GitIcon" />
                              <button class="btn  " type="submit">
                                Sign up with GitHub
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </li>
            <Link className="text-light me-2" to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
      <div class="hero-container">
        <div class="header main_header">
          <div class="head_set">
            <div class="logo">
              <Link  to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul>
              <Link className="text-dark fw-bold px-3" to={"/massage"}>
                <li>MASSAGE</li>
              </Link>
              <Link className="text-dark fw-bold px-3" to={"/stretch"}>
                <li>STRETCH</li>
              </Link>
              <Link className="text-dark fw-bold px-3" to={"/fitness"}>
                <li>FITNESS AND WEIGHT LOSS PROGRAM</li>
              </Link>
            </ul>
          </div>
          <div class="boking_but">
          <Link to={"/booking"}>
          <button>Book An Appointment</button>
          </Link>
            
          </div>

          <div class=" side_but">
            <button
              class="btn bars_but"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </button>

            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <div id="offcanvasRightLabel"></div>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div class="side_bar">
                  <ul>
                    <Link className="text-dark fw-bold " to={"/massage"}>
                      <li>MASSAGE</li>
                    </Link>
                    <Link className="text-dark fw-bold " to={"/stretch"}>
                      <li>STRETCH</li>
                    </Link>
                    <Link className="text-dark fw-bold " to={"/fitness"}>
                      <li>FITNESS AND WEIGHT LOSS PROGRAM</li>
                    </Link>
                    <Link className="text-dark fw-bold " to={"/business"}>
                      <li>BUSINESS</li>
                    </Link>
                    <Link className="text-dark fw-bold " to={"/membership"}>
                      <li>MEMBERSHIP</li>
                    </Link>
                    <Link className="text-dark fw-bold " to={"/become-a-provider"}>
                      <li>BECOME A PROVIDER</li>
                    </Link>
                    <li>
                      <Button
                        variant=""
                        className="text-dark fw-bold p-0"
                        onClick={handleShowSignUpMobile}
                      >
                        Sign Up
                      </Button>

                      <Modal size="lg" show={showSignUpMobile} onHide={handleCloseSignUpMobile}>
                        <Modal.Body className="p-0">
                          <div className="hero-container">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="sing_img">
                                  <img src={singUp} alt="signupImg" />
                                </div>
                              </div>
                              <div className="col-lg-6  col-md-6 col-sm-6">
                                <div className="sing_detail p-3 ps-0">
                                  <Form>
                                    <h4 className="sign_title py-3 pt-5">
                                      Welcome to Flexiva
                                    </h4>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label>Full Name</Form.Label>
                                      <Form.Control
                                        className="mb-2"
                                        type="text"
                                        placeholder=""
                                      />
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control
                                        className="mb-2"
                                        type="email"
                                        placeholder=""
                                      />
                                      <Form.Label>Password</Form.Label>
                                      <Form.Control
                                        className="mb-2"
                                        type="password"
                                        placeholder=""
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicCheckbox"
                                    >
                                      <Form.Check
                                        type="checkbox"
                                        label="Accept the rules"
                                      />
                                    </Form.Group>
                                    <Button className="sign_but" type="submit">
                                    <Link className="text-light" to={'/signin'}>
                                Create An Account
                            </Link>
                                    </Button>
                                  </Form>
                                  <div class="s_main">
                                    <p>
                                      Already have an account?{" "}
                                      <span> Log in</span>
                                    </p>
                                    <h5>OR</h5>
                                  </div>
                                  <div class="s_but">
                                    <div class="go_but mt-3">
                                      <img src={GoogleIcon} alt="GoogleIcon" />
                                      <button class="btn  " type="submit">
                                        Sign up with Google
                                      </button>
                                    </div>
                                    {/* <div class="go_but mt-3">
                                      <img src={GitIcon} alt="GitIcon" />
                                      <button class="btn  " type="submit">
                                        Sign up with GitHub
                                      </button>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </li>
                    <li>
                      <Button
                        variant=""
                        className="text-dark fw-bold p-0"
                        onClick={handleShowSignInMobile}
                      >
                        Sign In
                      </Button>

                      <Modal size="lg" show={showSignInMobile} onHide={handleCloseSignInMobile}>
                        <Modal.Body className="p-0">
                          <div className="hero-container">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="sing_img">
                                  <img src={singIn} alt="signupImg" />
                                </div>
                              </div>
                              <div className="col-lg-6  col-md-6 col-sm-6">
                                <div className="sing_detail p-3 ps-0">
                                  <Form>
                                    <h4 className="sign_title py-3 pt-5">
                                      Hello Again
                                    </h4>
                                    <p className="sign_para">
                                      Wellcome back you've been missed!
                                    </p>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label>Email address</Form.Label>
                                      <Form.Control
                                        className="mb-2"
                                        type="email"
                                        placeholder=""
                                      />
                                      <Form.Label>Password</Form.Label>
                                      <Form.Control
                                        className="mb-2"
                                        type="password"
                                        placeholder=""
                                      />
                                    </Form.Group>

                                    <Form.Group
                                      className="mb-3 d-flex"
                                      controlId="formBasicCheckbox"
                                    >
                                      <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                      />
                                      <Form.Label className="forgot">
                                        Forgot password?
                                      </Form.Label>
                                    </Form.Group>
                                    <Button className="sign_but" type="submit">
                                      Sign In
                                      {/* <img src={rightArrow} alt="rightArrow"/> */}
                                    </Button>
                                  </Form>
                                  <div class="s_main">
                                    <p>
                                      Not a member yet?
                                      <span> Register Now</span>
                                    </p>
                                    <h5>OR</h5>
                                  </div>
                                  <div class="s_but">
                                    <div class="go_but mt-3">
                                      <img src={GoogleIcon} alt="GoogleIcon" />
                                      <button class="btn  " type="submit">
                                        Sign up with Google
                                      </button>
                                    </div>
                                    {/* <div class="go_but mt-3">
                                      <img src={GitIcon} alt="GitIcon" />
                                      <button class="btn  " type="submit">
                                        Sign up with GitHub
                                      </button>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </li>
                    <Link className="text-dark fw-bold me-2" to={"/contact"}>
                      <li>CONTACT</li>
                    </Link>
                  </ul>
                
                  <div class="boking_butt">
                  <Link to={'/booking'}>
                    <button>Book An Appointment</button>

                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
