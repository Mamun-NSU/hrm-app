import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import api from "./api/axios";

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
import EmployeeDetails from "./api/pages/employees/EmployeeDetails";

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

// Salary Structures (Admin only)
import SalaryStructureList from "./api/pages/salary-structure/SalaryStructureList";
import SalaryStructureCreate from "./api/pages/salary-structure/SalaryStructureCreate";
import SalaryStructureEdit from "./api/pages/salary-structure/SalaryStructureEdit";


// Attendance
import AttendanceCheck from "./api/pages/attendance/AttendanceCheck";
import AttendanceEdit from "./api/pages/attendance/AttendanceEdit";
import AttendanceList from "./api/pages/attendance/AttendanceList";

// Roles
import RoleList from "./api/pages/role/RoleList";
import RoleCreate from "./api/pages/role/RoleCreate";
import RoleEdit from "./api/pages/role/RoleEdit";
import RoleView from "./api/pages/role/RoleView";

// Payroll
import PayrollList from "./api/pages/payroll/PayrollList";
import PayrollCreate from "./api/pages/payroll/PayrollCreate";

// Leave Management
import LeaveList from "./api/pages/leaves/LeaveList";
import LeaveCreate from "./api/pages/leaves/LeaveCreate";

// Performance KPI
import PerformanceKPIList from "./api/pages/performance/PerformanceKPIList";
import PerformanceKPICreate from "./api/pages/performance/PerformanceKPICreate";
import PerformanceKPIEdit from "./api/pages/performance/PerformanceKPIEdit";
import PerformanceKPIView from "./api/pages/performance/PerformanceKPIView";

// Performance Evaluation
import PerformanceEvaluationList from "./api/pages/performance/PerformanceEvaluationList";
import PerformanceEvaluationCreate from "./api/pages/performance/PerformanceEvaluationCreate";
import PerformanceEvaluationEdit from "./api/pages/performance/PerformanceEvaluationEdit";
import PerformanceEvaluationView from "./api/pages/performance/PerformanceEvaluationView";

import TrainingList from "./api/pages/training/TrainingList";
import TrainingEdit from "./api/pages/training/TrainingEdit";
import TrainingCreate from "./api/pages/training/TrainingCreate"; 
import TrainingView from "./api/pages/training/TrainingView";
import EmployeeTrainingList from "./api/pages/training/EmployeeTrainingList";
import EmployeeTrainingEdit from "./api/pages/training/EmployeeTrainingEdit";
import EmployeeTrainingCreate from "./api/pages/training/EmployeeTrainingCreate";
import EmployeeTrainingView from "./api/pages/training/EmployeeTrainingView";
import PayrollEdit from "./api/pages/payroll/PayrollEdit";




