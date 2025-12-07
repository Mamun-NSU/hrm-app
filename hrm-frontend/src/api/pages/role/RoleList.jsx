import { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RoleService from "../../services/RoleService";

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await RoleService.getAll();
      setRoles(response.data.data.roles);
    } catch (error) {
      console.error("Error fetching roles:", error);
      toast.error("Failed to load roles!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/roles/${id}/edit`);
  const handleView = (id) => navigate(`/roles/${id}`);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      try {
        await RoleService.remove(id);
        toast.success("Role deleted successfully!");
        fetchRoles();
      } catch (error) {
        console.error("Delete failed:", error);
        toast.error("Failed to delete role!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Roles List</h3>
        <Button variant="primary" onClick={() => navigate("/roles/create")}>
          + Add Role
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
                <th>Name</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.length > 0 ? (
                roles.map((role) => (
                  <tr key={role.id}>
                    <td>{role.id}</td>
                    <td>{role.name}</td>
                    <td>{role.description || "—"}</td>
                    <td>{new Date(role.created_at).toLocaleString()}</td>
                    <td>{new Date(role.updated_at).toLocaleString()}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleView(role.id)}
                      >
                        View
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(role.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(role.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No roles found.
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

export default RoleList;
