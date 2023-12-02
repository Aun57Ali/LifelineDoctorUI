import React from "react";
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
import doctor1 from "assets/img/1.jpg";
import doctor2 from "assets/img/6.jpg";

export default function ViewPatient() {
  return (
    <div className="content">
      <Row>
        <Col xs="12">
          <Card className="card-chart">
            <CardHeader>
              <Row>
                <Col className="text-left" xs="12">
                  <CardTitle tag="h2">Patients</CardTitle>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <Card className="card-chart">
                    <CardHeader>
                      <Row>
                        <Col className="text-left" sm="2">
                          <CardTitle tag="h3">
                            <img alt="image" width={110} src={doctor1} />
                            <br></br>
                          </CardTitle>
                        </Col>
                        <Col className="text-left" sm="4">
                          <h2>Andrew</h2>
                          <h4>Age: 38</h4>
                          <h4>P.No.: #72110</h4>
                          <i className="tim-icons icon-calendar-60" /> Join Date
                          21 August 2023, 12:45 AM
                        </Col>
                        <Col className="text-left" sm="3">
                          <UncontrolledDropdown>
                            <i className="tim-icons icon-notes" /> Doctor
                            <DropdownToggle
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            ></DropdownToggle>
                            <DropdownMenu
                              aria-labelledby="dropdownMenuLink"
                              right
                            >
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Doctor 1
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Doctor 2
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Doctor 3
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                        <Col className="text-left" sm="3">
                          <UncontrolledDropdown>
                            <i className="tim-icons icon-notes" /> Disease
                            <DropdownToggle
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            ></DropdownToggle>
                            <DropdownMenu
                              aria-labelledby="dropdownMenuLink"
                              right
                            >
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Disease 1
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Disease 2
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Disease 3
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </CardHeader>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <Card className="card-chart">
                    <CardHeader>
                      <Row>
                        <Col className="text-left" sm="2">
                          <CardTitle tag="h3">
                            <img alt="image" width={110} src={doctor2} />
                            <br></br>
                          </CardTitle>
                        </Col>
                        <Col className="text-left" sm="4">
                          <h2>Beth</h2>
                          <h4>Age: 31</h4>
                          <h4>P.No.: #121492</h4>
                          <i className="tim-icons icon-calendar-60" /> Join Date
                          5 March 2023, 05:57 PM
                        </Col>
                        <Col className="text-left" sm="3">
                          <UncontrolledDropdown>
                            <i className="tim-icons icon-notes" /> Doctor
                            <DropdownToggle
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            ></DropdownToggle>
                            <DropdownMenu
                              aria-labelledby="dropdownMenuLink"
                              right
                            >
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Doctor 1
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Doctor 2
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Doctor 3
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                        <Col className="text-left" sm="3">
                          <UncontrolledDropdown>
                            <i className="tim-icons icon-notes" /> Disease
                            <DropdownToggle
                              caret
                              className="btn-icon"
                              color="link"
                              data-toggle="dropdown"
                              type="button"
                            ></DropdownToggle>
                            <DropdownMenu
                              aria-labelledby="dropdownMenuLink"
                              right
                            >
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Disease 1
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Disease 2
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Disease 3
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </Col>
                      </Row>
                    </CardHeader>
                  </Card>
                </Col>
              </Row>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
