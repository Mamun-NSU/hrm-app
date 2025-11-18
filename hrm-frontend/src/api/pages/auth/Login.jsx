import React, { useState } from "react";
import api from "../../axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Spinner } from "react-bootstrap";

const Login = ({ setUser, setIsAdmin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Login request
      const response = await api.post("/login", form);
      const token = response.data.token;
      localStorage.setItem("token", token); // save token

      // 2. Fetch user info
      const userResponse = await api.get("/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const loggedUser = userResponse.data;

      // 3. Update AppWrapper states
      setUser(loggedUser);
      setIsAdmin(loggedUser.role_id === 1);

      // 4. Mark check-in attendance
      await api.post(
        "/attendance",
        { type: "login" },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("Login successful and attendance recorded!");
      navigate("/"); // redirect to home
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card className="p-4 shadow">
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100" disabled={loading}>
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



// import React, { useState } from "react";
// import api from "../../axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };


//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     // 1. Login request
//     const response = await api.post("/login", form);
//     const token = response.data.token;
//     localStorage.setItem("token", token); // save token

//     // 2. Mark check-in (login) attendance
//     await api.post(
//       "/attendance",
//       { type: "login" },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );

//     toast.success("Login successful and attendance recorded!");
//     navigate("/profile");
//   } catch (error) {
//     toast.error(error.response?.data?.message || "Login failed");
//   }
// };


//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await api.post("/login", form);
//   //     localStorage.setItem("token", response.data.token); // save token
//   //     toast.success("Login successful!");
//   //     navigate("/profile");
//   //   } catch (error) {
//   //     toast.error(error.response?.data?.message || "Login failed");
//   //   }
//   // };

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
//       <Row className="w-100">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Card className="p-4 shadow">
//             <h2 className="text-center mb-4">Login</h2>
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="formEmail">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control
//                   type="email"
//                   name="email"
//                   placeholder="Enter email"
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={form.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </Form.Group>

//               <Button variant="primary" type="submit" className="w-100">
//                 Login
//               </Button>
//             </Form>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;
