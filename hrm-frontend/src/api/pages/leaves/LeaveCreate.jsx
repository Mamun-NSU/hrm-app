import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "./leave.api";

const LeaveCreate = () => {
  const navigate = useNavigate();

  const [leaveTypes, setLeaveTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    leave_type_id: "",
    from_date: "",
    to_date: "",
    reason: "",
  });

  useEffect(() => {
    const fetchLeaveTypes = async () => {
      try {
        const response = await api.get('leave-type/list');
        setLeaveTypes(response.data.data.leave_types);
      } catch (error) {
        console.error("Failed to fetch leave types:", error);
        toast.error("Failed to load leave types!");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaveTypes();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.leave_type_id || !form.from_date || !form.to_date || !form.reason) {
      toast.error("All fields are required!");
      return;
    }

    setSubmitting(true);

    try {
      await api.post('/leave-request/store', {
        ...form,
        leave_type_id: parseInt(form.leave_type_id),
      });
      toast.success("Leave request submitted successfully!");
      navigate("/leaves");
    } catch (error) {
      console.error("Submit failed:", error);
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        Object.values(errors).forEach((errArray) => {
          errArray.forEach((msg) => toast.error(msg));
        });
      } else {
        toast.error("Failed to submit leave request!");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Apply for Leave</h2>
      <Card className="p-4 shadow-sm">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Leave Type</Form.Label>
            <Form.Select
              name="leave_type_id"
              value={form.leave_type_id}
              onChange={handleChange}
            >
              <option value="">Select Leave Type</option>
              {leaveTypes.map((lt) => (
                <option key={lt.id} value={lt.id}>
                  {lt.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>From Date</Form.Label>
            <Form.Control
              type="date"
              name="from_date"
              value={form.from_date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>To Date</Form.Label>
            <Form.Control
              type="date"
              name="to_date"
              value={form.to_date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Reason</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="reason"
              value={form.reason}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Request"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LeaveCreate;
