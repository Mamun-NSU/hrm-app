import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./job-application.api";

const JobApplicationView = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const res = await api.get(`/job-application/${id}/show`);
        setApplication(res.data.data.application);
      } catch (err) {
        console.error(err);
        toast.error("Failed to fetch application!");
      } finally {
        setLoading(false);
      }
    };
    fetchApplication();
  }, [id]);

  if (loading) return <Spinner animation="border" className="mt-5" />;

  return (
    <Card className="mt-4 shadow-sm p-4">
      <h3>Application Details</h3>
      <p><strong>Applicant Name:</strong> {application.applicant_name}</p>
      <p><strong>Email:</strong> {application.applicant_email}</p>
      <p><strong>Phone:</strong> {application.applicant_phone}</p>
      <p><strong>Job Position:</strong> {application.recruitment?.position}</p>
      <p><strong>Status:</strong> {application.status}</p>
      <p><strong>Applied At:</strong> {new Date(application.applied_at).toLocaleString()}</p>
      <p><strong>Resume Link:</strong> <a href={application.resume_link} target="_blank" rel="noopener noreferrer">{application.resume_link}</a></p>
    </Card>
  );
};

export default JobApplicationView;
