import React, { useState, useEffect } from "react";
import api from "../../axios";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PayrollCreate = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ employee_id: "", month_year: "" });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeesWithSalary();
  }, []);

  const fetchEmployeesWithSalary = async () => {
    try {
      // Fetch all employees with salary structure and existing payrolls
      const res = await api.get("/employees-with-salary"); // You need to create this endpoint in backend
      setEmployees(res.data.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch employees or salary structures");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.employee_id || !form.month_year) {
      toast.warning("Please select employee and month");
      return;
    }

    const employee = employees.find((e) => e.id === parseInt(form.employee_id));
    if (!employee || !employee.salary_structure) {
      toast.error("Salary structure not found for this employee");
      return;
    }

    const salary = employee.salary_structure;
    const basic = parseFloat(salary.basic_salary);
    const allowance = parseFloat(salary.allowance_amount);
    const deduction = parseFloat(salary.deduction_amount);

    const payload = {
      employee_id: form.employee_id,
      month_year: form.month_year,
      gross_salary: basic + allowance,
      net_salary: basic + allowance - deduction,
      generated_at: new Date().toISOString().split("T")[0],
    };

    try {
      await api.post("/payrolls", payload);
      toast.success("Payroll generated successfully!");
      navigate("/payrolls");
    } catch (err) {
      console.error(err); // Full error object in console

      // Show proper message in toast
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message); // Backend message
      } else if (err.message) {
        toast.error(err.message); // JS error fallback
      } else {
        toast.error("Failed to generate payroll!"); // Generic fallback
      }
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
            {employees.map((emp) => {
              // Only show employees who have salary structure
              if (!emp.salary_structure) return null;
              return (
                <option key={emp.id} value={emp.id}>
                  {emp.user?.name} 
                  {/* {" - "} Existing Payrolls: {emp.payrolls?.length || 0} */}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Month (YYYY-MM)</Form.Label>
          <Form.Control
            type="month"
            value={form.month_year}
            onChange={(e) => setForm({ ...form, month_year: e.target.value })}
            required
          />
        </Form.Group>

        {form.employee_id && employees.find(e => e.id === parseInt(form.employee_id))?.salary_structure && (
          <div className="mb-3">
            <p>
              <strong>Basic Salary:</strong> {employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.basic_salary} <br />
              <strong>Allowance:</strong> {employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.allowance_amount} <br />
              <strong>Deduction:</strong> {employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.deduction_amount} <br />
              <strong>Gross Salary:</strong>{" "}
              {parseFloat(employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.basic_salary) +
                parseFloat(employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.allowance_amount)} <br />
              <strong>Net Salary:</strong>{" "}
              {parseFloat(employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.basic_salary) +
                parseFloat(employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.allowance_amount) -
                parseFloat(employees.find(e => e.id === parseInt(form.employee_id)).salary_structure.deduction_amount)}
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
