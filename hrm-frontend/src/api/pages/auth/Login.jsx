import { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../axios';

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post('/login', form);

      const { token, user } = response.data.data;

      localStorage.setItem("token", token);

      setUser(user);

      toast.success(response.data.message || "Login successful!");

      navigate("/"); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Login</h2>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group 
                className="mb-3"
                controlId="formEmail"
              >
                <Form.Label>Email address</Form.Label>

                <Form.Control
                  name="email"
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                  type="email"
                  value={form.email}
                />
              </Form.Group>

              <Form.Group 
                className="mb-3" 
                controlId="formPassword"
              >
                <Form.Label>Password</Form.Label>

                <Form.Control
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  type="password"
                  value={form.password} 
                />
              </Form.Group>

              <Button 
                className="w-100" 
                disabled={loading}
                type="submit" 
                variant="primary" 
              >
                {loading ? <Spinner animation="border" size="sm" /> : "Login"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
