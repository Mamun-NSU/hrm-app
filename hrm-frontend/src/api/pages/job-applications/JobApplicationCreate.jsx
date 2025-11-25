import React, { useEffect, useState } from "react";
import { Card, Form, Button, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "./job-application.api";

const JobApplicationCreate = () => {
  const [recruitments, setRecruitments] = useState([]);
  const [form, setForm] = useState({
    recruitment_id: "",
    applicant_name: "",
    applicant_email: "",
    applicant_phone: "",
    resume_link: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const res = await api.get('/recruitment/public/list'); // public open jobs
        setRecruitments(res.data.data.recruitments);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load job posts!");
      } finally {
        setLoading(false);
      }
    };
    fetchRecruitments();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('job-application/public/store', form);
      toast.success("Application submitted successfully!");
      setForm({
        recruitment_id: "",
        applicant_name: "",
        applicant_email: "",
        applicant_phone: "",
        resume_link: "",
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application!");
    }
  };

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm p-4">
      <h3>Apply for a Job</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Job Position</Form.Label>
          <Form.Select
            name="recruitment_id"
            value={form.recruitment_id}
            onChange={handleChange}
            required
          >
            <option value="">Select Job</option>
            {recruitments.map((r) => (
              <option key={r.id} value={r.id}>
                {r.position} ({r.department?.name || "N/A"})
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="applicant_name"
            value={form.applicant_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="applicant_email"
            value={form.applicant_email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="applicant_phone"
            value={form.applicant_phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Resume Link</Form.Label>
          <Form.Control
            type="text"
            name="resume_link"
            value={form.resume_link}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button type="submit">Apply Now</Button>
      </Form>
    </Card>
  );
};

export default JobApplicationCreate;
