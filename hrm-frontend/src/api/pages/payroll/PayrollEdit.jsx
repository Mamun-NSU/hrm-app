import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "./payroll.api";

const PayrollEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ month_year: "", gross_salary: "", net_salary: "" });

  useEffect(() => {
    api.get(`/payroll/${id}/show`).then((res) => setForm(res.data.data.payroll)).catch(() => toast.error("Failed to load payroll!"));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/payroll/${id}/update`, form);
      toast.success("Payroll updated successfully!");
      navigate("/payrolls");
    } catch (err) {
      toast.error("Failed to update payroll!");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Edit Payroll</h3>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Month (YYYY-MM)</Form.Label>
          <Form.Control type="month" value={form.month_year} onChange={(e) => setForm({ ...form, month_year: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Gross Salary</Form.Label>
          <Form.Control type="number" value={form.gross_salary} onChange={(e) => setForm({ ...form, gross_salary: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Net Salary</Form.Label>
          <Form.Control type="number" value={form.net_salary} onChange={(e) => setForm({ ...form, net_salary: e.target.value })} />
        </Form.Group>
        <Button type="submit" variant="warning">Update Payroll</Button>
      </Form>
    </div>
  );
};

export default PayrollEdit;
