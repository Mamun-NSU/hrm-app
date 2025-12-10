import { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./employee.api";

const EmployeeList = ({ isAdmin }) => {
  const [employees, setEmployees] = useState([]);
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
    fetchPayrolls();
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

  const fetchPayrolls = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const response = await api.get("/payroll/list", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const allPayrolls = response.data.data.payrolls || [];
      setPayrolls(allPayrolls);
    } catch (error) {
      console.error("Failed to fetch payrolls:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await api.delete(`/employee/${id}/delete`);
        toast.success("Employee deleted successfully!");
        fetchEmployees();
      } catch (error) {
        console.error("Error deleting employee:", error);
        toast.error("Failed to delete employee!");
      }
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" /> Loading employees...
      </div>
    );
  }

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Employees List</h3>
        {isAdmin && (
          <Button
            variant="primary"
            onClick={() => navigate("/employees/create")}
          >
            + Add Employee
          </Button>
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
              employees.map((employee) => {
                const latestPayroll = payrolls
                  .filter((payroll) => payroll.employee?.id === employee.id)
                  .sort(
                    (a, b) =>
                      new Date(b.generated_at) - new Date(a.generated_at)
                  )[0];

                return (
                  <tr key={employee.id}>
                    <td>{employee.employee_code}</td>
                    <td>{employee.user?.name || "N/A"}</td>
                    <td>{employee.user?.email || "N/A"}</td>
                    <td>{employee.user?.role?.name || "N/A"}</td>
                    <td>{employee.department?.name || "N/A"}</td>
                    <td>{employee.designation?.title || "N/A"}</td>
                    <td>{latestPayroll ? latestPayroll.gross_salary : employee.salary_base}</td>
                    <td>{employee.employment_status}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => navigate(`/employees/${employee.id}`)}
                      >
                        Details
                      </Button>
                      {isAdmin && (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() =>
                              navigate(`/employees/${employee.id}/edit`)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(employee.id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })
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
