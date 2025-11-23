import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "./designation.api";

const DesignationEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

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
              type="text"
              placeholder="Enter designation title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? <Spinner animation="border" size="sm" /> : "Update"}
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            onClick={() => navigate("/designations")}
          >
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DesignationEdit;
