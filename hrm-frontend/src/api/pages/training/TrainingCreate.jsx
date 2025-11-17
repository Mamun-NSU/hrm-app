import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TrainingService from "../../services/TrainingService";

const TrainingCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [training, setTraining] = useState({ title: "", description: "", start_date: "", end_date: "" });

  useEffect(() => { if (id) fetchTraining(id); }, [id]);

  const fetchTraining = async (id) => {
    try { const res = await TrainingService.get(id); setTraining(res.data); }
    catch { toast.error("Failed to fetch training"); }
  };

  const handleChange = e => setTraining({ ...training, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (id) await TrainingService.update(id, training);
      else await TrainingService.create(training);
      toast.success("Saved successfully!");
      navigate("/trainings");
    } catch { toast.error("Failed to save"); }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>{id ? "Edit Training" : "Add Training"}</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3"><Form.Label>Title</Form.Label>
            <Form.Control name="title" value={training.title} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3"><Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="description" value={training.description} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3"><Form.Label>Start Date</Form.Label>
            <Form.Control type="date" name="start_date" value={training.start_date} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3"><Form.Label>End Date</Form.Label>
            <Form.Control type="date" name="end_date" value={training.end_date} onChange={handleChange} required />
          </Form.Group>
          <Button type="submit">{id ? "Update" : "Create"}</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default TrainingCreate;
