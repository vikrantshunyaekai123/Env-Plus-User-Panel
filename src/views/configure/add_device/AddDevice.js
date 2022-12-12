import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Form, Card, Modal } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import moment from 'moment';
import Map from 'views/google_map/Map';

const AddDevice = () => {
  // Popup Code start from here
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Popup Code End from here

  const newdate = moment().format('L');
  const [deviceId, setDeviceID] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [areaName, setareaName] = useState('');
  const [regisdate, setRegisDate] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [error, setError] = useState(false);
  const [reset, setreset] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deviceId.length === 0 || deviceName.length === 0 || areaName.length === 0 || regisdate.length === 0 || latitude.length === 0 || longitude.length) {
      setError(true);
    }
    if (deviceId && deviceName && areaName && regisdate && latitude && longitude) {
      console.log(
        'device id',
        deviceId,
        '\ndevice name',
        deviceName,
        '\narea name',
        areaName,
        '\nregister date',
        regisdate,
        '\nlatitude',
        latitude,
        '\nlongitude',
        longitude
      );
    }
  };

  const title = 'Add Device';

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

      <Row>
        <Col xs="12" className="col-lg order-1 order-lg-0">
          {/* Address Start */}
          <h2 className="small-title">Device Register</h2>
          <Card className="mb-5" style={{ height: '50vh', position: 'relative', top: '4rem', paddingTop: '3rem' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col lg="6">
                    <Form.Label>Device Id</Form.Label>
                    <div>
                      <Form.Control type="text" placeholder="Enter the device id" onChange={(e) => setDeviceID(e.target.value)} />
                    </div>
                    {error && deviceId.length <= 0 ? <label style={{ color: 'red' }}>device id can't be empty</label> : ''}
                  </Col>
                  <Col lg="6">
                    <Form.Label>Unique Device Name</Form.Label>
                    <div>
                      <Form.Control type="text" placeholder="Enter the device name" onChange={(e) => setDeviceName(e.target.value)} />
                    </div>
                    {error && deviceName.length <= 0 ? <label style={{ color: 'red' }}>area device can't be empty</label> : ''}
                  </Col>
                  <Col lg="6">
                    <Form.Label>Area Name</Form.Label>
                    <div>
                      <Form.Control type="text" placeholder="Enter the area name" onChange={(e) => setareaName(e.target.value)} />
                    </div>
                    {error && areaName.length <= 0 ? <label style={{ color: 'red' }}>area name can't be empty</label> : ''}
                  </Col>
                  <Col lg="6">
                    <Form.Label>Register Date</Form.Label>
                    <div>
                      <Form.Control type="text" value={newdate} onChange={(e) => setRegisDate(e.target.value)} disabled />
                      {error && regisdate.length <= 0 ? <label style={{ color: 'red' }}>register date can't be empty</label> : ''}
                    </div>
                  </Col>
                  <Col lg="5">
                    <Form.Label>Latitude</Form.Label>
                    <div>
                      <Form.Control type="text" placeholder="Enter the latitude " onChange={(e) => setLatitude(e.target.value)} />
                    </div>
                    {error && latitude.length <= 0 ? <label style={{ color: 'red' }}>latitude can't be empty</label> : ''}
                  </Col>
                  <Col lg="5">
                    <Form.Label>Longitude</Form.Label>
                    <div>
                      <Form.Control type="text" placeholder="Enter the Longitude " onChange={(e) => setLongitude(e.target.value)} />
                    </div>
                    {error && longitude.length <= 0 ? <label style={{ color: 'red' }}>Longitude can't be empty</label> : ''}
                  </Col>

                  <Col>
                    <Button variant="primary" style={{ position: 'relative', top: '26px' }} onClick={handleShow}>
                      <span>Assign Area</span> <CsLineIcons icon="chevron-right" />
                    </Button>
                    {/* Popup code start from here */}

                    {/* Popup code end from here */}
                  </Col>

                  <Col lg="6" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem' }}>
                    <Button className="btn-icon btn-icon-end" variant="primary" type="reset">
                      Cencel <CsLineIcons icon="chevron-right" />
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                      className="btn-icon btn-icon-end"
                      variant="primary"
                      type="submit"
                      onClick={() => {
                        setreset();
                      }}
                    >
                      Submit
                      <CsLineIcons icon="chevron-right" />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          {/* Address End */}
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Form className="d-flex">
            <div style={{ border: '1px solid #e5e5e5', width: '20.5rem', borderRadius: '5px', padding: '5px' }}>
              <select name="cars" id="cars" style={{ width: '19rem', border: 'none', outline: 'none' }}>
                <option value="select area">Select Area</option>
                <option value="ambala">Ambala</option>
                <option value="bhiwani">Bhiwani</option>
                <option value="gurugram">Gurugram</option>
                <option value="jind ">Jind</option>
                <option value="panipat">Panipat</option>
                <option value="sirsa">Sirsa</option>
                <option value="fatehabad ">Fatehabad</option>
                <option value="sonipat ">Sonipat</option>
                <option value="delhi ">Delhi</option>
              </select>
            </div>
          </Form>
          <Modal.Title>Google Map</Modal.Title>
        </Modal.Header>
        <Map />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cencel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddDevice;
