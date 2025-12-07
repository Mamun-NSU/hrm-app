import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button, Offcanvas, Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import api from "./api/axios";
import Login from "./api/pages/auth/Login";
import Register from "./api/pages/auth/Register";
import Profile from "./api/pages/auth/Profile";
import Users from "./api/pages/User/Users";
import EmployeeList from "./api/pages/employees/EmployeeList";
import EmployeeCreate from "./api/pages/employees/EmployeeCreate";
import EmployeeEdit from "./api/pages/employees/EmployeeEdit";
import EmployeeDetails from "./api/pages/employees/EmployeeDetails";
import DepartmentList from "./api/pages/department/DepartmentList";
import DepartmentCreate from "./api/pages/department/DepartmentCreate";
import DepartmentEdit from "./api/pages/department/DepartmentEdit";
import DepartmentView from "./api/pages/department/DepartmentView";
import DesignationList from "./api/pages/designation/DesignationList";
import DesignationCreate from "./api/pages/designation/DesignationCreate";
import DesignationEdit from "./api/pages/designation/DesignationEdit";
import DesignationView from "./api/pages/designation/DesignationView";
import SalaryStructureList from "./api/pages/salary-structure/SalaryStructureList";
import SalaryStructureCreate from "./api/pages/salary-structure/SalaryStructureCreate";
import SalaryStructureEdit from "./api/pages/salary-structure/SalaryStructureEdit";
import SalaryStructureView from "./api/pages/salary-structure/SalaryStructureView";
import AttendanceEdit from "./api/pages/attendance/AttendanceEdit";
import AttendanceList from "./api/pages/attendance/AttendanceList";
import RoleList from "./api/pages/role/RoleList";
import RoleCreate from "./api/pages/role/RoleCreate";
import RoleEdit from "./api/pages/role/RoleEdit";
import RoleView from "./api/pages/role/RoleView";
import PayrollList from "./api/pages/payroll/PayrollList";
import PayrollCreate from "./api/pages/payroll/PayrollCreate";
import PayrollEdit from "./api/pages/payroll/PayrollEdit";
import PayslipViewer from "./api/pages/payroll/PayslipViewer";
import LeaveList from "./api/pages/leaves/LeaveList";
import LeaveCreate from "./api/pages/leaves/LeaveCreate";
import LeaveTypeList from "./api/pages/leave-type/LeaveTypeList";
import LeaveTypeCreate from "./api/pages/leave-type/LeaveTypeCreate";
import LeaveTypeView from "./api/pages/leave-type/LeaveTypeView";
import LeaveTypeEdit from "./api/pages/leave-type/LeaveTypeEdit";
import PerformanceKPIList from "./api/pages/performance/PerformanceKPIList";
import PerformanceKPICreate from "./api/pages/performance/PerformanceKPICreate";
import PerformanceKPIEdit from "./api/pages/performance/PerformanceKPIEdit";
import PerformanceKPIView from "./api/pages/performance/PerformanceKPIView";
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
import RecruitmentList from "./api/pages/recruitments/RecruitmentList";
import RecruitmentCreate from "./api/pages/recruitments/RecruitmentCreate";
import RecruitmentEdit from "./api/pages/recruitments/RecruitmentEdit";
import RecruitmentView from "./api/pages/recruitments/RecruitmentView";
import JobApplicationList from "./api/pages/job-applications/JobApplicationList";
import JobApplicationEdit from "./api/pages/job-applications/JobApplicationEdit";
import JobApplicationView from "./api/pages/job-applications/JobApplicationView";
import JobApplicationEmployee from "./api/pages/job-applications/JobApplicationEmployee";
import JobApplicationPublic from "./api/pages/job-applications/JobApplicationPublic";
import PublicRecruitmentList from "./api/pages/recruitments/PublicRecruitmentList";

