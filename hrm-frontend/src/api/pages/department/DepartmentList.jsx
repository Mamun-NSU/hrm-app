import { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./department.api";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await api.get("/department/list");
      setDepartments(response.data.data.departments);
    } catch (error) {
      console.error("Error fetching departments:", error);
      toast.error("Failed to load departments!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/departments/${id}/edit`);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      try {
        await api.delete(`/department/${id}/delete`);
        toast.success("Department deleted successfully!");
        fetchDepartments();
      } catch (error) {
        console.error("Delete failed:", error);
        toast.error("Failed to delete department!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Departments List</h3>
        <Button variant="primary" onClick={() => navigate("/departments/create")}>
          + Add Department
        </Button>
      </Card.Header>
      <Card.Body>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Department Name</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.length > 0 ? (
                departments.map((department) => (
                  <tr key={department.id}>
                    <td>{department.id}</td>
                    <td>{department.name}</td>
                    <td>{new Date(department.created_at).toLocaleString()}</td>
                    <td>{new Date(department.updated_at).toLocaleString()}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(department.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(department.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No departments found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default DepartmentList;
