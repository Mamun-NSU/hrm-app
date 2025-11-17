import React, { useEffect, useState } from "react";
import { Card, Button, Form, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TrainingService from "../../services/TrainingService";

const TrainingEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [training, setTraining] = useState({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchTraining();
  }, []);

  const fetchTraining = async () => {
    try {
      const res = await TrainingService.get(id);
      setTraining(res.data);
    } catch (error) {
      toast.error("Failed to load training!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setTraining({ ...training, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await TrainingService.update(id, training);
      toast.success("Training updated successfully!");
      navigate("/trainings");
    } catch (error) {
      toast.error("Failed to update training!");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Spinner animation="border" />;

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Edit Training</h3>
        <Button variant="secondary" onClick={() => navigate("/trainings")}>Back</Button>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={training.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={training.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="start_date"
              value={training.start_date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="date"
              name="end_date"
              value={training.end_date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={saving}>
            {saving ? "Saving..." : "Update"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TrainingEdit;
