import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

import moment from 'moment';

const EditPage = () => {
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

  const title = 'Edit Device';

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
          <Card className="mb-5" style={{ height: '50vh', position: 'relative', top: '4rem', paddingTop: '3rem' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col lg="6">
                    <Form.Label>Device Id</Form.Label>
                    <div>
                      <Form.Control type="text" placeholder="00001" onChange={(e) => setDeviceID(e.target.value)} disabled />
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
                    <Button variant="primary" style={{ position: 'relative', top: '26px' }}>
                      <span>Assign Area</span> <CsLineIcons icon="chevron-right" />
                    </Button>
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

                  {/* <Col lg="6">
                        <Form.Label>Unique Device Name</Form.Label>
                        <Form.Control type="text" />
                      </Col>
                      <Col lg="6">
                        <Form.Label>Area Name</Form.Label>
                        <Form.Control type="text" />
                      </Col>
                      <Col lg="6">
                        <Form.Label>Register Date</Form.Label>
                        <Form.Control type="text" placeholder="01-12-2022" disabled />
                      </Col>
                      <Col lg="5" md="4" xs="4">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control type="text" />
                      </Col>
    
                      <Col lg="5" md="4" xs="4">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control type="text" />
                      </Col>
    
                      <Col>
                        <Button variant="primary" style={{ position: 'relative', top: '26px' }}>
                          <span>Assign Area</span> <CsLineIcons icon="chevron-right" />
                        </Button>
                      </Col> */}
                  {/* <Col lg="6" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '6rem' }}>
                        <Button className="btn-icon btn-icon-end" variant="primary">
                          <span>Cencel</span> <CsLineIcons icon="chevron-right" />
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button className="btn-icon btn-icon-end" variant="primary">
                          <span>Submit</span> <CsLineIcons icon="chevron-right" />
                        </Button>
                      </Col> */}
                </Row>
              </Form>
            </Card.Body>
          </Card>
          {/* Address End */}
        </Col>
      </Row>
    </>
  );
};

export default EditPage;
