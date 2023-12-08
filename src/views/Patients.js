import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  CardFooter,
} from "reactstrap";
import { Link } from "react-router-dom";

const samplePatientsData = [
  {
    P_Name: "Albert Ross",
    P_DOB: "02-10-1969",
    P_Mobile: "0315-2938437",
    P_Email: "aross@gmail.com",
    P_Date: "18-10-2023",
    P_Time: "09:30 PM",
    P_Reason: "Fever",
  },
  {
    P_Name: "Tim Miller",
    P_DOB: "05-02-1980",
    P_Mobile: "0336-4239892",
    P_Email: "tim67@gmail.com",
    P_Date: "18-10-2023",
    P_Time: "07:47 PM",
    P_Reason: "Flu",
  },
  {
    P_Name: "Albert Ross",
    P_DOB: "02-10-1969",
    P_Mobile: "0315-2938437",
    P_Email: "aross@gmail.com",
    P_Date: "18-10-2023",
    P_Time: "09:30 PM",
    P_Reason: "Fever",
  },
  {
    P_Name: "Albert Ross",
    P_DOB: "02-10-1969",
    P_Mobile: "0315-2938437",
    P_Email: "aross@gmail.com",
    P_Date: "18-10-2023",
    P_Time: "09:30 PM",
    P_Reason: "Fever",
  },
  {
    P_Name: "Albert Ross",
    P_DOB: "02-10-1969",
    P_Mobile: "0315-2938437",
    P_Email: "aross@gmail.com",
    P_Date: "18-10-2023",
    P_Time: "09:30 PM",
    P_Reason: "Fever",
  },
  {
    P_Name: "Albert Ross",
    P_DOB: "02-10-1969",
    P_Mobile: "0315-2938437",
    P_Email: "aross@gmail.com",
    P_Date: "18-10-2023",
    P_Time: "09:30 PM",
    P_Reason: "Fever",
  },
  {
    P_Name: "Albert Ross",
    P_DOB: "02-10-1969",
    P_Mobile: "0315-2938437",
    P_Email: "aross@gmail.com",
    P_Date: "18-10-2023",
    P_Time: "09:30 PM",
    P_Reason: "Fever",
  },
  
  
];

const ROWS_PER_PAGE_OPTIONS = [5, 10, 15];

const Patients = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPatient = currentPage * rowsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - rowsPerPage;
  const currentPatients = samplePatientsData.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
                    <th>DOB</th>
                    <th>Contact</th>
                    <th>Email</th>
                    <th>Admit Date</th>
                    <th>Admit Time</th>
                    <th>Possible Diagnosis</th>
                    <th>Status</th>
                    <th>Prescription</th>
                    <th>Medicine</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Rendering table rows based on sample data */}
                  {currentPatients.map((patient, index) => (
                    <tr key={index}>
                      <td>
                        <p>{patient.P_Name}</p>
                      </td>
                      <td>
                        <p>{patient.P_DOB}</p>
                      </td>
                      <td>
                        <p>{patient.P_Mobile}</p>
                      </td>
                      <td>
                        <p>{patient.P_Email}</p>
                      </td>
                      <td>
                        <p>{patient.P_Date}</p>
                      </td>
                      <td>
                        <p>{patient.P_Time}</p>
                      </td>
                      <td>
                        <p>{patient.P_Reason}</p>
                      </td>
                      <td style={{ textAlign: "left" }}>
                        <input
                          type="radio"
                          id="attend1"
                          name="attend1"
                          value="Attend"
                        />
                        <label htmlFor="attend1" style={{marginLeft:'10px'}}>Yes</label>
                        <br />
                        <input
                          type="radio"
                          id="nattend2"
                          name="attend1"
                          value="nAttend"
                        />
                        <label htmlFor="nattend2" style={{marginLeft:'10px'}}>No</label>
                      </td>
                      <td>
                        <Link to="/admin/Prescription">
                          <button className="btn btn-success">Add</button>
                        </Link>
                      </td>
                      <td>
                        <Link to="/admin/Medicine">
                          <button className="btn btn-warning">Add</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
            <CardFooter>
              <Row>
                <Col className="pr-md-1" md="3">
                  <span>Rows Per Page:</span>
                  <select
                    className="form-control"
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                  >
                    {ROWS_PER_PAGE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col md="6" className="d-flex justify-content-center">
                  <Pagination style={{ marginTop: "40px" }}>
                    {Array.from(
                      {
                        length: Math.ceil(
                          samplePatientsData.length / rowsPerPage
                        ),
                      },
                      (_, i) => i + 1
                    ).map((number) => (
                      <PaginationItem
                        key={number}
                        active={number === currentPage}
                      >
                        <PaginationLink
                          onClick={() => paginate(number)}
                          href="#"
                        >
                          {number}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </Pagination>
                </Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Patients;
