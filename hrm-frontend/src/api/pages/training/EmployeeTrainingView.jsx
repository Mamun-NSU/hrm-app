import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeTrainingService from "../../services/EmployeeTrainingService";

const EmployeeTrainingView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employeeTraining, setEmployeeTraining] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployeeTraining();
  }, []);

  const fetchEmployeeTraining = async () => {
    try {
      const res = await EmployeeTrainingService.get(id);
      setEmployeeTraining(res.data);
    } catch (error) {
      toast.error("Failed to load record!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner animation="border" />;

  if (!employeeTraining) return <p className="text-center">Record not found.</p>;

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Employee Training Details</h3>
        <Button variant="secondary" onClick={() => navigate("/employee-trainings")}>Back</Button>
      </Card.Header>
      <Card.Body>
        <p><strong>Employee:</strong> {employeeTraining.employee?.user?.name || "—"}</p>
        <p><strong>Training:</strong> {employeeTraining.training?.title || "—"}</p>
        <p><strong>Status:</strong> {employeeTraining.status}</p>
        <p><strong>Created At:</strong> {employeeTraining.created_at}</p>
        <p><strong>Updated At:</strong> {employeeTraining.updated_at}</p>
      </Card.Body>
    </Card>
  );
};

export default EmployeeTrainingView;
