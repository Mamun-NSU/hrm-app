import React, { useEffect, useState } from "react";
import { Table, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./employee.api";

const EmployeeList = ({ user }) => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await api.get("/employee/list");
      setEmployees(response.data.data.employees);
    } catch (error) {
      console.error("Error fetching employees:", error);
      toast.error("Failed to load employees!");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await api.delete(`/employee/${id}/delete`);
        toast.success("Employee deleted successfully!");
        fetchEmployees(); // Refresh the list
      } catch (error) {
        console.error("Error deleting employee:", error);
        toast.error("Failed to delete employee!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Employees List</h3>
        {user?.role_id === 1 && ( <>
             <Button variant="primary" onClick={() => navigate("/employees/create")}>
              + Add Employee
            </Button>
          </>
        )}
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Employment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.user?.name || "N/A"}</td>
                  <td>{emp.user?.email || "N/A"}</td>
                  <td>{emp.user?.role?.name || "N/A"}</td>
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

                    {user?.role_id === 1 && (
                      <>
                        <Button
                          variant="warning"
                          size="sm"
                          className="me-2"
                          onClick={() => navigate(`/employees/${emp.id}/edit`)}>
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(emp.id)}>
                          Delete
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  No employees found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default EmployeeList;
