
import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const JobApplicationApply = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    recruitment_id: "",
    resume_link: "",
    cover_letter: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({}); // Field-specific errors
  const navigate = useNavigate();

  // Fetch all available jobs for employee
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/recruitments", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setJobs(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch jobs. Please try again later.");
      }
    };
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    setErrors({});

    if (!formData.recruitment_id) {
      setError("Please select a job to apply.");
      setLoading(false);
      return;
    }

    // Ensure either resume file or resume link is provided
    if (!formData.resume && !formData.resume_link) {
      setError("Please provide a resume file or a resume link.");
      setLoading(false);
      return;
    }

    try {
      const data = new FormData();
      data.append("recruitment_id", formData.recruitment_id);
      data.append("cover_letter", formData.cover_letter);
      if (formData.resume) data.append("resume", formData.resume);
      if (formData.resume_link) data.append("resume_link", formData.resume_link);

      await axios.post(
        "http://127.0.0.1:8000/api/job-applications/employee",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setSuccess("Job application submitted successfully!");
      setFormData({ recruitment_id: "", resume: null, resume_link: "", cover_letter: "" });

      // Optional: delay navigation to show success message
      setTimeout(() => navigate("/job-applications"), 1000);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        if (err.response.data.errors) {
          setErrors(err.response.data.errors);
        }
        setError(
          err.response.data.message ||
            "Something went wrong while submitting the application."
        );
      } else {
        setError("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-4">Apply for Job</h3>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Select Job</Form.Label>
            <Form.Select
              name="recruitment_id"
              value={formData.recruitment_id}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Job --</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.position} ({job.department.name})
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Resume Link</Form.Label>
            <Form.Control
              type="text"
              name="resume_link"
              value={formData.resume_link}
              onChange={handleChange}
              placeholder="Enter resume URL (e.g., Google Drive, Dropbox)"
            />
            {errors.resume_link && (
              <div className="text-danger">{errors.resume_link[0]}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control
              as="textarea"
              name="cover_letter"
              value={formData.cover_letter}
              onChange={handleChange}
              rows={4}
            />
            {errors.cover_letter && (
              <div className="text-danger">{errors.cover_letter[0]}</div>
            )}
          </Form.Group>

          <Button type="submit" className="w-100" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Submit Application"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default JobApplicationApply;

