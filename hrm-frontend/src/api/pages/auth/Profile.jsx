import React, { useEffect, useState } from "react";
import api from "../../axios";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [employeeId, setEmployeeId] = useState(null);
  const navigate = useNavigate();

  // Go back to home page (Employee List)
  const goBack = () => {
    navigate("/");
  };

  // Go to employee details page
  const goToDetails = () => {
    if (employeeId) {
      navigate(`/employees/${employeeId}`);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/user"); // logged-in user
        setUser(response.data);

        // Fetch employee belonging to this user
        const empRes = await api.get(`/employees/${response.data.id}`);
        setEmployeeId(empRes.data?.id);
      } catch (error) {
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" /> Loading...
      </Container>
    );

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-3">Profile</h3>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <div className="d-flex gap-2 mt-3">
          <Button variant="secondary" className="w-50" onClick={goBack}>
            Back
          </Button>

          <Button
            variant="info"
            className="w-50"
            onClick={goToDetails}
            disabled={!employeeId}
          >
            Details
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default Profile;
