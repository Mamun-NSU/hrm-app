import { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PerformanceKPIService from "../services/PerformanceKPIService";

const PerformanceKPICreate = () => {
  const [form, setForm] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PerformanceKPIService.create(form);
      toast.success("KPI created successfully!");
      navigate("/performance-kpis");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create KPI!");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Add New KPI</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>KPI Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter KPI name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Enter KPI description"
                />
              </Form.Group>
              <Button type="submit" className="w-100" variant="primary">Create KPI</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerformanceKPICreate;
