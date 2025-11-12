import React, { useEffect, useState } from "react";
import api from "../../axios";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get("/user");
        setUser(response.data);
      } catch (error) {
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  if (!user)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" /> Loading...
      </Container>
    );

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-3">Profile</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <Button variant="danger" className="w-100 mt-3" onClick={logout}>
          Logout
        </Button>
      </Card>
    </Container>
  );
};

export default Profile;
