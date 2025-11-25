import React, { useEffect, useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./recruitment.api";

const RecruitmentEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    position: "",
    department_id: "",
    status: "open",
  });
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [recruitRes, deptRes] = await Promise.all([
          api.get(`recruitment/${id}/show`),
          api.get("/department/list"),
        ]);
        setForm({
          position: recruitRes.data.data.recruitment.position,
          department_id: recruitRes.data.data.recruitment.department_id,
          status: recruitRes.data.data.recruitment.status,
        });
        setDepartments(deptRes.data.data.departments);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load data!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`recruitment/${id}/update`, form);
      toast.success("Job post updated!");
      navigate("/recruitments");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update job post!");
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm p-4">
      <h3>Edit Job Post</h3>
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
            {departments.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
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

        <Button type="submit">Update</Button>
      </Form>
    </Card>
  );
};

export default RecruitmentEdit;
