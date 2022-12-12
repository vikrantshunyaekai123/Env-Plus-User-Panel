import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import VibrationOutlinedIcon from '@mui/icons-material/VibrationOutlined';
import PhonelinkEraseOutlinedIcon from '@mui/icons-material/PhonelinkEraseOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Map from 'views/google_map/Map';

const Dashboard = () => {
  const title = 'Dashboard';
  const description = 'Ecommerce Dashboard Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
          <span className="align-middle text-small ms-1">&nbsp;</span>
        </NavLink>
        <h1 className="mb-0 pb-0 display-4" id="title">
          Dashboard
        </h1>
      </div>
      {/* Title End */}

      {/* Stats Here */}
      <Row className="mb-5 g-2">
        <Col xs="6" md="4" lg="4">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <DesktopWindowsOutlinedIcon style={{ color: '#ED6789', fontSize: '2rem' }} />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate lh-1-25" style={{ fontSize: '0.8rem' }}>
                TOTAL DEVICE
              </div>
              <div className="text-primary cta-4" style={{ fontSize: '1.3rem' }}>
                99
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="6" md="4" lg="4">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <VibrationOutlinedIcon style={{ color: '#ED6789', fontSize: '2rem' }} />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate lh-1-25" style={{ fontSize: '0.8rem' }}>
                ACTIVE DEVICE
              </div>
              <div className="text-primary cta-4" style={{ fontSize: '1.3rem' }}>
                79
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="6" md="4" lg="4">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <PhonelinkEraseOutlinedIcon style={{ color: '#ED6789', fontSize: '2rem' }} />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate lh-1-25" style={{ fontSize: '0.8rem' }}>
                INACTIVE DEVICE
              </div>
              <div className="text-primary cta-4" style={{ fontSize: '1.3rem' }}>
                101
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="6" md="4" lg="4">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <NotificationsActiveOutlinedIcon style={{ color: '#ED6789', fontSize: '2rem' }} />
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate lh-1-25" style={{ fontSize: '0.8rem' }}>
                ALERT IN A DAY
              </div>
              <div className="text-primary cta-4" style={{ fontSize: '1.3rem' }}>
                68
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="6" md="4" lg="4">
          <Card className="h-100 hover-scale-up cursor-pointer">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                <Link to="/" style={{ color: '#7c7c7c' }}>
                  <NotificationsActiveOutlinedIcon style={{ color: '#ED6789', fontSize: '2rem' }} />
                </Link>
              </div>
              <div className="mb-1 d-flex align-items-center text-alternate lh-1-25" style={{ fontSize: '0.8rem' }}>
                ACTIVE ALERT
              </div>
              <div className="text-primary cta-4" style={{ fontSize: '1.3rem' }}>
                68
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Map />
      {/* Stats End */}
    </>
  );
};

export default Dashboard;
