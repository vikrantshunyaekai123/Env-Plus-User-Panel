import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Pagination, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';
import '../configure/parameters/ProductDetails.css';

const Discount = () => {
  const title = 'Alert History';

  // Add to mark code start from here
  const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [selectedItems, setSelectedItems] = useState([]);
  const checkItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const toggleCheckAll = (allSelect) => {
    if (allSelect) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };

  return (
    <>
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
          <div
            style={{
              display: 'flex',
              width: '100%',
              maxWidth: '92%',
              margin: 'auto',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div md="2" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-medium cursor-pointer ">Device Id</div>
            </div>
            <div md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Device Name</div>
            </div>
            <div md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Temprature</div>
            </div>
            <div md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Humadity</div>
            </div>
            <div md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Moisture</div>
            </div>
            <div md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer ">Alert of Fire</div>
            </div>
          </div>
          {/* List Header End */}

          {/* List Items Start */}
          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {/*
          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
           <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`} style={{ marginLeft: '1rem' }}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="p-0 text-truncate h-100 d-flex align-items-center" style={{ marginLeft: '1.6rem' }}>
                    101
                  </span>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate" style={{ marginLeft: '2rem' }}>
                    LevMon
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate" style={{ marginLeft: '4rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ marginLeft: '6rem' }}>
                    26 &#8451;
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginLeft: '8rem' }}>
                    26 &#8451;
                  </div>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
                  <div className="text-alternate" style={{ marginRight: '3.8rem', textAlign: 'end' }}>
                    26 &#8451;
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card> */}
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

export default Discount;
