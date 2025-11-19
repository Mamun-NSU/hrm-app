import React, { useState, useEffect } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const LeaveTypeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", days_per_year: 0, description: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaveType = async () => {
      try {
        const res = await api.get(`/leave-types/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch leave type");
      } finally {
        setLoading(false);
      }
    };
    fetchLeaveType();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/leave-types/${id}`, form);
      toast.success("Leave type updated successfully!");
      navigate("/leave-types");
    } catch (err) {
      console.error(err);
      if (err.response?.data?.errors) {
        const messages = Object.values(err.response.data.errors).flat();
        messages.forEach((msg) => toast.error(msg));
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Failed to update leave type");
      }
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm p-4">
      <Card.Header>Edit Leave Type</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Days per Year</Form.Label>
            <Form.Control
              type="number"
              name="days_per_year"
              value={form.days_per_year}
              onChange={handleChange}
              min="0"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit">Update</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LeaveTypeEdit;
