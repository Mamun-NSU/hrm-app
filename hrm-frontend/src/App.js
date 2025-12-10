import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button, Offcanvas, Spinner } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import api from './Modules/axios';
import AttendanceEdit from './Modules/attendance/AttendanceEdit';
import AttendanceList from './Modules/attendance/AttendanceList';
import Login from './Modules/auth/Login';
import Profile from './Modules/auth/Profile';
import Register from './Modules/auth/Register';
import DepartmentCreate from './Modules/department/DepartmentCreate';
import DepartmentEdit from './Modules/department/DepartmentEdit';
import DepartmentList from './Modules/department/DepartmentList';
import DepartmentView from './Modules/department/DepartmentView';
import DesignationCreate from './Modules/designation/DesignationCreate';
import DesignationEdit from './Modules/designation/DesignationEdit';
import DesignationList from './Modules/designation/DesignationList';
import DesignationView from './Modules/designation/DesignationView';
import EmployeeCreate from './Modules/employees/EmployeeCreate';
import EmployeeDetails from './Modules/employees/EmployeeDetails';
import EmployeeEdit from './Modules/employees/EmployeeEdit';
import EmployeeList from './Modules/employees/EmployeeList';
import EmployeeTrainingEdit from './Modules/training/EmployeeTrainingEdit';
import EmployeeTrainingCreate from './Modules/training/EmployeeTrainingCreate';
import EmployeeTrainingList from './Modules/training/EmployeeTrainingList';
import EmployeeTrainingView from './Modules/training/EmployeeTrainingView';
import JobApplicationEdit from './Modules/job-applications/JobApplicationEdit';
import JobApplicationEmployee from './Modules/job-applications/JobApplicationEmployee';
import JobApplicationList from './Modules/job-applications/JobApplicationList';
import JobApplicationPublic from './Modules/job-applications/JobApplicationPublic';
import JobApplicationView from './Modules/job-applications/JobApplicationView';
import LeaveTypeCreate from './Modules/leave-type/LeaveTypeCreate';
import LeaveTypeEdit from './Modules/leave-type/LeaveTypeEdit';
import LeaveTypeList from './Modules/leave-type/LeaveTypeList';
import LeaveTypeView from './Modules/leave-type/LeaveTypeView';
import LeaveCreate from './Modules/leaves/LeaveCreate';
import LeaveList from './Modules/leaves/LeaveList';
import PayrollCreate from './Modules/payroll/PayrollCreate';
import PayrollEdit from './Modules/payroll/PayrollEdit';
import PayrollList from './Modules/payroll/PayrollList';
import PayslipViewer from './Modules/payroll/PayslipViewer';
import PerformanceEvaluationCreate from './Modules/performance/PerformanceEvaluationCreate';
import PerformanceEvaluationEdit from './Modules/performance/PerformanceEvaluationEdit';
import PerformanceEvaluationList from './Modules/performance/PerformanceEvaluationList';
import PerformanceEvaluationView from './Modules/performance/PerformanceEvaluationView';
import PerformanceKPICreate from './Modules/performance/PerformanceKPICreate';
import PerformanceKPIEdit from './Modules/performance/PerformanceKPIEdit';
import PerformanceKPIList from './Modules/performance/PerformanceKPIList';
import PerformanceKPIView from './Modules/performance/PerformanceKPIView';
import PublicRecruitmentList from './Modules/recruitments/PublicRecruitmentList';
import RecruitmentCreate from './Modules/recruitments/RecruitmentCreate';
import RecruitmentEdit from './Modules/recruitments/RecruitmentEdit';
import RecruitmentList from './Modules/recruitments/RecruitmentList';
import RecruitmentView from './Modules/recruitments/RecruitmentView';
import RoleCreate from './Modules/role/RoleCreate';
import RoleEdit from './Modules/role/RoleEdit';
import RoleList from './Modules/role/RoleList';
import RoleView from './Modules/role/RoleView';
import SalaryStructureCreate from './Modules/salary-structure/SalaryStructureCreate';
import SalaryStructureEdit from './Modules/salary-structure/SalaryStructureEdit';
import SalaryStructureList from './Modules/salary-structure/SalaryStructureList';
import SalaryStructureView from './Modules/salary-structure/SalaryStructureView';
import TrainingCreate from './Modules/training/TrainingCreate';
import TrainingEdit from './Modules/training/TrainingEdit';
import TrainingList from './Modules/training/TrainingList';
import TrainingView from './Modules/training/TrainingView';
import Users from './Modules/User/Users';

