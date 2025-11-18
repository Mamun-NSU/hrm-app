import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../../axios";

const PublicRecruitmentApply = () => {
  const { id } = useParams(); // recruitment_id
  const navigate = useNavigate();
  const [form, setForm] = useState({
    applicant_name: "",
    applicant_email: "",
    applicant_phone: "",
    resume_link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/job-applications/public", {
        recruitment_id: id,
        ...form,
      });
      toast.success("Application submitted successfully!");
      navigate("/recruitments");
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application!");
    }
  };

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow">
        <h3>Apply for Job</h3>
        <Form onSubmit={handleSubmit}>
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
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit Application
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default PublicRecruitmentApply;
