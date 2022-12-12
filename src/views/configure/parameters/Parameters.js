import { Row, Col, Button, Dropdown, Form, Card, Badge, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './ProductDetails.css';
import Modal from 'react-bootstrap/Modal';

const Parameters = () => {
  // start
  const [temprature, setTemprature] = useState('');
  const [humanity, setHumanity] = useState('');
  const [moisture, setMoisture] = useState('');

  const [error, setError] = useState(false);
  const [reset, setreset] = useState('');

  const handleCard = (e) => {
    e.preventDefault();
    if (temprature.length === 0 || humanity.length === 0 || moisture.length === 0) {
      setError(true);
    }
    if (temprature && humanity && moisture) {
      console.log('temprature', temprature, '\nhumanity', humanity, '\nmoisture', moisture);
    }
  };
  // End

  const [show, setShow] = useState(false);

  const title = 'Parameters';

  const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

  // PopUp Dilog Box Code Start from Here

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)} aria-labelledby="example-custom-modal-styling-title">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Set Parameters</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <div className="form-box"> */}
          <Form onSubmit={handleCard}>
            <div className="form-box">
              {/* One Card */}
              <div className="form-container">
                <div className="cards-container">
                  <div className="card-heading">
                    <h4>Alert % Temprature</h4>
                  </div>
                  <div className="input-text">
                    <input type="text" placeholder="input the desired" className="input-wrapper" onChange={(e) => setTemprature(e.target.value)} />
                  </div>
                  {error && temprature.length <= 0 ? (
                    <label style={{ color: 'red', width: '100%', fontSize: '12px', textAlign: 'center' }}>Temprature can't be empty</label>
                  ) : (
                    ''
                  )}
                  <div className="check-container">
                    <div className="check-boxs">
                      <label htmlFor="vehicle1"> When Rises Above</label>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                    </div>
                    <div className="check-boxs">
                      <label htmlFor="vehicle2"> When Falls Bellow</label>
                      <input type="radio" id="css" name="fav_language" value="CSS" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Card */}
              <div className="form-container">
                <div className="cards-container">
                  <div className="card-heading">
                    <h4>Alert % Humidity</h4>
                  </div>
                  <div className="input-text">
                    <input type="text" placeholder="input the desired" className="input-wrapper" onChange={(e) => setHumanity(e.target.value)} />
                  </div>
                  {error && humanity.length <= 0 ? (
                    <label style={{ color: 'red', width: '100%', fontSize: '12px', textAlign: 'center' }}>Humadity can't be empty</label>
                  ) : (
                    ''
                  )}
                  <div className="check-container">
                    <div className="check-boxs">
                      <label htmlFor="vehicle1"> When Rises Above</label>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                    </div>
                    <div className="check-boxs">
                      <label htmlFor="vehicle2"> When Falls Bellow</label>
                      <input type="radio" id="css" name="fav_language" value="CSS" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Card */}
              <div className="form-container">
                <div className="cards-container">
                  <div className="card-heading">
                    <h4>Alert % Moisture</h4>
                  </div>
                  <div className="input-text">
                    <input type="text" placeholder="input the desired" className="input-wrapper" onChange={(e) => setMoisture(e.target.value)} />
                  </div>
                  {error && moisture.length <= 0 ? (
                    <label style={{ color: 'red', width: '100%', fontSize: '12px', textAlign: 'center' }}>Moisture can't be empty</label>
                  ) : (
                    ''
                  )}
                  <div className="check-container">
                    <div className="check-boxs">
                      <label htmlFor="vehicle1"> When Rises Above</label>
                      <input type="radio" id="html" name="fav_language" value="HTML" />
                    </div>
                    <div className="check-boxs">
                      <label htmlFor="vehicle2"> When Falls Bellow</label>
                      <input type="radio" id="css" name="fav_language" value="CSS" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Col lg="6" style={{ width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                <Button className="btn-icon btn-icon-end" variant="danger" type="reset">
                  Cencel <CsLineIcons icon="chevron-right" />
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  className="btn-icon btn-icon-end"
                  variant="success"
                  type="submit"
                  onClick={() => {
                    setreset();
                  }}
                >
                  Submit
                  <CsLineIcons icon="chevron-right" />
                </Button>
              </Col>
            </div>
          </Form>
          {/* </div> */}
        </Modal.Body>
      </Modal>

      {/* PopUp Dilog Box Code End from Here */}
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

          {/* Top Buttons Start */}
          <Col xs="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none">
              <CsLineIcons icon="sort" />
            </Button>
            <div className="btn-group ms-1 check-all-container">
              <CheckAll
                allItems={allItems}
                selectedItems={selectedItems}
                onToggle={toggleCheckAll}
                inputClassName="form-check"
                className="btn btn-outline-primary btn-custom-control py-0"
              />
              <Dropdown align="end">
                <Dropdown.Toggle className="dropdown-toggle dropdown-toggle-split" variant="outline-primary" />
                <Dropdown.Menu>
                  <Dropdown.Item>Move</Dropdown.Item>
                  <Dropdown.Item>Archive</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          {/* Top Buttons End */}
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

        <Col md="7" lg="9" xxl="10" className="mb-1 text-end">
          {/* PopUp Dilog Box Code Start from Here */}

          <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
            <p style={{ backgroundColor: '#ed6779', color: 'white', padding: '3px 10px', borderRadius: '5px', cursor: 'pointer', marginTop: '1rem' }}>
              <span onClick={() => setShow(true)}>Set Para for Multiple Device</span>
            </p>

            {/* PopUp Dilog Box Code Start from Here */}
            <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Item Count</Tooltip>}>
              <Dropdown.Toggle variant="foreground-alternate" className="shadow sw-13">
                10 Items
              </Dropdown.Toggle>
            </OverlayTrigger>
            <Dropdown.Menu className="shadow dropdown-menu-end">
              <Dropdown.Item href="#">5 Items</Dropdown.Item>
              <Dropdown.Item href="#">10 Items</Dropdown.Item>
              <Dropdown.Item href="#">20 Items</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Length End */}
        </Col>
      </Row>

      {/* List Header Start */}
      <div className="main-container">
        <div className="abc-container">
          <Row className="g-0 h-100 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
            <Col md="1" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-medium cursor-pointer">Device id</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer">Device Name</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer">Alert % of Temp</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer">Alert % of Humanity</div>
            </Col>
            <Col md="1" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer">Alert % of Moist</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer">Date of Register</div>
            </Col>
            <Col md="1" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-medium cursor-pointer">Action</div>
            </Col>
            <Col className="d-flex flex-column pe-1 justify-content-center" style={{ marginLeft: '6rem' }}>
              <div className="text-muted text-medium cursor-pointer">Marks</div>
            </Col>
          </Row>
          {/* List Header End */}

          {/* List Items Start */}
          <Card className={`mb-1 ${selectedItems.includes(1) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(1)} onChange={() => checkItem(1)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(2) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(2)} onChange={() => checkItem(2)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(3) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(3)} onChange={() => checkItem(3)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(4) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(4)} onChange={() => checkItem(4)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(5) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(5)} onChange={() => checkItem(5)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(6) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(6)} onChange={() => checkItem(6)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(7) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(7)} onChange={() => checkItem(7)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(8) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(8)} onChange={() => checkItem(8)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(9) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(9)} onChange={() => checkItem(9)} />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className={`mb-1 ${selectedItems.includes(10) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
              <Row className="g-0 h-100 align-content-center cursor-default" style={{ paddingLeft: '2rem' }}>
                <Col xs="11" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <span className="text-truncate h-100 d-flex align-items-center">101</span>
                </Col>

                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-alternate">Lev Mon</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-alternate">
                    <div className="text-alternate">49&#x2103;</div>
                  </div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">64&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">74&#x2103;</div>
                </Col>
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate">25-11-2022</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-alternate" style={{ width: 'max-content', fontSize: '12px', padding: '3px 10px', marginLeft: '3rem' }}>
                    <NavLink to="/device-information">
                      <span variant="primary" style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid' }}>
                        View
                      </span>
                      &nbsp;
                    </NavLink>

                    <span
                      variant="secondary"
                      style={{ padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', border: '1px solid', marginLeft: '1rem' }}
                      onClick={() => setShow(true)}
                    >
                      Set Parameter
                    </span>
                  </div>
                </Col>

                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(10)} onChange={() => checkItem(10)} />
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
    </>
  );
};

export default Parameters;
