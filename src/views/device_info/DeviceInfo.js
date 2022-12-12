import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import material ui
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LaptopIcon from '@mui/icons-material/Laptop';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddCardIcon from '@mui/icons-material/AddCard';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Row, Col, Button, Card } from 'react-bootstrap';

import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const DeviceInfo = () => {
  const title = 'Device Information';
  const description = 'Ecommerce Customer Detail Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-c  ontainer">
        <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
          <CsLineIcons icon="chevron-left" size="13" />
          <span className="align-middle text-small ms-1">Dashboard</span>
        </NavLink>
        <h1 className="mb-0 pb-0 display-4" id="title">
          {title}
        </h1>
      </div>
      {/* Title End */}

      <Row>
        <Col xl="4">
          <Card className="mb-5">
            <Card.Body className="mb-n5">
              <div className="d-flex align-items-center flex-column mb-5">
                <div className="mb-5 d-flex align-items-center flex-column">
                  <div className="sw-6 sh-6 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl">
                    <div className="text-white">BC</div>
                  </div>
                  <div className="h5 mb-1">LevMon Env Plus</div>
                  <div className="text-muted">
                    <span className="align-middle"> Gurgaon, Haryana </span>
                  </div>
                </div>
                {/* <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                  <Button variant="primary" className="w-100 me-2">
                    Edit
                  </Button>
                  <Button variant="outline-primary" className="w-100 me-2">
                    Status
                  </Button>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div> */}
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                    <div style={{ width: '95%' }}>
                      <NavLink to="edit_device">
                        <Button variant="primary" className="w-100 me-2">
                          Edit
                        </Button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="d-flex flex-row justify-content-between w-100 w-sm-50 w-xl-100">
                    <div style={{ width: '95%' }}>
                      <NavLink to="edit_device">
                        <Button variant="outline-primary" className="w-100 me-2">
                          Status
                        </Button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <AppRegistrationIcon from icon="credit-card" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Registration Date</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">30-11-2022</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <AddCardIcon icon="cart" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Warranty Date</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">30-11-2022</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <BorderColorIcon icon="boxes" className="text-primary" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Order Count</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">17</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>

              <div className="mb-5">
                <p className="text-small text-muted mb-2">Device Details</p>
                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <HowToRegIcon icon="credit-card" className="text-primary" />
                    </div>
                  </Col>

                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Device ID</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">30-11-2022</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <LaptopIcon icon="credit-card" className="text-primary" />
                    </div>
                  </Col>

                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Device Name</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center">LEVMON</div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CompareArrowsIcon from icon="credit-card" className="text-primary" />
                    </div>
                  </Col>

                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Area Name</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center"> Gurgaon, Haryana </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <LocationSearchingIcon from icon="credit-card" className="text-primary" />
                    </div>
                  </Col>

                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Longitude</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center"> 02150..3 </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="g-0 align-items-center mb-2">
                  <Col xs="auto">
                    <div className="border border-primary sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <MyLocationIcon icon="credit-card" className="text-primary" />
                    </div>
                  </Col>

                  <Col className="ps-3">
                    <Row className="g-0">
                      <Col>
                        <div className="sh-5 d-flex align-items-center lh-1-25">Latitude</div>
                      </Col>
                      <Col xs="auto">
                        <div className="sh-5 d-flex align-items-center"> 124.021 </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl="8">
          {/* Status Start */}
          <h2 className="small-title">Device Status</h2>
          <Row className="g-2 mb-5">
            <Col sm="6">
              <Card className="sh-13 sh-lg-15 sh-xl-14">
                <Card.Body className="h-100 py-3 d-flex align-items-center">
                  <Row className="g-0 align-items-center">
                    <Col xs="auto" className="pe-3">
                      <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                        <CsLineIcons icon="tag" className="text-primary" />
                      </div>
                    </Col>
                    <Col style={{ width: '20rem' }}>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'sans-serif', textAlign: 'center' }}>Temperature</div>
                      <div className="text-primary" style={{ textAlign: 'center', fontSize: '1.3rem', paddingTop: '0.7rem' }}>
                        24 &#8451;
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="sh-13 sh-lg-15 sh-xl-14">
                <Card.Body className="h-100 py-3 d-flex align-items-center">
                  <Row className="g-0 align-items-center">
                    <Col xs="auto" className="pe-3">
                      <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                        <CsLineIcons icon="clipboard" className="text-primary" />
                      </div>
                    </Col>

                    <Col style={{ width: '20rem' }}>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'sans-serif', textAlign: 'center' }}>Humidity</div>
                      <div className="text-primary" style={{ textAlign: 'center', fontSize: '1.3rem', paddingTop: '0.7rem' }}>
                        49 &#8451;
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="sh-13 sh-lg-15 sh-xl-14">
                <Card.Body className="h-100 py-3 d-flex align-items-center">
                  <Row className="g-0 align-items-center">
                    <Col xs="auto" className="pe-3">
                      <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                        <CsLineIcons icon="calendar" className="text-primary" />
                      </div>
                    </Col>
                    <Col style={{ width: '20rem' }}>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'sans-serif', textAlign: 'center' }}>Moisture</div>
                      <div className="text-primary" style={{ textAlign: 'center', fontSize: '1.3rem', paddingTop: '0.7rem' }}>
                        23
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="sh-13 sh-lg-15 sh-xl-14">
                <Card.Body className="h-100 py-3 d-flex align-items-center">
                  <Row className="g-0 align-items-center">
                    <Col xs="auto" className="pe-3">
                      <div className="border border-primary sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center">
                        <CsLineIcons icon="shipping" className="text-primary" />
                      </div>
                    </Col>
                    <Col style={{ width: '20rem' }}>
                      <div style={{ fontSize: '1.5rem', fontFamily: 'sans-serif', textAlign: 'center' }}>Fire</div>
                      <div className="text-primary" style={{ textAlign: 'center', fontSize: '1.3rem', paddingTop: '0.7rem' }}>
                        120 &#8451;
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Status End */}

          {/* Recent Orders Start */}

          <div className="d-flex justify-content-between">
            <h2 className="small-title">Recent History</h2>
          </div>

          {/* List Header Start */}
          <Row className="g-0  align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
            <Col lg="2" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-medium cursor-pointer ">ID</div>
            </Col>
            <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">NAME</div>
            </Col>
            <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">LOCATION</div>
            </Col>
            <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">SPENT</div>
            </Col>
            <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">LAST ORDER</div>
            </Col>
            <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">STATUS</div>
            </Col>
          </Row>
          {/* List Header End */}

          {/* List Header End */}
          <div className="mb-5">
            <Card className="mb-2">
              <Card.Body className="sh-16 sh-md-8 py-0">
                <Row className="g-0 h-100 align-content-center" style={{ marginLeft: '1rem' }}>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                    <div className="text-muted text-small d-md-none">Id</div>
                    <NavLink to="/orders/detail" className="text-truncate h-100 d-flex align-items-center">
                      101
                    </NavLink>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Price</div>
                    <div className="text-alternate">
                      <span className="text-medium">Lev Mon</span>
                    </div>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-2">
              <Card.Body className="sh-16 sh-md-8 py-0">
                <Row className="g-0 h-100 align-content-center" style={{ marginLeft: '1rem' }}>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                    <div className="text-muted text-small d-md-none">Id</div>
                    <NavLink to="/orders/detail" className="text-truncate h-100 d-flex align-items-center">
                      102
                    </NavLink>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Price</div>
                    <div className="text-alternate">
                      <span className="text-medium">Lev Mon</span>
                    </div>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-2">
              <Card.Body className="sh-16 sh-md-8 py-0">
                <Row className="g-0 h-100 align-content-center" style={{ marginLeft: '1rem' }}>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                    <div className="text-muted text-small d-md-none">Id</div>
                    <NavLink to="/orders/detail" className="text-truncate h-100 d-flex align-items-center">
                      103
                    </NavLink>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Price</div>
                    <div className="text-alternate">
                      <span className="text-medium">Lev Mon</span>
                    </div>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-2">
              <Card.Body className="sh-16 sh-md-8 py-0">
                <Row className="g-0 h-100 align-content-center" style={{ marginLeft: '1rem' }}>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                    <div className="text-muted text-small d-md-none">Id</div>
                    <NavLink to="/orders/detail" className="text-truncate h-100 d-flex align-items-center">
                      104
                    </NavLink>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Price</div>
                    <div className="text-alternate">
                      <span className="text-medium">Lev Mon</span>
                    </div>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-2">
              <Card.Body className="sh-16 sh-md-8 py-0">
                <Row className="g-0 h-100 align-content-center" style={{ marginLeft: '1rem' }}>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 h-md-100">
                    <div className="text-muted text-small d-md-none">Id</div>
                    <NavLink to="/orders/detail" className="text-truncate h-100 d-flex align-items-center">
                      105
                    </NavLink>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Price</div>
                    <div className="text-alternate">
                      <span className="text-medium">Lev Mon</span>
                    </div>
                  </Col>
                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>

                  <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">24 &#8451; </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
          {/* Recent Orders End */}
        </Col>
      </Row>
    </>
  );
};

export default DeviceInfo;
