import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

const notifications = [
  {
    Type: "Patient",
    Date: "28 August 2023, 12:45 PM",
    P_Name: "Mark",
    D_Name: "",
    P_No: "#8382",
  },
  {
    Type: "Appointment",
    Date: "28 October 2023, 10:15 PM",
    P_Name: "Harry",
    D_Name: "Dr Martha",
    P_No: "#93482",
  },
  {
    Type: "Patient",
    Date: "o9 October 2023, 04:22 PM",
    P_Name: "Suzy",
    D_Name: "",
    P_No: "#0242",
  },
];

const Notification = () => {
  const [selectedType, setSelectedType] = useState("Patients");

  const filteredNotifications = notifications.filter(
    (notification) =>
      (selectedType === "Patients" && notification.Type === "Patient") ||
      (selectedType === "Appointments" && notification.Type === "Appointment")
  );

  return (
    <div className="content">
      <Row className="justify-content-end">
        <UncontrolledDropdown className="mx-auto">
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
            <DropdownItem onClick={() => setSelectedType("Patients")}>
              Patients
            </DropdownItem>
            <DropdownItem onClick={() => setSelectedType("Appointments")}>
              Appointments
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Row>

      {/* Rendering notifications */}
      <Row>
        {filteredNotifications.map((notification, index) => (
          <Col key={index} lg="6" md="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <CardTitle tag="h2">
                      {notification.Type === "Patient"
                        ? "New Patient"
                        : "New Appointment"}
                    </CardTitle>
                    <h2>Description</h2>
                    <i className="tim-icons icon-calendar-60" /> Date:{" "}
                    {notification.Date}
                    <p></p>
                    <h4>Patient Name: {notification.P_Name}</h4>
                    {notification.Type === "Patient" && (
                      <h5>Patient No.: {notification.P_No}</h5>
                    )}
                    {notification.Type === "Appointment" && (
                      <>
                        <h4>Doctor Name: {notification.D_Name}</h4>
                        <h5>Patient No.: {notification.P_No}</h5>
                      </>
                    )}
                  </Col>
                </Row>
              </CardHeader>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Notification;
