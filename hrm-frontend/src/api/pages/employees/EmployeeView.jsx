import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios"; // your axios instance
import { Card, ListGroup, Spinner } from "react-bootstrap";

const EmployeeView = () => {
  const { id } = useParams(); // get ID from route
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/employees/${id}`)
      .then((res) => {
        setEmployee(res.data); // API returns single employee object
      })
      .catch((err) => {
        console.error("Error fetching employee:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <Card className="mt-4">
      <Card.Header>
        <h4>Employee Details: {employee.employee_code}</h4>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>Name:</strong> {employee.user?.name}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Email:</strong> {employee.user?.email}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Phone:</strong> {employee.phone || "-"}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Gender:</strong> {employee.gender || "-"}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Date of Birth:</strong> {employee.date_of_birth || "-"}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Join Date:</strong> {employee.join_date || "-"}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Employment Status:</strong> {employee.employment_status}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Salary:</strong> {employee.salary_base}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Department:</strong> {employee.department?.name || "-"}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Designation:</strong> {employee.designation?.title || "-"}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Created At:</strong>{" "}
          {new Date(employee.created_at).toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Updated At:</strong>{" "}
          {new Date(employee.updated_at).toLocaleString()}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
