import { useState, useEffect } from "react";
import { Card, Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./employee.api";
import SelectField from "../../Components/SelectField";

const EmployeeEdit = ({ isAdmin }) => {
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
    const fetchInitialData = async () => {
      try {
        const [deptRes, desigRes, usersRes, empRes] = await Promise.all([
          api.get("/department/list"),
          api.get("/designation/list"),
          api.get('/user/list'),
          api.get(`/employee/${id}/show`)
        ]);

        setDepartments(deptRes.data.data.departments);
        setDesignations(desigRes.data.data.designations);
        setUsers(usersRes.data.data.users);

        setForm({
          user_id: empRes.data.data.employee.user_id || "",
          department_id: empRes.data.data.employee.department_id || "",
          designation_id: empRes.data.data.employee.designation_id || "",
          employee_code: empRes.data.data.employee.employee_code || "",
          phone: empRes.data.data.employee.phone || "",
          gender: empRes.data.data.employee.gender || "",
          date_of_birth: empRes.data.data.employee.date_of_birth || "",
          join_date: empRes.data.data.employee.join_date || "",
          employment_status: empRes.data.data.employee.employment_status || "Active",
          salary_base: empRes.data.data.employee.salary_base || ""
        });
      } catch (error) {
        console.error(error);
        toast.error("Failed to load employee data!");
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put(`/employee/${id}/update`, form);
      toast.success("Employee updated successfully!");
      navigate("/employees");
    } catch (error) {
          console.error(error);
          console.log("error data: ", error);
          const message =
            error?.response?.data?.message || "Error Updating employee.";
          toast.error(message);
        } finally {
      setSaving(false);
    }
  };

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Edit Employee</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>User</Form.Label>
                <Form.Select
                  name="user_id"
                  value={form.user_id}
                  onChange={handleChange}
                  required
                  disabled={!isAdmin}
                >
                  <option value="">Select User</option>
                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Form.Select
                  name="department_id"
                  value={form.department_id}
                  onChange={handleChange}
                  disabled={!isAdmin}
                >
                  <option value="">Select Department</option>
                  {departments.map((department) => (
                    <option key={department.id} value={department.id}>
                      {department.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Select
                  name="designation_id"
                  value={form.designation_id}
                  onChange={handleChange}
                  disabled={!isAdmin}
                >
                  <option value="">Select Designation</option>
                  {designations.map((designation) => (
                    <option key={designation.id} value={designation.id}>
                      {designation.title}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Employee Code</Form.Label>
                <Form.Control
                  type="text"
                  name="employee_code"
                  value={form.employee_code}
                  onChange={handleChange}
                  required
                  disabled={!isAdmin}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" value={form.phone} onChange={handleChange} />
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
                <Form.Control type="date" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Join Date</Form.Label>
                <Form.Control type="date" name="join_date" value={form.join_date} onChange={handleChange} />
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
                <Form.Control type="number" name="salary_base"  disabled={!isAdmin} value={form.salary_base} onChange={handleChange} />
              </Form.Group>
              <div className="d-flex justify-content-between align-items-center gap-3 mt-4">
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-grow-1"
                  disabled={saving}
                >
                  {saving ? <Spinner animation="border" size="sm" /> : "Update"}
                </Button>
                <Button
                  variant="secondary"
                  className="flex-grow-1"
                  onClick={() => navigate("/employees")}
                >
                  Back
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeEdit;
