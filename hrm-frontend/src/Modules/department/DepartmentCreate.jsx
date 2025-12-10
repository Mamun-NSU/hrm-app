import { useState } from 'react';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from './department.api';

const DepartmentCreate = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Department name is required!");
      return;
    }
    setLoading(true);
    try {
      await api.post('/department/store', { name });

      toast.success("Department created successfully!");
      
      navigate('/departments');
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
            {loading ? <Spinner animation="border" size="sm" /> : "Create"}
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

export default DepartmentCreate;
