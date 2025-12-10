import { useState, useEffect, useMemo } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "./payroll.api";

const PayrollCreate = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    month_year: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeesWithSalary();
  }, []);

  const fetchEmployeesWithSalary = async () => {
    try {
      const res = await api.get("employee/with-salary");
      setEmployees(res.data.data.employees);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load employees!");
    }
  };

  const selectedEmployee = useMemo(() => {
    return employees.find(
      (employee) => employee.id === form.employee_id
    );
  }, [employees, form.employee_id]);

  const salary = selectedEmployee?.salary_structure;

  const basic = parseFloat(salary?.basic_salary || 0);
  const allowance = parseFloat(salary?.allowance_amount || 0);
  const deduction = parseFloat(salary?.deduction_amount || 0);

  const grossSalary = basic + allowance;
  const netSalary = grossSalary - deduction;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.employee_id || !form.month_year) {
      toast.warning("Please select employee and month");
      return;
    }

    if (!salary) {
      toast.error("Salary structure not found for this employee");
      return;
    }

    const payload = {
      employee_id: form.employee_id,
      month_year: form.month_year,
      gross_salary: grossSalary,
      net_salary: netSalary,
      generated_at: new Date().toISOString().split("T")[0],
    };

    try {
      await api.post("/payroll/store", payload);

      toast.success("Payroll generated successfully!");
      navigate("/payrolls");
    } catch (err) {
      console.error(err);

      if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
      } else if (err?.message) {
        toast.error(err.message);
      } else {
        toast.error("Failed to generate payroll!");
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
            onChange={(e) =>
              setForm({
                ...form,
                employee_id: e.target.value,
              })
            }
          >
            <option value="">Select Employee</option>
            {employees.map((employee) => {
              if (!employee.salary_structure) return null;

              return (
                <option key={employee.id} value={employee.id}>
                  {employee.user?.name}
                  {/* {" - "} Payrolls: {employee.payrolls?.length || 0} */}
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
            onChange={(e) =>
              setForm({
                ...form,
                month_year: e.target.value,
              })
            }
            required
          />
        </Form.Group>

        {salary && (
          <div className="mb-3">
            <p>
              <strong>Basic Salary:</strong> {basic} <br />
              <strong>Allowance:</strong> {allowance} <br />
              <strong>Deduction:</strong> {deduction} <br />
              <strong>Gross Salary:</strong> {grossSalary} <br />
              <strong>Net Salary:</strong> {netSalary}
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
