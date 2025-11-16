import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../axios";

const SalaryStructureCreate = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    basic_salary: "",
    house_rent: "",
    medical_allowance: "",
    transport_allowance: "",
    other_allowance: ""
  });

  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/salary-structures", form);
      toast.success("Salary structure created successfully!");
      setForm({ employee_id: "", basic_salary: "", house_rent: "", medical_allowance: "", transport_allowance: "", other_allowance: "" });
    } catch (err) {
      toast.error("Failed to create salary structure");
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Create Salary Structure</h3>
      <Form onSubmit={handleSubmit} className="mt-3">
        <Form.Group className="mb-3">
          <Form.Label>Employee</Form.Label>
          <Form.Select value={form.employee_id} onChange={(e) => setForm({ ...form, employee_id: e.target.value })}>
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.user?.name}</option>
            ))}
          </Form.Select>
        </Form.Group>

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

        <Button type="submit" variant="primary">Create</Button>
      </Form>
    </div>
  );
};

export default SalaryStructureCreate;
