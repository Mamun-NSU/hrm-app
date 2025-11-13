import React, { useState } from "react";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const DepartmentCreate = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Department name is required!");
      return;
    }
    setLoading(true);
    try {
      await api.post("/departments", { name });
      toast.success("Department created successfully!");
      navigate("/departments");
    } catch (error) {
      console.error("Error creating department:", error);
      toast.error("Failed to create department!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Add Department</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="departmentName">
            <Form.Label>Department Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter department name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Create"}
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            onClick={() => navigate("/departments")}
          >
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DepartmentCreate;
