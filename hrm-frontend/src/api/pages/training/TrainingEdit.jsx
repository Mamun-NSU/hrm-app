import React, { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
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
      navigate("/trainings");
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

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-4">Edit Training</h3>
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

              <div className="d-flex gap-2">
                <Button variant="secondary" className="w-50" onClick={() => navigate("/trainings")}>
                  Back
                </Button>
                <Button variant="primary" className="w-50" type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Update Training"}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TrainingEdit;
