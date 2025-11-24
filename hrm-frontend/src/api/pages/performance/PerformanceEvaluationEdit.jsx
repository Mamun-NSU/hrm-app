import React, { useEffect, useState } from "react";
import { Card, Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PerformanceEvaluationService from "../../services/PerformanceEvaluationService";
import EmployeeService from "../../services/EmployeeService";
import PerformanceKPIService from "../../services/PerformanceKPIService";

const PerformanceEvaluationEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [empRes, kpiRes, evalRes] = await Promise.all([
          EmployeeService.getAll(),
          PerformanceKPIService.getAll(),
          PerformanceEvaluationService.get(id),
        ]);
        setEmployees(empRes.data.data.employees);
        setKpis(kpiRes.data.data.kpis);
        const data = evalRes.data.data.evaluation;
        console.log("Data in PerformanceEvaluationEdit: ");
        console.log(data);
        setForm({
          employee_id: data.employee_id,
          kpi_id: data.kpi_id,
          score: data.score,
          remarks: data.remarks,
          evaluation_date: data.evaluation_date,
          evaluated_by: data.evaluated_by,
        });
      } catch (error) {
        toast.error("Failed to load data!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await PerformanceEvaluationService.update(id, form);
      toast.success("Evaluation updated successfully!");
      navigate("/performance-evaluations");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update evaluation!");
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
            <h2 className="text-center mb-4">Edit Performance Evaluation</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Employee</Form.Label>
                <Form.Select name="employee_id" value={form.employee_id} onChange={handleChange} required>
                  <option value="">Select Employee</option>
                  {employees.map(emp => (
                    <option key={emp.id} value={emp.id}>{emp.user?.name}</option>
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

              <div className="d-flex justify-content-between">
                <Button type="submit" variant="primary" disabled={saving}>
                  {saving ? <Spinner animation="border" size="sm" /> : "Update Performance"}
                </Button>
                <Button variant="secondary" onClick={() => navigate("/performance-evaluations")}>
                  Back
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PerformanceEvaluationEdit;
