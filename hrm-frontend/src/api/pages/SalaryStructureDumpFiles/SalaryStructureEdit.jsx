import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axios";

const SalaryStructureEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    basic_salary: "",
    house_rent: "",
    medical_allowance: "",
    transport_allowance: "",
    other_allowance: ""
  });

  useEffect(() => {
    api.get(`/salary-structures/${id}`).then((res) => setForm(res.data.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/salary-structures/${id}`, form);
      toast.success("Salary structure updated successfully!");
      navigate("/salary-structures");
    } catch (err) {
      toast.error("Failed to update salary structure");
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Edit Salary Structure</h3>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Basic Salary</Form.Label>
          <Form.Control type="number" value={form.basic_salary} onChange={(e) => setForm({ ...form, basic_salary: e.target.value })} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>House Rent</Form.Label>
          <Form.Control type="number" value={form.house_rent} onChange={(e) => setForm({ ...form, house_rent: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Medical Allowance</Form.Label>
          <Form.Control type="number" value={form.medical_allowance} onChange={(e) => setForm({ ...form, medical_allowance: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Transport Allowance</Form.Label>
          <Form.Control type="number" value={form.transport_allowance} onChange={(e) => setForm({ ...form, transport_allowance: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Other Allowance</Form.Label>
          <Form.Control type="number" value={form.other_allowance} onChange={(e) => setForm({ ...form, other_allowance: e.target.value })} />
        </Form.Group>

        <Button type="submit" variant="primary">Update</Button>
      </Form>
    </div>
  );
};

export default SalaryStructureEdit;
