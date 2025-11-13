import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../axios";
import { toast } from "react-toastify";

const DesignationCreate = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/designations", { title });
      toast.success("Designation created successfully!");
      navigate("/designations");
    } catch (error) {
      console.error("Error creating designation:", error);
      toast.error("Failed to create designation!");
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <h4>Create New Designation</h4>
          <Button variant="secondary" onClick={() => navigate("/designations")}>
            Back
          </Button>
        </div>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Designation Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter designation title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create Designation
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DesignationCreate;
