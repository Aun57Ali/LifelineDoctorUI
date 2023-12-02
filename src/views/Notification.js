import React from "react";
import doctor1 from "assets/img/1.jpg";
import doctor2 from "assets/img/6.jpg";
import doctor3 from "assets/img/8.jpg";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Row,
  Col,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Notification() {
  return (
    <div className="content">
      <Row className="justify-content-end">
        <UncontrolledDropdown className="ml-auto">
          <DropdownToggle
            caret
            className="btn-icon"
            color="link"
            data-toggle="dropdown"
            type="button"
          >
            <i className="tim-icons icon-components" />
          </DropdownToggle>
          <DropdownMenu aria-labelledby="dropdownMenuLink" right>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              Appointments
            </DropdownItem>
            <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
              Patients
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Row>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col lg="6" md="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h2">New Patient</CardTitle>
                  <h2>Description</h2>
                  <i className="tim-icons icon-calendar-60" /> Join Date: 21
                  August 2023, 12:45 AM<p></p>
                  <h4>Patient Name: Mark</h4>
                  <h5>Patient No.: #29821</h5>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="6" md="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" sm="6">
                  <CardTitle tag="h2">New Patient</CardTitle>
                  <h2>Description</h2>
                  <i className="tim-icons icon-calendar-60" /> Join Date: 25
                  August 2023, 12:45 AM<p></p>
                  <h4>Patient Name: Kane</h4>
                  <h5>Patient No.: #39421</h5>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="6" md="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
              <Col className="text-left" sm="6">
                  <CardTitle tag="h2">New Appointment</CardTitle>
                  <h2>Description</h2>
                  <i className="tim-icons icon-calendar-60" /> Date: 29 October 2023, 12:45 PM<p></p>
                  <h4>Patient Name: Harry</h4>
                  <h4>Doctor Name: Dr. Martha Lazis</h4>
                  <h5>Patient No.: #39421</h5>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="6" md="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
              <Col className="text-left" sm="6">
                  <CardTitle tag="h2">New Appointment</CardTitle>
                  <h2>Description</h2>
                  <i className="tim-icons icon-calendar-60" /> Date: 30 October 2023, 02:45 PM<p></p>
                  <h4>Patient Name: Katherine</h4>
                  <h4>Doctor Name: Dr. Mark Andrew</h4>
                  <h5>Patient No.: #23948</h5>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
