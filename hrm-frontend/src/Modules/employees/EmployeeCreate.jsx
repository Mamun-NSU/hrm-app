import { useState, useEffect } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./employee.api";
import SelectField from "../../Components/SelectField";

const EmployeeCreate = ({ isAdmin }) => {
  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  const [designations, setDesignations] = useState([]);
  
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

  const [users, setUsers] = useState([]);

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
      toast.error(error?.response?.data?.message || "Error creating employee.");
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

            <Form.Select 
              name="user_id" 
              onChange={handleChange} 
              required
            >
              <option value="">Select User</option>
              
              {users.map(user => (
                <option 
                  key={user.id} 
                  value={user.id}
                >
                  {user.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            
            <Form.Select 
              name="department_id" 
              onChange={handleChange}
            >
              <option value="">Select Department</option>

              {departments.map(department => (
                <option 
                  key={department.id} 
                  value={department.id}
                >
                  {department.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Designation</Form.Label>

            <Form.Select 
              name="designation_id" 
              onChange={handleChange}
            >
              <option value="">Select Designation</option>

              {designations.map(designation => (
                <option 
                  key={designation.id} 
                  value={designation.id}
                >
                  {designation.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Code</Form.Label>

            <Form.Control 
              name="employee_code" 
              onChange={handleChange} 
              required 
              type="text" 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone</Form.Label>

            <Form.Control 
              name="phone"
              onChange={handleChange}
              type="text" 
              value={form.phone} 
            />
          </Form.Group>

          <Form.Group className="mb-3">
              <SelectField
                label="Gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
                options={["Male", "Female", "Other"]}
              />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date of Birth</Form.Label>

            <Form.Control 
              name="date_of_birth" 
              onChange={handleChange}
              type="date"  
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Join Date</Form.Label>

            <Form.Control 
              name="join_date" 
              onChange={handleChange}
              type="date" 
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <SelectField
              label="Employment Status"
              name="employment_status"
              value={form.employment_status}
              onChange={handleChange}
              required
              options={["Active", "Probation", "Resigned"]}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Salary Base</Form.Label>

            <Form.Control 
              name="salary_base" 
              onChange={handleChange}
              type="number" 
            />
          </Form.Group>

          <div
            className={
              isAdmin
                ? "d-flex gap-2"
                : "d-flex justify-content-center"
            } >
              
            {isAdmin && (
              <Button
                className="w-50"
                type="submit"
                variant="primary"
              >
                Create Employee
              </Button>
            )}

            <Button
              className={isAdmin ? "w-50" : "w-75"}
              onClick={() => navigate("/employees")}
              variant="secondary"
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
