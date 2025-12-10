import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeTrainingService from "../services/EmployeeTrainingService";

const EmployeeTrainingView = ({ isAdmin }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeTraining, setEmployeeTraining] = useState(null);
  const [loading, setLoading] = useState(true);
  const loggedInUser = JSON.parse(localStorage.getItem("user")) || {};

  useEffect(() => {
    const fetchEmployeeTraining = async () => {
      try {
        const res = await EmployeeTrainingService.get(id);
        setEmployeeTraining(res.data.data.employee_training);
      } catch (error) {
        toast.error("Failed to load record!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployeeTraining();
  }, [id]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  if (!employeeTraining) return <p className="text-center mt-4">Record not found.</p>;

  return (
    <Container className="mt-4 d-flex justify-content-center">
      <Card className="shadow p-4" style={{ maxWidth: "650px", width: "100%" }}>
        <h3 className="text-center mb-4">Employee Training Details</h3>
        <Row className="mb-2">
          <Col sm={4}><strong>Employee:</strong></Col>
          <Col sm={8}>{employeeTraining.employee?.user?.name || "—"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Training:</strong></Col>
          <Col sm={8}>{employeeTraining.training?.title || "—"}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Status:</strong></Col>
          <Col sm={8}>{employeeTraining.status}</Col>
        </Row>
        <Row className="mb-2">
          <Col sm={4}><strong>Created At:</strong></Col>
          <Col sm={8}>{new Date(employeeTraining.created_at).toLocaleDateString()}</Col>
        </Row>
        <Row className="mb-4">
          <Col sm={4}><strong>Updated At:</strong></Col>
          <Col sm={8}>{new Date(employeeTraining.updated_at).toLocaleDateString()}</Col>
        </Row>
        <div className="d-flex gap-2">
          <Button variant="secondary" className={isAdmin ? "w-50" : "w-100"} onClick={() => navigate("/employee-trainings")}>
            Back
          </Button>
          {isAdmin && (
            <Button variant="warning" className="w-50" onClick={() => navigate(`/employee-trainings/${id}/edit`)}>
              Edit
            </Button>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default EmployeeTrainingView;
