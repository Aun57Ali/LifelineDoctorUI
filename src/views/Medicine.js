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

export default function Medicine() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">Add Medicine</h5>
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
                      <label>Disease</label>
                      <Input defaultValue="" placeholder="" type="text" />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="3">
                    <FormGroup>
                      <label>Select Date & Time</label>
                      <Input
                        defaultValue=""
                        placeholder="Start Date"
                        type="date"
                      />
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
                  <Col className="pr-md-1" md="4">
                    <FormGroup><Link to="/admin/Prescription">
                      <Button
                        className="btn-fill"
                        color="success"
                        type="submit"
                      >
                        Add Prescription
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
  );
}