function AppWrapper() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  // Fetch current user and detect admin
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        setIsAdmin(false);
        return;
      }

      try {
        const response = await api.get("/user");
        const loggedUser = response.data;
        setUser(loggedUser);

        // Detect Admin using role_id (Admin = 1)
        const adminStatus = loggedUser?.role_id === 1;
        setIsAdmin(adminStatus);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
        setIsAdmin(false);
      }
    };

    fetchUser();
  }, []);

  // Logout
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await api.post(
          "/attendance",
          { type: "logout" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Failed to record check-out:", error);
      }
    }

    localStorage.removeItem("token");
    setUser(null);
    setIsAdmin(false);
    navigate("/login");
  };

  return (
    <>
      <ToastContainer />

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">HRM App</Navbar.Brand>
          <Nav className="me-auto">

            {/* Admin Only Menu */}
            {isAdmin && (
              <>
                <Nav.Link as={Link} to="/users">Users</Nav.Link>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                {/* <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
                <Nav.Link as={Link} to="/designations">Designations</Nav.Link>
                <Nav.Link as={Link} to="/roles">Roles</Nav.Link> */}
                <Nav.Link as={Link} to="/salary-structures">Salary Structures</Nav.Link>
                <Nav.Link as={Link} to="/leaves">Leaves Requests</Nav.Link>
                <Nav.Link as={Link} to="/payrolls">Payroll Management</Nav.Link>
                <Nav.Link as={Link} to="/performance-kpis">P. KPIs</Nav.Link>
                <Nav.Link as={Link} to="/performance-evaluations">P. Evaluations</Nav.Link>
                <Nav.Link as={Link} to="/trainings">Trainings</Nav.Link>
                <Nav.Link as={Link} to="/employee-trainings">E. Trainings</Nav.Link>
              </>
            )}

            {/* Employee Menu */}
            {!isAdmin && user && (
              <>
              <Nav.Link as={Link} to="/leaves">My Leaves</Nav.Link>
              <Nav.Link as={Link} to="/payrolls">My Payrolls</Nav.Link>
              <Nav.Link as={Link} to="/performance-evaluations">My P.E.</Nav.Link>
              {/* <Nav.Link as={Link} to="/trainings">Trainings</Nav.Link> */}
              <Nav.Link as={Link} to="/employee-trainings">My Trainings</Nav.Link>
              </>
            )}

            {/* Common Menu */}
            <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
            <Nav.Link as={Link} to="/attendance/list">Attendance List</Nav.Link>

            {/* Auth Links */}
            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            ) : (
              <>
                <Button variant="danger" className="ms-2" onClick={handleLogout}>Logout</Button>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* Users (Admin only) */}
        {isAdmin && <Route path="/users" element={<Users />} />}

        {/* Employees */}
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/create" element={<EmployeeCreate />} />
        <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />

        {/* Departments (Admin only) */}
        {isAdmin && (
          <>
            <Route path="/departments" element={<DepartmentList />} />
            <Route path="/departments/create" element={<DepartmentCreate />} />
            <Route path="/departments/:id/edit" element={<DepartmentEdit />} />
            <Route path="/departments/:id" element={<DepartmentView />} />
          </>
        )}

        {/* Designations (Admin only) */}
        {isAdmin && (
          <>
            <Route path="/designations" element={<DesignationList />} />
            <Route path="/designations/create" element={<DesignationCreate />} />
            <Route path="/designations/:id/edit" element={<DesignationEdit />} />
            <Route path="/designations/:id" element={<DesignationView />} />
          </>
        )}

        {/* Roles (Admin only) */}
        {isAdmin && (
          <>
            <Route path="/roles" element={<RoleList />} />
            <Route path="/roles/create" element={<RoleCreate />} />
            <Route path="/roles/:id/edit" element={<RoleEdit />} />
            <Route path="/roles/:id" element={<RoleView />} />
          </>
        )}

        {/* Salary Structures (Admin only) */}
        {isAdmin && (
          <>
            <Route path="/salary-structures" element={<SalaryStructureList />} />
            <Route path="/salary-structures/create" element={<SalaryStructureCreate />} />
            <Route path="/salary-structures/:id/edit" element={<SalaryStructureEdit />} />
          </>
        )}

        {/* Attendance */}
        <Route path="/attendance" element={<AttendanceCheck />} />
        <Route path="/attendance/:id/edit" element={<AttendanceEdit />} />
        <Route path="/attendance/list" element={<AttendanceList />} />

        {/* Leave Management */}
        {user && (
          <>
            <Route path="/leaves" element={<LeaveList user={user} />} />
            {user?.role_id === 3 && <Route path="/leaves/create" element={<LeaveCreate />} />}
          </>
        )}

                {/* Payroll */}
        {user && (
          <>
          <Route path="/payrolls/:id/edit" element={<PayrollEdit />} />
            {isAdmin && <Route path="/payrolls" element={<PayrollList user={user}/>} />}
            {isAdmin && <Route path="/payrolls/create" element={<PayrollCreate />} />}
            {!isAdmin && <Route path="/payrolls" element={<PayrollList user={user}/>} />} {/* Employee sees own payroll */}
          </>
        )}

        {/* Performance KPIs (Admin only) */}
        {isAdmin && (
          <>
            <Route path="/performance-kpis" element={<PerformanceKPIList user={user} />} />
            <Route path="/performance-kpis/create" element={<PerformanceKPICreate />} />
            <Route path="/performance-kpis/:id" element={<PerformanceKPIView />} />
            <Route path="/performance-kpis/:id/edit" element={<PerformanceKPIEdit />} />
          </>
        )}

        {/* Performance Evaluations */}
        {user && (
          <>
            {isAdmin && (
              <>
                <Route path="/performance-evaluations" element={<PerformanceEvaluationList user={user} />} />
                <Route path="/performance-evaluations/create" element={<PerformanceEvaluationCreate />} />
                <Route path="/performance-evaluations/:id/edit" element={<PerformanceEvaluationEdit />} />
              </>
            )}
            {!isAdmin && (
              <Route path="/performance-evaluations" element={<PerformanceEvaluationList user={user} />} />
            )}
            <Route path="/performance-evaluations/:id" element={<PerformanceEvaluationView />} />
          </>
        )}

        {/* Training Routes */}
        {user && (
          <>
            {isAdmin && (
              <>
                <Route path="/trainings" element={<TrainingList user={user} />} />
                <Route path="/trainings/create" element={<TrainingCreate user={user} />} />
                <Route path="/trainings/:id/edit" element={<TrainingEdit user={user} />} />
              </>
            )}
            {!isAdmin && (
              <Route path="/trainings" element={<TrainingList user={user} />} /> // Employee can view trainings
            )}
            <Route path="/trainings/:id" element={<TrainingView user={user} />} />
          </>
          

        )}

          {/* EmployeeTraining Routes */}
          {user && (
            <>
              {isAdmin && (
                <>
                  <Route path="/employee-trainings" element={<EmployeeTrainingList user={user} />} />
                  <Route path="/employee-trainings/create" element={<EmployeeTrainingCreate user={user} />} />
                  <Route path="/employee-trainings/:id/edit" element={<EmployeeTrainingEdit user={user} />} />
                </>
              )}
              {!isAdmin && (
                <Route path="/employee-trainings" element={<EmployeeTrainingList user={user} />} /> // Employee can view their own trainings
              )}
              <Route path="/employee-trainings/:id" element={<EmployeeTrainingView user={user} />} />
            </>
          )}


        {/* Default Route */}
        <Route path="/" element={<EmployeeList />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
