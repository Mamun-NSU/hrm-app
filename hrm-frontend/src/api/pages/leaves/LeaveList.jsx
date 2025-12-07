import { useState, useEffect } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./leave.api";

const LeaveList = ({ user, isAdmin }) => {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    setLoading(true);
    try {
      const response = await api.get('leave-request/list');
      let leaveData = response.data.data.leave_requests || [];

    if (user?.role?.name !== "Admin") {
      leaveData = leaveData.filter(
        (leave) => leave.employee?.user_id === user.id
      );
    }

      setLeaves(leaveData);
    } catch (error) {
      console.error("Failed to fetch leaves:", error);
      toast.error("Failed to load leave requests!");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id) => {
    if (window.confirm("Approve this leave request?")) {
      try {
        await api.put(`/leave-request/${id}/update`, { status: "Approved" });
        toast.success("Leave approved!");
        fetchLeaves(); 
      } catch (error) {
        console.error(error);
        toast.error("Failed to approve leave!");
      }
    }
  };

  const handleReject = async (id) => {
    if (window.confirm("Reject this leave request?")) {
      try {
        await api.put(`/leave-request/${id}/update`, { status: "Rejected" });
        toast.success("Leave rejected!");
        fetchLeaves(); 
      } catch (error) {
        console.error(error);
        toast.error("Failed to reject leave!");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this leave request?")) {
      try {
        await api.delete(`/leave-request/${id}/delete`);
        toast.success("Leave deleted!");
        fetchLeaves(); 
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete leave!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Leave Requests</h3>
        {["Employee", "Manager"].includes(user?.role?.name) && (
          <Link className="btn btn-primary" to="/leaves/create">
            + Apply for Leave
          </Link>
        )}
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
                <th>Employee</th>
                <th>Leave Type</th>
                <th>From</th>
                <th>To</th>
                <th>Reason</th>
                <th>Status</th>
                {isAdmin && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {leaves.length > 0 ? (
                leaves.map((leave) => (
                  <tr key={leave.id}>
                    <td>{leave.id}</td>
                    <td>{leave.employee?.user?.name || "N/A"}</td>
                    <td>{leave.leave_type?.name || "N/A"}</td>
                    <td>{new Date(leave.from_date).toLocaleDateString()}</td>
                    <td>{new Date(leave.to_date).toLocaleDateString()}</td>
                    <td>{leave.reason}</td>
                    <td>{leave.status}</td>
                    {isAdmin && (
                      <td>
                        <Button
                          variant="success"
                          size="sm"
                          className="me-2"
                          onClick={() => handleApprove(leave.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleReject(leave.id)}
                        >
                          Reject
                        </Button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={isAdmin ? 8 : 7} className="text-center">
                    No leave requests found.
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

export default LeaveList;
