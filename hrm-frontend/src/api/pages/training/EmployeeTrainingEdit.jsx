import React, { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EmployeeTrainingService from "../../services/EmployeeTrainingService";
import EmployeeService from "../../services/EmployeeService";
import TrainingService from "../../services/TrainingService";

const EmployeeTrainingEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [record, setRecord] = useState({
    employee_id: "",
    training_id: "",
    status: "",
  });
  const [employees, setEmployees] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchRecord();
    fetchEmployees();
    fetchTrainings();
  }, []);

  const fetchRecord = async () => {
    try {
      const res = await EmployeeTrainingService.get(id);
      setRecord(res.data);
    } catch (error) {
      toast.error("Failed to load record!");
      navigate("/employee-trainings");
    } finally {
      setLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      const res = await EmployeeService.getAll();
      setEmployees(res.data);
    } catch (error) {
      toast.error("Failed to load employees!");
    }
  };

  const fetchTrainings = async () => {
    try {
      const res = await TrainingService.getAll();
      setTrainings(res.data);
    } catch (error) {
      toast.error("Failed to load trainings!");
    }
  };

  const handleChange = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await EmployeeTrainingService.update(id, record);
      toast.success("Record updated successfully!");
      navigate("/employee-trainings");
    } catch (error) {
      toast.error("Failed to update record!");
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
            <h3 className="text-center mb-4">Edit Employee Training</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Employee</Form.Label>
                <Form.Select name="employee_id" value={record.employee_id} onChange={handleChange} required>
                  <option value="">Select Employee</option>
                  {employees.map(emp => (
                    <option key={emp.id} value={emp.id}>{emp.user?.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Training</Form.Label>
                <Form.Select name="training_id" value={record.training_id} onChange={handleChange} required>
                  <option value="">Select Training</option>
                  {trainings.map(t => (
                    <option key={t.id} value={t.id}>{t.title}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select name="status" value={record.status} onChange={handleChange} required>
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="in_progress">In Progress</option>
                </Form.Select>
              </Form.Group>

              <div className="d-flex gap-2">
                <Button variant="secondary" className="w-50" onClick={() => navigate("/employee-trainings")}>
                  Back
                </Button>
                <Button variant="primary" className="w-50" type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Update Record"}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeTrainingEdit;
