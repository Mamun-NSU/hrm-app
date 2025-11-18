import React, { useEffect, useState } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../axios";

const PublicRecruitmentList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/recruitments");
        setJobs(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <div className="mt-4">
      <h2>Open Job Posts</h2>
      {jobs.map((job) => (
        <Card key={job.id} className="mb-3 shadow-sm">
          <Card.Body>
            <Card.Title>{job.position}</Card.Title>
            <Card.Text>Department: {job.department?.name || "N/A"}</Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/job-apply/${job.id}`)}
            >
              Apply Now
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PublicRecruitmentList;
