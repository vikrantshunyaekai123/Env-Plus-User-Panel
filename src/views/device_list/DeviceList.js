import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import '../configure/parameters/ProductDetails.css';

const DeviceList = () => {
  const title = 'Device List';
  const description = 'Ecommerce Discount Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Dashboard</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}
        </Row>
      </div>

      <Row className="mb-3">
        <Col md="5" lg="3" xxl="2" className="mb-1">
          {/* Search Start */}
          <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
            <Form.Control type="text" placeholder="Search" />
            <span className="search-magnifier-icon">
              <CsLineIcons icon="search" />
            </span>
            <span className="search-delete-icon d-none">
              <CsLineIcons icon="close" />
            </span>
          </div>
          {/* Search End */}
        </Col>
      </Row>

      {/* List Header Start */}
      <div className="main-container">
        <div className="abc-container">
          <Row className="g-0 h-100 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
            <Col md="1" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-medium cursor-pointer ">Device Id</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Device Name</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Temprature</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Humadity</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Moisture</div>
            </Col>
            <Col md="1" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Fire</div>
            </Col>

            <Col md="1" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer" style={{ marginLeft: '3.1rem' }}>
                Action
              </div>
            </Col>

            <Col md="1" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer" style={{ marginLeft: '4rem' }}>
                Delete
              </div>
            </Col>
          </Row>
          {/* List Header End */}

          {/* List Items Start */}
          <Card className="mb-2" style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center">101</span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">LevMon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">26 &#8451;</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">26 &#8451;</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate">26 &#8451;</div>
                </Col>

                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate">26 &#8451;</div>
                </Col>

                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '5px 0px' }}>
                    <NavLink to="/edit_device">
                      <span style={{ backgroundColor: 'rgb(93 95 181)', color: 'white', padding: '3px 15px', cursor: 'pointer', borderRadius: '5px' }}>
                        <EditOutlinedIcon style={{ width: '18px' }} />
                      </span>
                    </NavLink>
                    <NavLink to="/device-information">
                      <span style={{ backgroundColor: 'rgb(39 135 56)', color: 'white', padding: '3px 15px', cursor: 'pointer', borderRadius: '5px' }}>
                        <RemoveRedEyeOutlinedIcon style={{ width: '18px' }} />
                      </span>
                      &nbsp;
                    </NavLink>
                  </div>
                </Col>

                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <a href="www.google.com" target="_blank">
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '5px 0px' }}>
                      <span style={{ backgroundColor: 'rgb(191 38 38)', color: 'white', padding: '3px 15px', cursor: 'pointer', borderRadius: '5px' }}>
                        <RestoreFromTrashOutlinedIcon style={{ width: '18px' }} />
                      </span>
                    </div>
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* List Items End */}

      {/* Pagination Start */}
      <div className="d-flex justify-content-center mt-5">
        <Pagination>
          <Pagination.Prev className="shadow" disabled>
            <CsLineIcons icon="chevron-left" />
          </Pagination.Prev>
          <Pagination.Item className="shadow" active>
            1
          </Pagination.Item>
          <Pagination.Item className="shadow">2</Pagination.Item>
          <Pagination.Item className="shadow">3</Pagination.Item>
          <Pagination.Next className="shadow">
            <CsLineIcons icon="chevron-right" />
          </Pagination.Next>
        </Pagination>
      </div>
      {/* Pagination End */}
    </>
  );
};

export default DeviceList;
