import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TrainingService from "../../services/TrainingService";

const TrainingView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [training, setTraining] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <Spinner animation="border" />;

  if (!training) return <p className="text-center">Training not found.</p>;

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Training Details</h3>
        <Button variant="secondary" onClick={() => navigate("/trainings")}>Back</Button>
      </Card.Header>
      <Card.Body>
        <p><strong>Title:</strong> {training.title}</p>
        <p><strong>Description:</strong> {training.description}</p>
        <p><strong>Start Date:</strong> {training.start_date}</p>
        <p><strong>End Date:</strong> {training.end_date}</p>
      </Card.Body>
    </Card>
  );
};

export default TrainingView;
