import React, { useState, useEffect } from "react";
import { Form, Button, Card, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../axios";
import { toast } from "react-toastify";

const EmployeeEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    user_id: "",
    department_id: "",
    designation_id: "",
    employee_code: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    date_of_birth: "",
    join_date: "",
    employment_status: "Active",
    salary_base: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      const [deptRes, desigRes, usersRes, empRes] = await Promise.all([
        api.get("/departments"),
        api.get("/designations"),
        api.get("/users"),
        api.get(`/employees/${id}`)
      ]);

      setDepartments(deptRes.data);
      setDesignations(desigRes.data);
      setUsers(usersRes.data);

      setForm({
        user_id: empRes.data.user_id || "",
        department_id: empRes.data.department_id || "",
        designation_id: empRes.data.designation_id || "",
        employee_code: empRes.data.employee_code || "",
        name: empRes.data.name || "",
        email: empRes.data.email || "",
        phone: empRes.data.phone || "",
        gender: empRes.data.gender || "",
        date_of_birth: empRes.data.date_of_birth || "",
        join_date: empRes.data.join_date || "",
        employment_status: empRes.data.employment_status || "Active",
        salary_base: empRes.data.salary_base || ""
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to load employee data!");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put(`/employees/${id}`, form);
      toast.success("Employee updated successfully!");
      navigate("/employees");
    } catch (err) {
      console.error(err);
      toast.error("Error updating employee.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3>Edit Employee</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User</Form.Label>
            <Form.Select name="user_id" value={form.user_id} onChange={handleChange} required>
              <option value="">Select User</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Select name="department_id" value={form.department_id} onChange={handleChange}>
              <option value="">Select Department</option>
              {departments.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Select name="designation_id" value={form.designation_id} onChange={handleChange}>
              <option value="">Select Designation</option>
              {designations.map(d => (
                <option key={d.id} value={d.id}>{d.title}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Code</Form.Label>
            <Form.Control type="text" name="employee_code" value={form.employee_code} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" value={form.phone} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Join Date</Form.Label>
            <Form.Control type="date" name="join_date" value={form.join_date} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employment Status</Form.Label>
            <Form.Select name="employment_status" value={form.employment_status} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Probation">Probation</option>
              <option value="Resigned">Resigned</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Salary Base</Form.Label>
            <Form.Control type="number" name="salary_base" value={form.salary_base} onChange={handleChange} />
          </Form.Group>

          <Button type="submit" variant="primary" disabled={saving}>
            {saving ? <Spinner animation="border" size="sm" /> : "Update Employee"}
          </Button>
          <Button
            variant="secondary"
            className="ms-2"
            onClick={() => navigate("/employees")}
          >
            Cancel
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmployeeEdit;
