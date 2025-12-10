import { useEffect, useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from './department.api';

const DepartmentEdit = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDepartment();
  }, []);

  const fetchDepartment = async () => {
    try {
      const response = await api.get(`/department/${id}/show`);

      setName(response.data.data.department.name || "");
    } catch (error) {
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
      await api.put(`/department/${id}/update`, { name });

      toast.success("Department updated successfully!");

      navigate('/departments');
    } catch (error) {
      console.error("Error updating department:", error);
      const serverMessage =
        error.response?.data?.message ||
        error.response?.data?.errors?.name?.[0] ||
        "Failed to update department!";

      toast.error(serverMessage);
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
          <Form.Group 
            className="mb-3" 
            controlId="departmentName"
          >
            <Form.Label>Department Name</Form.Label>

            <Form.Control
              placeholder="Enter department name"
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              value={name}
            />
          </Form.Group>

          <Button 
            disabled={loading}
            type="submit" 
            variant="primary" 
          >
            {loading ? <Spinner animation="border" size="sm" /> : "Update"}
          </Button>

          <Button
            className="ms-2"
            onClick={() => navigate('/departments')}
            variant="secondary"
          >
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DepartmentEdit;
