import { useState, useEffect } from "react";
import { Card, Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PerformanceEvaluationService from "../../services/PerformanceEvaluationService";
import EmployeeService from "../../services/EmployeeService";
import PerformanceKPIService from "../../services/PerformanceKPIService";

const PerformanceEvaluationCreate = () => {
  const [form, setForm] = useState({
    employee_id: "",
    kpi_id: "",
    score: "",
    remarks: "",
    evaluation_date: "",
    evaluated_by: "",
  });
  const [employees, setEmployees] = useState([]);
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [empRes, kpiRes] = await Promise.all([
          EmployeeService.getAll(),
          PerformanceKPIService.getAll(),
        ]);
        setEmployees(empRes.data.data.employees);
        setKpis(kpiRes.data.data.kpis);
      } catch (error) {
        toast.error("Failed to load employees or KPIs!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PerformanceEvaluationService.create(form);
      toast.success("Evaluation created successfully!");
      navigate("/performance-evaluations");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create evaluation!");
    }
  };

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Add Performance Evaluation</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Employee</Form.Label>
                <Form.Select name="employee_id" value={form.employee_id} onChange={handleChange} required>
                  <option value="">Select Employee</option>
                  {employees.map(employee => (
                    <option key={employee.id} value={employee.id}>{employee.user?.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>KPI</Form.Label>
                <Form.Select name="kpi_id" value={form.kpi_id} onChange={handleChange} required>
                  <option value="">Select KPI</option>
                  {kpis.map(kpi => (
                    <option key={kpi.id} value={kpi.id}>{kpi.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="number"
                  name="score"
                  value={form.score}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="remarks"
                  value={form.remarks}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Evaluation Date</Form.Label>
                <Form.Control
                  type="date"
                  name="evaluation_date"
                  value={form.evaluation_date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Evaluated By</Form.Label>
                <Form.Control
                  type="text"
                  name="evaluated_by"
                  value={form.evaluated_by}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100" variant="primary">Create Evaluation</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerformanceEvaluationCreate;
