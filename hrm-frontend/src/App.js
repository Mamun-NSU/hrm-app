import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

// Toast
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
import EmployeeView from "./api/pages/employees/EmployeeView";
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

// Attendance
import AttendanceCheck from "./api/pages/attendance/AttendanceCheck";
import AttendanceEdit from "./api/pages/attendance/AttendanceEdit";
import AttendanceList from "./api/pages/attendance/AttendanceList";

// Role
import RoleList from "./api/pages/role/RoleList";
import RoleCreate from "./api/pages/role/RoleCreate";
import RoleEdit from "./api/pages/role/RoleEdit";
import RoleView from "./api/pages/role/RoleView";





function AppWrapper() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Fetch current user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const response = await api.get("/user");
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

 const handleLogout = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      // 1. Mark check-out attendance
      await api.post(
        "/attendance",
        { type: "logout" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Failed to record check-out:", error);
    }
  }

  // 2. Remove token and navigate
  localStorage.removeItem("token");
  setUser(null);
  navigate("/login");
};


//   const logout = async () => {
//   try {
//     // First, mark attendance (check-out)
//     await api.post("/attendance/mark");

//     // Then, clear token and navigate to login
//     localStorage.removeItem("token");
//     navigate("/login");
//   } catch (error) {
//     console.error("Logout or attendance error:", error);
//     // Still allow logout even if attendance API fails
//     localStorage.removeItem("token");
//     navigate("/login");
//   }
// };

  return (
    <>
      <ToastContainer />

      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">HRM App</Navbar.Brand>
          <Nav className="me-auto">

            {/* Common Links */}
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
            <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
            <Nav.Link as={Link} to="/designations">Designations</Nav.Link>
            <Nav.Link as={Link} to="/attendance/list">Attendance List</Nav.Link>
            <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
              {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
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

        {/* Users */}
        <Route path="/users" element={<Users />} />

        {/* Employee Routes */}
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/create" element={<EmployeeCreate />} />
        <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
        {/* <Route path="/employees/:id" element={<EmployeeView />} /> */}
        <Route path="/employees/:id" element={<EmployeeDetails />} />

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

        {/* Attendance Routes */}
        <Route path="/attendance" element={<AttendanceCheck />} />
        <Route path="/attendance/:id/edit" element={<AttendanceEdit />} />
        <Route path="/attendance/list" element={<AttendanceList />} />

        {/* Roles Routes */}
        <Route path="/roles" element={<RoleList />} />
        <Route path="/roles/create" element={<RoleCreate />} />
        <Route path="/roles/:id/edit" element={<RoleEdit />} />
        <Route path="/roles/:id" element={<RoleView />} />


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




// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Navbar, Container, Nav } from "react-bootstrap";

// // Auth
// import Login from "./api/pages/auth/Login";
// import Register from "./api/pages/auth/Register";
// import Profile from "./api/pages/auth/Profile";

// // Users
// import Users from "./components/Users";

// // Employees
// import EmployeeList from "./api/pages/employees/EmployeeList";
// import EmployeeCreate from "./api/pages/employees/EmployeeCreate";
// import EmployeeEdit from "./api/pages/employees/EmployeeEdit";
// import EmployeeView from "./api/pages/employees/EmployeeView";

// // Departments
// import DepartmentList from "./api/pages/department/DepartmentList";
// import DepartmentCreate from "./api/pages/department/DepartmentCreate";
// import DepartmentEdit from "./api/pages/department/DepartmentEdit";
// import DepartmentView from "./api/pages/department/DepartmentView";

// // Designations
// import DesignationList from "./api/pages/designation/DesignationList";
// import DesignationCreate from "./api/pages/designation/DesignationCreate";
// import DesignationEdit from "./api/pages/designation/DesignationEdit";
// import DesignationView from "./api/pages/designation/DesignationView";

// // // Attendance
// import AttendanceCheck from "./api/pages/attendance/AttendanceCheck";
// import AttendanceEdit from "./api/pages/attendance/AttendanceEdit";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import AttendanceList from "./api/pages/attendance/AttendanceList";


// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Toast notifications */}
//         <ToastContainer />

//         {/* Bootstrap Navbar */}
//         <Navbar bg="dark" variant="dark" expand="lg">
//           <Container>
//             <Navbar.Brand as={Link} to="/">HRM App</Navbar.Brand>
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/login">Login</Nav.Link>
//               <Nav.Link as={Link} to="/register">Register</Nav.Link>
//               <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
//               <Nav.Link as={Link} to="/users">Users</Nav.Link>

//               {/* Employee Links */}
//               <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
//               {/* <Nav.Link as={Link} to="/employees/create">Add Employee</Nav.Link> */}

//               {/* Department Links */}
//               <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
//               {/* <Nav.Link as={Link} to="/departments/create">Add Department</Nav.Link> */}

//               {/* Designation Links */}
//               <Nav.Link as={Link} to="/designations">Designations</Nav.Link>
//               {/* <Nav.Link as={Link} to="/designations/create">Add Designation</Nav.Link> */}

//               {/* Attendance Links */}
//               {/* <Nav.Link as={Link} to="/attendance">Attendance</Nav.Link> */}
//               <Nav.Link as={Link} to="/attendance/list">Attendance List</Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>

//         {/* Routes */}
//         <Routes>
//           {/* Auth Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/profile" element={<Profile />} />

//           {/* Users */}
//           <Route path="/users" element={<Users />} />

//           {/* Employee Routes */}
//           <Route path="/employees" element={<EmployeeList />} />
//           <Route path="/employees/create" element={<EmployeeCreate />} />
//           <Route path="/employees/:id/edit" element={<EmployeeEdit />} />
//           <Route path="/employees/:id" element={<EmployeeView />} />

//           {/* Department Routes */}
//           <Route path="/departments" element={<DepartmentList />} />
//           <Route path="/departments/create" element={<DepartmentCreate />} />
//           <Route path="/departments/:id/edit" element={<DepartmentEdit />} />
//           <Route path="/departments/:id" element={<DepartmentView />} />

//           {/* Designation Routes */}
//           <Route path="/designations" element={<DesignationList />} />
//           <Route path="/designations/create" element={<DesignationCreate />} />
//           <Route path="/designations/:id/edit" element={<DesignationEdit />} />
//           <Route path="/designations/:id" element={<DesignationView />} />

//           {/* Attendance Routes */}
//           <Route path="/attendance" element={<AttendanceCheck />} />
//           <Route path="/attendance/:id/edit" element={<AttendanceEdit />} />
//           <Route path="/attendance/list" element={<AttendanceList />} />

//           {/* Default Route */}
//           <Route path="/" element={<EmployeeList />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
