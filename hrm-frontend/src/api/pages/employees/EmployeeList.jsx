import React, { useEffect, useState } from "react";
import { Table, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../axios";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await api.get("/employees");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <h3>Employees List</h3>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>User</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Employment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.user?.name || emp.name}</td>
                <td>{emp.user?.email || emp.email}</td>
                <td>{emp.user?.name || "N/A"}</td>
                <td>{emp.department?.name || "N/A"}</td>
                <td>{emp.designation?.title || "N/A"}</td>
                <td>{emp.salary_base}</td>
                <td>{emp.employment_status}</td>
                <td>
                  <Button
                    variant="info"
                    size="sm"
                    className="me-2"
                    onClick={() => navigate(`/employees/${emp.id}`)}
                  >
                    Details
                  </Button>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => navigate(`/employees/${emp.id}/edit`)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default EmployeeList;


