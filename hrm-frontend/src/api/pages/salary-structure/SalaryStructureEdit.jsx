import React, { useEffect, useState } from "react";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

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

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const res = await api.get(`/salary-structures/${id}`);
        const s = res.data.data;

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
      } finally {
        setLoading(false);
      }
    };

    fetchStructure();
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/salary-structures/${id}`, form);
      toast.success("Salary structure updated successfully!");
      navigate("/salary-structures");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update salary structure!");
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Edit Salary Structure</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {/* Basic Salary */}
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

          {/* Allowances */}
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

          {/* Deductions */}
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

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SalaryStructureEdit;
