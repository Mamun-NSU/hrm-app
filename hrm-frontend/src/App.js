import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

// Auth
import Login from "./api/pages/auth/Login";
import Register from "./api/pages/auth/Register";
import Profile from "./api/pages/auth/Profile";

// Users
import Users from "./components/Users";

// Employees
import EmployeeList from "./api/pages/employees/EmployeeList";
import EmployeeCreate from "./api/pages/employees/EmployeeCreate";
import EmployeeEdit from "./api/pages/employees/EmployeeEdit";
import EmployeeView from "./api/pages/employees/EmployeeView";

// Departments
import DepartmentList from "./api/pages/department/DepartmentList";
import DepartmentCreate from "./api/pages/department/DepartmentCreate";
import DepartmentEdit from "./api/pages/department/DepartmentEdit";
import DepartmentView from "./api/pages/department/DepartmentView";


// Designations
import DesignationList from "./api/pages/designation/DesignationList";
import DesignationCreate from "./api/pages/designation/DesignationCreate";
import DesignationEdit from "./api/pages/designation/DesignationEdit";
import DesignationView from "./api/pages/designation/DesignationView";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <Router>
      <div>
        {/* Toast notifications */}
        <ToastContainer />

        {/* Bootstrap Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">HRM App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Link as={Link} to="/users">Users</Nav.Link>

              {/* Employee Links */}
              <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
              <Nav.Link as={Link} to="/employees/create">Add Employee</Nav.Link>

              {/* Department Links */}
              <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
              <Nav.Link as={Link} to="/departments/create">Add Department</Nav.Link>

              {/* Designation Links */}
              <Nav.Link as={Link} to="/designations">Designations</Nav.Link>
              <Nav.Link as={Link} to="/designations/create">Add Designation</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Routes */}
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />

          {/* Users */}
          <Route path="/users" element={<Users />} />

          {/* Employee Routes */}
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/create" element={<EmployeeCreate />} />
          <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
          <Route path="/employees/:id" element={<EmployeeView />} />

          {/* Department Routes */}
          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/departments/create" element={<DepartmentCreate />} />
          <Route path="/departments/:id/edit" element={<DepartmentEdit />} />
          <Route path="/departments/:id" element={<DepartmentView />} />

          {/* Designation Routes */}
          <Route path="/designations" element={<DesignationList />} />
          <Route path="/designations/create" element={<DesignationCreate />} />
          <Route path="/designations/:id/edit" element={<DesignationEdit />} />
          <Route path="/designations/:id" element={<DesignationView />} />

          {/* Default Route */}
          <Route path="/" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

