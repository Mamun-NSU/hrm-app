import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./salary-structure.api";

const SalaryStructureCreate = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    basic_salary: "",
    house_rent: "",
    medical_allowance: "",
    transport_allowance: "",
    other_allowance: "",
    taxes_deduction: "",
    security_deduction: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/employee/list")
      .then((res) => setEmployees(res.data.data.employees))
      .catch(() => toast.error("Failed to load employees!"));     
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/salary-structure/store", form);
      toast.success("Salary structure created successfully!");
      navigate("/salary-structures");
    } catch (err) {
      console.error(err);

      if (err.response?.data?.errors) {
        const messages = Object.values(err.response.data.errors)
          .flat()
          .join(" ");
        toast.error(messages); 
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message); 
      } else {
        toast.error("Failed to create salary structure!");
      }
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Create Salary Structure</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Employee</Form.Label>
            <Form.Select
              name="employee_id"
              value={form.employee_id}
              onChange={handleChange}
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.user?.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
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
          <Button type="submit" variant="primary">
            Create
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SalaryStructureCreate;
