import { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "./recruitment.api";

const RecruitmentCreate = () => {
  const [form, setForm] = useState({
    position: "",
    department_id: "",
    status: "open",
  });

  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await api.get("/department/list");
        setDepartments(res.data.data.departments);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('recruitment/store', form);
      toast.success("Job post created successfully!");
      navigate("/recruitments");
    } catch (err) {
      console.error(err);
      toast.error("Failed to create job post!");
    }
  };

  return (
    <Card className="mt-4 shadow-sm p-4">
      <h3>Create Job Post</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Department</Form.Label>
          <Form.Select
            name="department_id"
            value={form.department_id}
            onChange={handleChange}
            required
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
          <Form.Label>Status</Form.Label>
          <Form.Select
            name="status"
            value={form.status}
            onChange={handleChange}
            required
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Create</Button>
      </Form>
    </Card>
  );
};

export default RecruitmentCreate;
