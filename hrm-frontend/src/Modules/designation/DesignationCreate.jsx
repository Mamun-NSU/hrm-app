import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from './designation.api';

const DesignationCreate = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/designation/store', { title });

      toast.success("Designation created successfully!");

      navigate('/designations');
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

          <Button 
            variant="secondary" 
            onClick={() => navigate("/designations")}
          >
            Back
          </Button>
        </div>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Designation Title</Form.Label>
            
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter designation title"
              required
              type="text"
              value={title}
            />
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit"
          >
            Create Designation
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DesignationCreate;
