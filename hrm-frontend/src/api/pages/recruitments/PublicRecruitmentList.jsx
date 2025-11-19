import React, { useEffect, useState } from "react";
import { Card, Button, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../axios";

const PublicRecruitmentList = ({ user, isAdmin }) => {
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

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header>
        <h3 className="mb-0">Open Job Posts</h3>
      </Card.Header>

      <Card.Body>
        {loading ? (
          <div className="d-flex justify-content-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Apply</th>
              </tr>
            </thead>

            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.position}</td>
                    <td>{job.department?.name || "N/A"}</td>
                    <td>
                      <span
                        className={`badge ${
                          job.status === "open" ? "bg-success" : "bg-secondary"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                      <td>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => {
                          if (!user) {
                            // Public visitor
                            navigate("/job-applications/public");
                          } else if (!isAdmin) {
                            // Employee (not admin)
                            navigate("/job-applications/apply");
                          } else {
                            alert("Admins cannot apply for job posts.");
                          }
                        }}
                      >
                        Apply Now
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No job posts available.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default PublicRecruitmentList;
