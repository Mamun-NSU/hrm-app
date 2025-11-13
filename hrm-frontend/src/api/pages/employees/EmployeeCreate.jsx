import React, { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import api from "../../axios";

const EmployeeCreate = () => {
  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    user_id: "",
    department_id: "",
    designation_id: "",
    employee_code: "",
    phone: "",
    gender: "",
    date_of_birth: "",
    join_date: "",
    employment_status: "Active",
    salary_base: ""
  });

  useEffect(() => {
    fetchDepartments();
    fetchDesignations();
    fetchUsers();
  }, []);

  const fetchDepartments = async () => {
    const res = await api.get("/departments");
    setDepartments(res.data);
  };

  const fetchDesignations = async () => {
    const res = await api.get("/designations");
    setDesignations(res.data);
  };

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employees", form);
      alert("Employee created successfully!");
      setForm({ ...form, employee_code: "", name: "", email: "", phone: "", salary_base: "" });
    } catch (err) {
      console.error(err);
      alert("Error creating employee.");
    }
  };

  return (
    <Card className="mt-4">
      <Card.Header>
        <h3>Create Employee</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User</Form.Label>
            <Form.Select name="user_id" onChange={handleChange} required>
              <option value="">Select User</option>
              {users.map(u => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Select name="department_id" onChange={handleChange}>
              <option value="">Select Department</option>
              {departments.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Select name="designation_id" onChange={handleChange}>
              <option value="">Select Designation</option>
              {designations.map(d => (
                <option key={d.id} value={d.id}>{d.title}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Code</Form.Label>
            <Form.Control type="text" name="employee_code" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select name="gender" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" name="date_of_birth" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Join Date</Form.Label>
            <Form.Control type="date" name="join_date" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employment Status</Form.Label>
            <Form.Select name="employment_status" onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Probation">Probation</option>
              <option value="Resigned">Resigned</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Salary Base</Form.Label>
            <Form.Control type="number" name="salary_base" onChange={handleChange} />
          </Form.Group>

          <Button type="submit" variant="primary">Create Employee</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCreate;
