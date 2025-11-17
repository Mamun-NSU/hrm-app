import React, { useState, useEffect } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const LeaveList = ({ user }) => {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);
  const [loading, setLoading] = useState(true);

  // Debug log for user role
  console.log("=== LEAVE LIST USER DEBUG START ===");
  console.log("User object:", user);
  console.log("User role_id:", user?.role_id);
  console.log("=== LEAVE LIST USER DEBUG END ===");

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    setLoading(true);
    try {
      const response = await api.get("/leaves");
      let leaveData = response.data;

      // If Employee, filter only their own leaves
      if (user?.role_id === 3) {
        leaveData = leaveData.filter(
          (leave) => leave.employee.user_id === user.id
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
        await api.put(`/leaves/${id}`, { status: "Approved" });
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
        await api.put(`/leaves/${id}`, { status: "Rejected" });
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
        await api.delete(`/leaves/${id}`);
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

        {/* Show apply button for employees and other role with (role_id = 2,3,4) */}
        {[2, 3, 4].includes(user?.role_id) && (
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
            {user?.role_id === 1 && <th>Actions</th>}
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
                
                {/* Actions only for Admin */}
                {user?.role_id === 1 && (
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
              <td colSpan={user?.role_id === 1 ? 8 : 7} className="text-center">
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