function AppWrapper() {
  const navigate = useNavigate();

  const [loadingUser, setLoadingUser] = useState(true);

  const [showDrawer, setShowDrawer] = useState(false);

  const [user, setUser] = useState(null);

  const toggleDrawer = () => setShowDrawer(!showDrawer);

  const isAdmin = user?.role?.name === 'Admin';

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
        <div 
          className="d-flex justify-content-center align-items-center" 
          style={{ minHeight: "100vh" }}
        >
          <Spinner animation="border" />
        </div>
      );
    }

  return (
    <>
      <ToastContainer />
      <Navbar 
        bg="dark" 
        expand="lg"
        variant="dark" 
      >
        <Container>
          <Navbar.Brand 
            as={Link} 
            to="/"
          >
            HRM App
          </Navbar.Brand>

           {isAdmin && (
            <Button 
              variant="outline-light" 
              onClick={toggleDrawer}
            >
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
        <Route path="/employees" element={<EmployeeList isAdmin={isAdmin}/>} />
        <Route path="/employees/create" element={<EmployeeCreate isAdmin={isAdmin}/>} />
        <Route path="/employees/:id/edit" element={<EmployeeEdit isAdmin={isAdmin}/>} />
        <Route path="/employees/:id" element={<EmployeeDetails isAdmin={isAdmin}/>} />

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
            <Route path="/salary-structures/:id" element={<SalaryStructureView isAdmin={isAdmin} />} />
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
            <Route path="/performance-kpis" element={<PerformanceKPIList isAdmin={isAdmin} />} />
            <Route path="/performance-kpis/create" element={<PerformanceKPICreate />} />
            <Route path="/performance-kpis/:id" element={<PerformanceKPIView />} />
            <Route path="/performance-kpis/:id/edit" element={<PerformanceKPIEdit />} />
          </>
        )}

        {user && (
          <>
            <Route path="/performance-evaluations" element={<PerformanceEvaluationList isAdmin={isAdmin} />} />
            <Route path="/performance-evaluations/:id" element={<PerformanceEvaluationView />} />
            {isAdmin && (
              <>
                <Route path="/performance-evaluations/create" element={<PerformanceEvaluationCreate />} />
                <Route path="/performance-evaluations/:id/edit" element={<PerformanceEvaluationEdit />} />
              </>
            )}
          </>
        )}

        {user && (
          <>
            <Route path="/trainings" element={<TrainingList isAdmin={isAdmin} />} />
            <Route path="/trainings/:id" element={<TrainingView isAdmin={isAdmin} />} />
            {isAdmin && (
              <>
                <Route path="/trainings/create" element={<TrainingCreate isAdmin={isAdmin} />} />
                <Route path="/trainings/:id/edit" element={<TrainingEdit isAdmin={isAdmin} />} />
              </>
            )}
          </>
          
        )}

        {user && (
          <>
            <Route path="/employee-trainings" element={<EmployeeTrainingList isAdmin={isAdmin} />} />
            <Route path="/employee-trainings/:id" element={<EmployeeTrainingView isAdmin={isAdmin} />} />
            {isAdmin && (
              <>
                <Route path="/employee-trainings/create" element={<EmployeeTrainingCreate isAdmin={isAdmin} />} />
                <Route path="/employee-trainings/:id/edit" element={<EmployeeTrainingEdit isAdmin={isAdmin} />} />
              </>
            )}
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
            <Route path="/admin/job-applications" element={<JobApplicationList isAdmin={isAdmin}/>} />
            <Route path="/admin/job-applications/:id" element={<JobApplicationView />} />
            <Route path="/admin/job-applications/:id/edit" element={<JobApplicationEdit />} />
          </>
        )}

        <Route path="/" element={<EmployeeList isAdmin={isAdmin}/>} />
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
