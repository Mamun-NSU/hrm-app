import { useEffect, useState } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./leave-type.api";

const LeaveTypeList = () => {
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLeaveTypes();
  }, []);

  const fetchLeaveTypes = async () => {
    try {
      const response = await api.get('leave-type/list');
      setLeaveTypes(response.data.data.leave_types);
    } catch (error) {
      console.error("Error fetching leave types:", error);
      toast.error("Failed to load leave types!");
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id) => navigate(`/leave-types/${id}`);
  const handleEdit = (id) => navigate(`/leave-types/${id}/edit`);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this leave type?")) {
      try {
        await api.delete(`/leave-type/${id}/delete`);
        toast.success("Leave type deleted successfully!");
        fetchLeaveTypes();
      } catch (error) {
        console.error("Delete failed:", error);
        toast.error("Failed to delete leave type!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Leave Types List</h3>
        <Button variant="primary" onClick={() => navigate("/leave-types/create")}>
          + Add Leave Type
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
                <th>Days / Year</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveTypes.length > 0 ? (
                leaveTypes.map((leaveType) => (
                  <tr key={leaveType.id}>
                    <td>{leaveType.id}</td>
                    <td>{leaveType.name}</td>
                    <td>{leaveType.days_per_year}</td>
                    <td>{leaveType.description}</td>
                    <td>{new Date(leaveType.created_at).toLocaleString()}</td>
                    <td>{new Date(leaveType.updated_at).toLocaleString()}</td>
                    <td>
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handleView(leaveType.id)}
                      >
                        View
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(leaveType.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(leaveType.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No leave types found.
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

export default LeaveTypeList;