function AppWrapper() {

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const isAdmin = user?.role?.name === "Admin";

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setLoadingUser(false);
        return;
      }

      try {
        const response = await api.get("/about/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const loggedUser = response?.data?.data?.user ?? null;
        setUser(loggedUser);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setUser(null);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();

    const handleStorageChange = () => fetchUser();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogout = async () => {
  const token = localStorage.getItem("token");
    if (token) {
      try {
        await api.post(
          "/attendance/store",
          { type: "logout" },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (error) {
        console.error("Failed to record check-out:", error);
        toast.warning("Logout attendance could not be recorded.");
      }
    }
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    toast.success("You have logged out successfully.");
  };

    if (loadingUser) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Spinner animation="border" />
        </div>
      );
    }

  return (
    <>
      <ToastContainer />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">HRM App</Navbar.Brand>

           {isAdmin && (
            <Button variant="outline-light" onClick={toggleDrawer}>
              Menus
            </Button>
          )}
          <Nav className="me-auto">
            {isAdmin && (
              <>
                {/* <Nav.Link as={Link} to="/users">Users</Nav.Link> */}
                {/* <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
                <Nav.Link as={Link} to="/designations">Designations</Nav.Link>
                <Nav.Link as={Link} to="/roles">Roles</Nav.Link> */}
                {/* <Nav.Link as={Link} to="/salary-structures">Salary Structures</Nav.Link> */}
                <Nav.Link as={Link} to="/payrolls">Payroll Management</Nav.Link>
                <Nav.Link as={Link} to="/leaves">Leaves Requests</Nav.Link>
                {/* <Nav.Link as={Link} to="/performance-kpis">P. KPIs</Nav.Link> */}
                <Nav.Link as={Link} to="/performance-evaluations">P. Evaluations</Nav.Link>
                {/* <Nav.Link as={Link} to="/trainings">Trainings</Nav.Link> */}
                <Nav.Link as={Link} to="/employee-trainings">E. Trainings</Nav.Link>
                <Nav.Link as={Link} to="/recruitments">Job Posts</Nav.Link>
                <Nav.Link as={Link} to="/admin/job-applications">Applications</Nav.Link>
              </>
            )}

            {user && (
              <>
              <Nav.Link as={Link} to="/attendance/list">Attendance List</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              </>
            )}

            {!isAdmin && user && (
              <>
              <Nav.Link as={Link} to="/leaves">My Leaves</Nav.Link>
              <Nav.Link as={Link} to="/payrolls">My Payrolls</Nav.Link>
              <Nav.Link as={Link} to="/performance-evaluations">My P.E.</Nav.Link>
              <Nav.Link as={Link} to="/employee-trainings">My Trainings</Nav.Link>
              <Nav.Link as={Link} to="/public-recruitments">Open Job Posts</Nav.Link>
              <Nav.Link as={Link} to="/job-applications">My Applications</Nav.Link> 
              {/* <Nav.Link as={Link} to="/job-applications/public">Apply Now</Nav.Link> */}
              </>
            )}

             {/* Common Menu */}
            <Nav.Link as={Link} to="/employees">Employees</Nav.Link>

            {!user ? (
              <>
                <Nav.Link as={Link} to="/public-recruitments">Open Job Posts</Nav.Link>
                {/* <Nav.Link as={Link} to="/job-applications/public">Apply Now</Nav.Link> */}
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

      <Offcanvas show={showDrawer} onHide={toggleDrawer} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/users">Users</Nav.Link>
            <Nav.Link as={Link} to="/salary-structures">Salary Structures</Nav.Link>
            <Nav.Link as={Link} to="/payrolls">Payroll Management</Nav.Link>
            <Nav.Link as={Link} to="/recruitments">Job Posts</Nav.Link>
            <Nav.Link as={Link} to="/admin/job-applications">Applications</Nav.Link>
            <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
            <Nav.Link as={Link} to="/designations">Designations</Nav.Link>
            <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
            <Nav.Link as={Link} to="/leaves">Leaves Requests</Nav.Link>
            <Nav.Link as={Link} to="/leave-types">Leave Types</Nav.Link>
            <Nav.Link as={Link} to="/performance-kpis">Performance KPIs</Nav.Link>
            <Nav.Link as={Link} to="/performance-evaluations">Performance Evaluations</Nav.Link>
            <Nav.Link as={Link} to="/trainings">Trainings</Nav.Link>
            <Nav.Link as={Link} to="/employee-trainings">Employee Trainings</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        {isAdmin && <Route path="/users" element={<Users />} />}
        <Route path="/employees" element={<EmployeeList user={user} isAdmin={isAdmin}/>} />
        <Route path="/employees/create" element={<EmployeeCreate isAdmin={isAdmin}/>} />
        <Route path="/employees/:id/edit" element={<EmployeeEdit user={user} isAdmin={isAdmin}/>} />
        <Route path="/employees/:id" element={<EmployeeDetails user={user} isAdmin={isAdmin}/>} />

        {isAdmin && (
          <>
            <Route path="/departments" element={<DepartmentList />} />
            <Route path="/departments/create" element={<DepartmentCreate />} />
            <Route path="/departments/:id/edit" element={<DepartmentEdit />} />
            <Route path="/departments/:id" element={<DepartmentView />} />
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/designations" element={<DesignationList />} />
            <Route path="/designations/create" element={<DesignationCreate />} />
            <Route path="/designations/:id/edit" element={<DesignationEdit />} />
            <Route path="/designations/:id" element={<DesignationView />} />
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/roles" element={<RoleList />} />
            <Route path="/roles/create" element={<RoleCreate />} />
            <Route path="/roles/:id/edit" element={<RoleEdit />} />
            <Route path="/roles/:id" element={<RoleView />} />
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/salary-structures" element={<SalaryStructureList />} />
            <Route path="/salary-structures/create" element={<SalaryStructureCreate />} />
            <Route path="/salary-structures/:id/edit" element={<SalaryStructureEdit />} />
            <Route path="/salary-structures/:id" element={<SalaryStructureView user={user} isAdmin={isAdmin} />} />
          </>
        )}

        <Route path="/attendance/:id/edit" element={<AttendanceEdit isAdmin={isAdmin} />} />
        <Route path="/attendance/list" element={<AttendanceList isAdmin={isAdmin} />} />

        {user && (
          <>
            <Route path="/leaves" element={<LeaveList user={user} isAdmin={isAdmin} />} />
            {["Employee", "Manager"].includes(user?.role?.name) && (
              <Route path="/leaves/create" element={<LeaveCreate />} />
            )}
          </>
        )}

        {isAdmin && (
          <>
          <Route path="/leave-types" element={<LeaveTypeList />} />
          <Route path="/leave-types/create" element={<LeaveTypeCreate />} />
          <Route path="/leave-types/:id" element={<LeaveTypeView />} />
          <Route path="/leave-types/:id/edit" element={<LeaveTypeEdit />} />
          </>
        )}

        {user && (
          <>
          <Route path="/payrolls/:id/edit" element={<PayrollEdit />} />
          <Route path="/payrolls/:id/payslip" element={<PayslipViewer />} />
          <Route path="/payrolls" element={<PayrollList user={user} isAdmin={isAdmin} />} />
          {isAdmin && <Route path="/payrolls/create" element={<PayrollCreate />} />}
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/performance-kpis" element={<PerformanceKPIList user={user} />} />
            <Route path="/performance-kpis/create" element={<PerformanceKPICreate />} />
            <Route path="/performance-kpis/:id" element={<PerformanceKPIView />} />
            <Route path="/performance-kpis/:id/edit" element={<PerformanceKPIEdit />} />
          </>
        )}

        {user && (
          <>
            {isAdmin && (
              <>
                <Route path="/performance-evaluations" element={<PerformanceEvaluationList user={user} isAdmin={isAdmin} />} />
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

        {user && (
          <>
            {isAdmin && (
              <>
                <Route path="/trainings" element={<TrainingList user={user} isAdmin={isAdmin} />} />
                <Route path="/trainings/create" element={<TrainingCreate user={user} />} />
                <Route path="/trainings/:id/edit" element={<TrainingEdit user={user} />} />
              </>
            )}
            {!isAdmin && (
              <Route path="/trainings" element={<TrainingList user={user} />} /> 
            )}
            <Route path="/trainings/:id" element={<TrainingView user={user} isAdmin={isAdmin} />} />
          </>
          
        )}

        {user && (
          <>
            {isAdmin && (
              <>
                <Route path="/employee-trainings" element={<EmployeeTrainingList user={user} isAdmin={isAdmin} />} />
                <Route path="/employee-trainings/create" element={<EmployeeTrainingCreate user={user} />} />
                <Route path="/employee-trainings/:id/edit" element={<EmployeeTrainingEdit user={user} />} />
              </>
            )}
            {!isAdmin && (
              <Route path="/employee-trainings" element={<EmployeeTrainingList user={user} />} />
            )}
            <Route path="/employee-trainings/:id" element={<EmployeeTrainingView user={user} isAdmin={isAdmin} />} />
          </>
        )}

          <Route path="/public-recruitments" element={<PublicRecruitmentList user={user} isAdmin={isAdmin} />} />
          <Route path="/recruitments/:id" element={<RecruitmentView user={user} />} />

          {isAdmin && (
            <>
              <Route path="/recruitments" element={<RecruitmentList />} />
              <Route path="/recruitments/create" element={<RecruitmentCreate />} />
              <Route path="/recruitments/:id/edit" element={<RecruitmentEdit />} />
            </>
          )}

        {user && (
          <>    
            <Route path="/job-applications" element={<JobApplicationList />} />
            <Route path="/employee/job-applications" element={<JobApplicationEmployee />} />
          </>
        )}

        {!user && (
          <>
            <Route path="/job-applications/public" element={<JobApplicationPublic />} />
          </>
        )}

        {isAdmin && (
          <>
            <Route path="/admin/job-applications" element={<JobApplicationList user={user} isAdmin={isAdmin}/>} />
            <Route path="/admin/job-applications/:id" element={<JobApplicationView />} />
            <Route path="/admin/job-applications/:id/edit" element={<JobApplicationEdit />} />
          </>
        )}

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
