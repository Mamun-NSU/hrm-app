import { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./employee.api";

const EmployeeCreate = ({ isAdmin }) => {
  const navigate = useNavigate();

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
    const res = await api.get("/department/list");
    setDepartments(res.data.data.departments);
  };

  const fetchDesignations = async () => {
    const res = await api.get("/designation/list");
    setDesignations(res.data.data.designations);
  };

  const fetchUsers = async () => {
    const res = await api.get("/user/list");
    setUsers(res.data.data.users);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/employee/store", form);

      toast.success("Employee created successfully!");
      navigate("/employees");

    } catch (error) {
      console.error(error);
      console.log("error data: ", error);
      const message =
        error?.response?.data?.message || "Error creating employee.";

      toast.error(message);
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
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Select name="department_id" onChange={handleChange}>
              <option value="">Select Department</option>
              {departments.map(department => (
                <option key={department.id} value={department.id}>{department.name}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>
            <Form.Select name="designation_id" onChange={handleChange}>
              <option value="">Select Designation</option>
              {designations.map(designation => (
                <option key={designation.id} value={designation.id}>{designation.title}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Code</Form.Label>
            <Form.Control type="text" name="employee_code" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" name="phone" value={form.phone} onChange={handleChange} />
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

          <div
            className={
              isAdmin
                ? "d-flex gap-2"
                : "d-flex justify-content-center"
            } >
            {isAdmin && (
              <Button
                type="submit"
                variant="primary"
                className="w-50"
              >
                Create Employee
              </Button>
            )}
            <Button
              variant="secondary"
              className={isAdmin ? "w-50" : "w-75"}
              onClick={() => navigate("/employees")}
            >
              Back
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCreate;
