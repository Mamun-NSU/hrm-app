import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../axios";

const DepartmentEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    try {
      const response = await api.get(`/departments/${id}`);
      setName(response.data.name || "");
    } catch (error) {
      console.error("Error fetching department:", error);
      toast.error("Failed to load department details!");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Department name is required!");
      return;
    }
    setLoading(true);
    try {
      await api.put(`/departments/${id}`, { name });
      toast.success("Department updated successfully!");
      navigate("/departments");
    } catch (error) {
      console.error("Error updating department:", error);
      toast.error("Failed to update department!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Edit Department</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleUpdate}>
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
            {loading ? <Spinner animation="border" size="sm" /> : "Update"}
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

export default DepartmentEdit;
