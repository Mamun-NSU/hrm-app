import React, { useEffect, useState } from "react";
import { Card, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "./employee.api";
import { toast } from "react-toastify";

const EmployeeDetails = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await api.get(`/employee/${id}/show`);
      setEmployee(response.data.data.employee);
    } catch (error) {
      toast.error("Failed to load employee details.");
      navigate("/employees");
    }
  };

  if (!employee) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" /> Loading employee details...
      </Container>
    );
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="shadow p-4" style={{ maxWidth: "650px", width: "100%" }}>
        <h3 className="text-center mb-4">Employee Details</h3>
        <Row className="mb-2">
          <Col sm={4}><strong>ID:</strong></Col>
          <Col sm={8}>{employee.id}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Name:</strong></Col>
          <Col sm={8}>{employee.user?.name || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Email:</strong></Col>
          <Col sm={8}>{employee.user?.email || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Role:</strong></Col>
          <Col sm={8}>{employee.user?.role?.name || "Not Assigned"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Phone:</strong></Col>
          <Col sm={8}>{employee.phone || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Department:</strong></Col>
          <Col sm={8}>{employee.department?.name || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Designation:</strong></Col>
          <Col sm={8}>{employee.designation?.title || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Employee Code:</strong></Col>
          <Col sm={8}>{employee.employee_code}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Gender:</strong></Col>
          <Col sm={8}>{employee.gender || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Date of Birth:</strong></Col>
          <Col sm={8}>{employee.date_of_birth || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Join Date:</strong></Col>
          <Col sm={8}>{employee.join_date || "N/A"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Status:</strong></Col>
          <Col sm={8}>{employee.employment_status}</Col>
        </Row>
        <Row className="mb-4">
          <Col sm={4}><strong>Salary Base:</strong></Col>
          <Col sm={8}>{employee.salary_base}</Col>
        </Row>

        <div
          className={
            user?.role_id === 1
              ? "d-flex gap-2"
              : "d-flex justify-content-center"
          }
        >
          {user?.role_id === 1 && (
            <Button
              variant="warning"
              className="w-50"
              onClick={() => navigate(`/employees/${employee.id}/edit`)}
            >
              Edit
            </Button>
          )}
          <Button
            variant="secondary"
            className={user?.role_id === 1 ? "w-50" : "w-75"}
            onClick={() => navigate("/employees")}
          >
            Back
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default EmployeeDetails;
