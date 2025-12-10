import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Form, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

import api from './designation.api';

const DesignationEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchDesignation();
  }, [id]);

  const fetchDesignation = async () => {
    try {
      const response = await api.get(`/designation/${id}/show`);

      setTitle(response.data.data.designation.title || "");
    } catch (error) {
      console.error("Error fetching designation:", error);
      toast.error("Failed to fetch designation details!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Designation title is required!");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/designation/${id}/update`, { title });

      toast.success("Designation updated successfully!");

      navigate("/designations");
    } catch (error) {
        console.error("Error updating designation:", error);
        const serverMessage =
          error.response?.data?.message ||
          error.response?.data?.errors?.name?.[0] ||
          "Failed to update designation!";
    
          toast.error(serverMessage);
        } finally {
      setSaving(false);
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
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Edit Designation</h3>
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
            disabled={saving}
            type="submit" 
            variant="primary" 
          >
            {saving ? <Spinner animation="border" size="sm" /> : "Update"}
          </Button>

          <Button
            className="ms-2"
            onClick={() => navigate("/designations")}
            variant="secondary" 
          >
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DesignationEdit;
