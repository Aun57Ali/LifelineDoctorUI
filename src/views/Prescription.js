import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Prescription() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add Prescription</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                    <label>ID</label>
                      <select class="form-control" id="genderSelect">
                        <option value="">Select ID</option>
                        <option value="male">A</option>
                        <option value="female">B</option>
                        <option value="other">C</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Dosage</label>
                      <Input
                        defaultValue=""
                        placeholder=""
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="3">
                    <FormGroup>
                      <label>Select Start Date & Time</label>
                      <Input defaultValue="" placeholder="Start Date" type="date" />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="3">
                    <FormGroup>
                      <label></label>
                      <select class="form-control" id="genderSelect">
                        <option value="">Select Time Slot</option>
                        <option value="male">9:00 AM</option>
                        <option value="female">10:00 AM</option>
                        <option value="other">Other</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="3">
                    <FormGroup>
                      <label>Select End Date & Time</label>
                      <Input defaultValue="" placeholder="End Date" type="date" />
                    </FormGroup>
                  </Col>
                  <Col className="px-md-1" md="3">
                    <FormGroup>
                      <label></label>
                      <select class="form-control" id="genderSelect">
                        <option value="">Select Time Slot</option>
                        <option value="male">9:00 AM</option>
                        <option value="female">10:00 AM</option>
                        <option value="other">Other</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Schedule Time</label>
                      <select class="form-control" id="genderSelect">
                        <option value="">Select Time</option>
                        <option value="male">9:00 AM</option>
                        <option value="female">10:00 AM</option>
                        <option value="other">Other</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                    <label>Medicine Name</label>
                      <Input
                        defaultValue=""
                        placeholder="Medicine Name"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                <Col className="pr-md-1" md="4">
                    <FormGroup><Link to="/admin/Medicine">
                    <Button className="btn-fill" color="success" type="submit">
                Add Medicine
              </Button></Link>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button className="btn-fill" color="primary" type="submit">
                Save
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
