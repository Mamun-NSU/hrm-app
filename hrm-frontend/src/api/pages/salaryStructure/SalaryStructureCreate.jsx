import React, { useState, useEffect } from "react";
import api from "../../axios";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const SalaryStructureCreate = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    basic_salary: "",
    allowance_amount: "",
    deduction_amount: "",
  });

  useEffect(() => {
    api.get("/employees").then((res) => setEmployees(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/salary-structures", form);
      toast.success("Salary structure created!");
      setForm({
        employee_id: "",
        basic_salary: "",
        allowance_amount: "",
        deduction_amount: "",
      });
    } catch {
      toast.error("Failed to create structure");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Salary Structure</h3>

      <Form onSubmit={handleSubmit} className="mt-3">

        <Form.Group className="mb-3">
          <Form.Label>Employee</Form.Label>
          <Form.Select
            value={form.employee_id}
            onChange={(e) =>
              setForm({ ...form, employee_id: e.target.value })
            }
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
            value={form.basic_salary}
            onChange={(e) =>
              setForm({ ...form, basic_salary: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Allowance</Form.Label>
          <Form.Control
            type="number"
            value={form.allowance_amount}
            onChange={(e) =>
              setForm({ ...form, allowance_amount: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Deduction</Form.Label>
          <Form.Control
            type="number"
            value={form.deduction_amount}
            onChange={(e) =>
              setForm({ ...form, deduction_amount: e.target.value })
            }
          />
        </Form.Group>

        <Button type="submit" variant="success">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default SalaryStructureCreate;
