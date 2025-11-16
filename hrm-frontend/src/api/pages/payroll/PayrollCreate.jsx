import React, { useState, useEffect } from "react";
import api from "../../axios";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const PayrollCreate = () => {
  const [employees, setEmployees] = useState([]);
  const [salaryStructures, setSalaryStructures] = useState({});
  const [form, setForm] = useState({ employee_id: "", month_year: "" });

  // Fetch employees and salary structures on mount
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("/employees");
        setEmployees(res.data);

        const salaryRes = await api.get("/salary-structures");
        const salaryMap = {};
        if (salaryRes.data.status && Array.isArray(salaryRes.data.data)) {
          salaryRes.data.data.forEach((s) => {
            salaryMap[s.employee_id] = s;
          });
        }
        setSalaryStructures(salaryMap);
      } catch (err) {
        toast.error("Failed to load employees or salary structures");
        console.error(err);
      }
    };
    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.employee_id || !form.month_year) {
      toast.warning("Please select employee and month");
      return;
    }

    const salary = salaryStructures[form.employee_id];
    if (!salary) {
      toast.error("Salary structure not found for this employee");
      return;
    }

    const basic = parseFloat(salary.basic_salary);
    const allowance = parseFloat(salary.allowance_amount);
    const deduction = parseFloat(salary.deduction_amount);

    const payload = {
      employee_id: form.employee_id,
      month_year: form.month_year,
      gross_salary: basic + allowance,
      net_salary: basic + allowance - deduction,
      generated_at: new Date().toISOString().split("T")[0], // Today’s date in YYYY-MM-DD
    };

    try {
      await api.post("/payrolls", payload);
      toast.success("Payroll generated successfully!");
      setForm({ employee_id: "", month_year: "" });
    } catch (err) {
      toast.error("Failed to generate payroll!");
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Generate Payroll</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Employee</Form.Label>
          <Form.Select
            value={form.employee_id}
            onChange={(e) => setForm({ ...form, employee_id: e.target.value })}
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
          <Form.Label>Month (YYYY-MM)</Form.Label>
          <Form.Control
            type="month"
            value={form.month_year}
            onChange={(e) => setForm({ ...form, month_year: e.target.value })}
          />
        </Form.Group>

        {/* Display calculated salary */}
        {form.employee_id && salaryStructures[form.employee_id] && (
          <div className="mb-3">
            <p>
              <strong>Basic Salary:</strong> {salaryStructures[form.employee_id].basic_salary} <br />
              <strong>Allowance:</strong> {salaryStructures[form.employee_id].allowance_amount} <br />
              <strong>Deduction:</strong> {salaryStructures[form.employee_id].deduction_amount} <br />
              <strong>Gross Salary:</strong>{" "}
              {parseFloat(salaryStructures[form.employee_id].basic_salary) +
                parseFloat(salaryStructures[form.employee_id].allowance_amount)}{" "}
              <br />
              <strong>Net Salary:</strong>{" "}
              {parseFloat(salaryStructures[form.employee_id].basic_salary) +
                parseFloat(salaryStructures[form.employee_id].allowance_amount) -
                parseFloat(salaryStructures[form.employee_id].deduction_amount)}
            </p>
          </div>
        )}

        <Button type="submit" variant="primary">
          Generate Payroll
        </Button>
      </Form>
    </div>
  );
};

export default PayrollCreate;
