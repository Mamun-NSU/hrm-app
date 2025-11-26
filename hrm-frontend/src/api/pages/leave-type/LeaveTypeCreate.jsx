import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./leave-type.api";

const LeaveTypeCreate = () => {
  const [form, setForm] = useState({ name: "", days_per_year: 0, description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/leave-type/store', form);
      toast.success("Leave type created successfully!");
      navigate("/leave-types");
    } catch (err) {
      console.error(err);
      if (err.response?.data?.errors) {
        const messages = Object.values(err.response.data.errors).flat();
        messages.forEach((msg) => toast.error(msg));
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Failed to create leave type");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm p-4">
      <Card.Header>Add Leave Type</Card.Header>
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
          <Button type="submit">Create</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LeaveTypeCreate;
