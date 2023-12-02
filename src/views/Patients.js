import React from "react";


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Button,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Patients() {
  return (
    <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Patients</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>DOB</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Admit Date</th>
                      <th>Admit Time</th>
                      <th>Possible Diagnosis</th>
                      <th>Status</th>
                      <th>Prescription</th>
                      <th>Diagnosis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>
                        <p>Albert Ross</p>
                      </td>
                      <td>
                        <p>54</p>
                      </td>
                      <td>
                        <p>05-02-1970</p>
                      </td>
                      <td>
                        <p>0315-2938437</p>
                      </td>
                      <td>
                        <p>aross@gmail.com</p>
                      </td>
                      <td>
                        <p>18-10-2023</p>
                      </td>
                      <td>
                        <p>09:21 PM</p>
                      </td>
                      <td>
                        <p>Chest Infection</p>
                      </td>

                      <td style={{textAlign:'left'}}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2">No</label>
                      </td>
                      <td>
                      <Link to="/admin/Prescription">
                      <button className="btn btn-success">Add</button>
                      </Link>
                      </td>
                      <td>
                        <Link to="/addmed">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <p>Tim Miller</p>
                      </td>
                      <td>
                        <p>43</p>
                      </td>
                      <td>
                        <p>05-02-1980</p>
                      </td>
                      <td>
                        <p>0336-4239892</p>
                      </td>
                      <td>
                        <p>tim67@gmail.com</p>
                      </td>
                      <td>
                        <p>18-10-2023</p>
                      </td>
                      <td>
                        <p>07:47 PM</p>
                      </td>
                      <td>
                        <p>Flu</p>
                      </td>

                      <td style={{textAlign:'left'}}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2">No</label>
                      </td>
                      <td>
                      <Link to="/admin/Prescription">
                      <button className="btn btn-success">Add</button>
                      </Link>
                      </td>
                      <td>
                        <Link to="/addmed">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <p>Jonathan Hill</p>
                      </td>
                      <td>
                        <p>41</p>
                      </td>
                      <td>
                        <p>05-02-1982</p>
                      </td>
                      <td>
                        <p>0315-4383274</p>
                      </td>
                      <td>
                        <p>j87hill@gmail.com</p>
                      </td>
                      <td>
                        <p>17-10-2023</p>
                      </td>
                      <td>
                        <p>02:02 AM</p>
                      </td>
                      <td>
                        <p>Typhoid</p>
                      </td>
                      <td style={{textAlign:'left'}}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2">No</label>
                      </td>
                      <td>
                      <Link to="/admin/Prescription">
                      <button className="btn btn-success">Add</button>
                      </Link>
                      </td>
                      <td>
                        <Link to="/addmed">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <p>Isabell</p>
                      </td>
                      <td>
                        <p>55</p>
                      </td>
                      <td>
                        <p>05-02-1968</p>
                      </td>
                      <td>
                        <p>0305-3822982</p>
                      </td>
                      <td>
                        <p>isa1bell@gmail.com</p>
                      </td>
                      <td>
                        <p>17-10-2023</p>
                      </td>
                      <td>
                        <p>11:29 PM</p>
                      </td>
                      <td>
                        <p>Malaria</p>
                      </td>
                      <td style={{textAlign:'left'}}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2">No</label>
                      </td>
                      <td>
                      <Link to="/admin/Prescription">
                      <button className="btn btn-success">Add</button>
                      </Link>
                      </td>
                      <td>
                        <Link to="/addmed">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <p>Mark Andrew</p>
                      </td>
                      <td>
                        <p>47</p>
                      </td>
                      <td>
                        <p>05-02-1976</p>
                      </td>
                      <td>
                        <p>0333-9892333</p>
                      </td>
                      <td>
                        <p>mark72@gmail.com</p>
                      </td>
                      <td>
                        <p>18-10-2023</p>
                      </td>
                      <td>
                        <p>05:51 PM</p>
                      </td>
                      <td>
                        <p>Chest Infection</p>
                      </td>

                      <td style={{textAlign:'left'}}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2">No</label>
                      </td>
                      
                      <td>
                      <Link to="/admin/Prescription">
                      <button className="btn btn-success">Add</button>
                      </Link>
                      </td>
                      <td>
                        <Link to="/addmed">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <p>Jim Bell</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                      <td>
                        <p>05-02-1973</p>
                      </td>
                      <td>
                        <p>0315-2323989</p>
                      </td>
                      <td>
                        <p>bell9jim@gmail.com</p>
                      </td>
                      <td>
                        <p>18-10-2023</p>
                      </td>
                      <td>
                        <p>01:51 AM</p>
                      </td>
                      <td>
                        <p>Typhoid</p>
                      </td>

                      <td className="wid" style={{textAlign:'left'}}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2">No</label>
                      </td>
                      
                      <td>
                      <Link to="/admin/Prescription">
                      <button className="btn btn-success">Add</button>
                      </Link>
                      </td>
                      <td>
                        <Link to="/addmed">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                    <td>
                        <p>McKenzie</p>
                      </td>
                      <td>
                        <p>28</p>
                      </td>
                      <td>
                        <p>05-08-1990</p>
                      </td>
                      <td>
                        <p>0329-2394893</p>
                      </td>
                      <td>
                        <p>mcken5@gmail.com</p>
                      </td>
                      <td>
                        <p>22-10-2023</p>
                      </td>
                      <td>
                        <p>01:01 AM</p>
                      </td>
                      <td>
                        <p>Skin Allergy</p>
                      </td>

                      <td className="wid" style={{textAlign:'left'}}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1">Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2">No</label>
                      </td>
                      
                      <td>
                      <Link to="/admin/Prescription">
                      <button className="btn btn-success">Add</button>
                      </Link>
                      </td>
                      <td>
                        <Link to="/addmed">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
  )
}
