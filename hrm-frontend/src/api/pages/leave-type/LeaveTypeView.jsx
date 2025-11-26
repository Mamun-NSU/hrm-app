import React, { useState, useEffect } from "react";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./leave-type.api";

const LeaveTypeView = () => {
  const { id } = useParams();
  const [leaveType, setLeaveType] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaveType = async () => {
      try {
        const res = await api.get(`/leave-type/${id}/show`);
        setLeaveType(res.data.data.leave_type);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch leave type");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaveType();
  }, [id]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  if (!leaveType)
    return (
      <p className="mt-5 text-center text-danger">Leave type not found.</p>
    );

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">Leave Type Details</h3>
        <p>
          <strong>Name:</strong> {leaveType.name}
        </p>
        <p>
          <strong>Days per Year:</strong> {leaveType.days_per_year}
        </p>
        <p>
          <strong>Description:</strong> {leaveType.description || "—"}
        </p>
        <p>
          <strong>Created At:</strong>{" "}
          {new Date(leaveType.created_at).toLocaleString()}
        </p>
        <p>
          <strong>Updated At:</strong>{" "}
          {new Date(leaveType.updated_at).toLocaleString()}
        </p>
        <Button
          variant="primary"
          className="w-100 mt-3"
          onClick={() => navigate("/leave-types")}
        >
          Back to List
        </Button>
      </Card>
    </Container>
  );
};

export default LeaveTypeView;
