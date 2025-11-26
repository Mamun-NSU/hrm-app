import React, { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./salary-structure.api";

const SalaryStructureEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    basic_salary: "",
    house_rent: "",
    medical_allowance: "",
    transport_allowance: "",
    other_allowance: "",
    taxes_deduction: "",
    security_deduction: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const res = await api.get(`/salary-structure/${id}/show`);
        const s = res.data.data.salary_structure;
        setForm({
          basic_salary: s.basic_salary ?? "",
          house_rent: s.house_rent ?? "",
          medical_allowance: s.medical_allowance ?? "",
          transport_allowance: s.transport_allowance ?? "",
          other_allowance: s.other_allowance ?? "",
          taxes_deduction: s.taxes_deduction ?? "",
          security_deduction: s.security_deduction ?? "",
        });
      } catch (err) {
        console.error(err);
        toast.error("Failed to load salary structure!");
        navigate("/salary-structures");
      } finally {
        setLoading(false);
      }
    };

    fetchStructure();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put(`/salary-structure/${id}/update`, form);
      toast.success("Salary structure updated successfully!");
      navigate("/salary-structures");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update salary structure!");
    } finally {
      setSaving(false);
    }
  };

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-4">Edit Salary Structure</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Basic Salary</Form.Label>
                <Form.Control
                  type="number"
                  name="basic_salary"
                  value={form.basic_salary}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <h5 className="mt-4">Allowances</h5>
              <Form.Group className="mb-3">
                <Form.Label>House Rent</Form.Label>
                <Form.Control
                  type="number"
                  name="house_rent"
                  value={form.house_rent}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Medical Allowance</Form.Label>
                <Form.Control
                  type="number"
                  name="medical_allowance"
                  value={form.medical_allowance}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Transport Allowance</Form.Label>
                <Form.Control
                  type="number"
                  name="transport_allowance"
                  value={form.transport_allowance}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Other Allowance</Form.Label>
                <Form.Control
                  type="number"
                  name="other_allowance"
                  value={form.other_allowance}
                  onChange={handleChange}
                />
              </Form.Group>
              <h5 className="mt-4">Deductions</h5>
              <Form.Group className="mb-3">
                <Form.Label>Taxes Deduction</Form.Label>
                <Form.Control
                  type="number"
                  name="taxes_deduction"
                  value={form.taxes_deduction}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Security Deduction</Form.Label>
                <Form.Control
                  type="number"
                  name="security_deduction"
                  value={form.security_deduction}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-flex gap-2">
                <Button variant="secondary" className="w-50" onClick={() => navigate("/salary-structures")}>
                  Back
                </Button>
                <Button variant="primary" className="w-50" type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Update Salary Structure"}
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SalaryStructureEdit;
