import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const SalaryStructureCreate = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ employee_id: "", basic_salary: "" });
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/employees")
      .then((res) => setEmployees(res.data))
      .catch(() => toast.error("Failed to load employees!"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/salary-structures", form);
      toast.success("Salary structure created successfully!");
      navigate("/salary-structures");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create salary structure!");
    }
  };

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header><h3>Create Salary Structure</h3></Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Employee</Form.Label>
            <Form.Select
              value={form.employee_id}
              onChange={(e) => setForm({ ...form, employee_id: e.target.value })}
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>{emp.user?.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Basic Salary</Form.Label>
            <Form.Control
              type="number"
              value={form.basic_salary}
              onChange={(e) => setForm({ ...form, basic_salary: e.target.value })}
              required
            />
          </Form.Group>

          <Button type="submit" variant="primary">Create</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SalaryStructureCreate;
