import React, { useEffect, useState } from "react";
import { Card, Button, Spinner, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axios";
import { toast } from "react-toastify";

const TrainingView = ({ user, isAdmin }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [training, setTraining] = useState(null);

  const loggedInUser = JSON.parse(localStorage.getItem("user")) || {};

  useEffect(() => {
    fetchTraining();
  }, []);

  const fetchTraining = async () => {
    try {
      const res = await api.get(`/training/${id}/show`);
      setTraining(res.data.data.training);
    } catch (error) {
      toast.error("Failed to load training details.");
      navigate("/trainings");
    }
  };

  if (!training) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" /> Loading training details...
      </Container>
    );
  }

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="shadow p-4" style={{ maxWidth: "650px", width: "100%" }}>
        <h3 className="text-center mb-4">Training Details</h3>
        <Row className="mb-2">
          <Col sm={4}><strong>Title:</strong></Col>
          <Col sm={8}>{training.title}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Description:</strong></Col>
          <Col sm={8}>{training.description}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Start Date:</strong></Col>
          <Col sm={8}>{training.start_date}</Col>
        </Row>
        <Row className="mb-4">
          <Col sm={4}><strong>End Date:</strong></Col>
          <Col sm={8}>{training.end_date}</Col>
        </Row>
        <div className="d-flex gap-2">
          <Button
            variant="secondary"
            className={isAdmin ? "w-50" : "w-100"}
            onClick={() => navigate("/trainings")}
          >
            Back
          </Button>
          {isAdmin && (
            <Button
              variant="warning"
              className="w-50"
              onClick={() => navigate(`/trainings/${id}/edit`)}
            >
              Edit
            </Button>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default TrainingView;
