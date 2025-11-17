import React, { useState, useEffect } from "react";
import { Table, Card, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../axios";

const PayrollList = ({ user }) => {
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Debug log for user role
  console.log("=== PAYROLL LIST USER DEBUG START ===");
  console.log("User object:", user);
  console.log("User role_id:", user?.role_id);
  console.log("=== PAYROLL LIST USER DEBUG END ===");

  useEffect(() => {
    fetchPayrolls();
  }, []);

  const fetchPayrolls = async () => {
    setLoading(true);
    try {
      const response = await api.get("/payrolls");
      let payrollData = response.data;

      // If Employee (role_id !== 1), show only their own payrolls
      if (user?.role_id !== 1) {
        payrollData = payrollData.filter(
          (p) => p.employee?.user?.id === user.id
        );
      }

      setPayrolls(payrollData);
    } catch (error) {
      console.error("Failed to fetch payrolls:", error);
      toast.error("Failed to load payrolls!");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => navigate(`/payrolls/${id}/edit`);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this payroll?")) return;
    try {
      await api.delete(`/payrolls/${id}`);
      toast.success("Payroll deleted successfully!");
      fetchPayrolls();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete payroll!");
    }
  };

  const handlePayslip = (id) => navigate(`/payrolls/${id}/payslip`);

  return (
    <Card className="mt-4 shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h3>Payrolls</h3>

        {/* Show Generate Payroll only for Admin */}
        {user?.role_id === 1 && (
          <Button variant="primary" onClick={() => navigate("/payrolls/create")}>
            + Generate Payroll
          </Button>
        )}
      </Card.Header>

      <Card.Body>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee</th>
                <th>Month</th>
                <th>Gross Salary</th>
                <th>Net Salary</th>
                <th>Generated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {payrolls.length > 0 ? (
                payrolls.map((p) => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.employee?.user?.name || "N/A"}</td>
                    <td>{p.month_year}</td>
                    <td>{p.gross_salary}</td>
                    <td>{p.net_salary}</td>
                    <td>{new Date(p.generated_at).toLocaleDateString()}</td>
                    <td>
                      {/* Always show Payslip button */}
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handlePayslip(p.id)}
                      >
                        Payslip
                      </Button>

                      {/* Show Edit + Delete only if Admin */}
                      {user?.role_id === 1 && (
                        <>
                          <Button
                            variant="warning"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEdit(p.id)}
                          >
                            Edit
                          </Button>

                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(p.id)}
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No payrolls found.
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

export default PayrollList;



// import React, { useState, useEffect } from "react";
// import { Table, Card, Button, Spinner } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import api from "../../axios";

// const PayrollList = () => {
//   const [payrolls, setPayrolls] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState({ role_id: 0 }); // default role_id 0
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load authenticated user safely
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       setUser(parsedUser);
//       console.log("Logged-in user:", parsedUser);
//       console.log("User ID:", parsedUser.id);
//       console.log("User Role ID:", parsedUser.role_id);
//     } else {
//       console.log("No user found in localStorage!");
//     }

//     fetchPayrolls();
//   }, []);

//   const fetchPayrolls = async () => {
//     try {
//       const res = await api.get("/payrolls");
//       setPayrolls(res.data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch payrolls!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (id) => navigate(`/payrolls/${id}/edit`);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this payroll?")) {
//       try {
//         await api.delete(`/payrolls/${id}`);
//         toast.success("Payroll deleted successfully!");
//         fetchPayrolls();
//       } catch (err) {
//         console.error(err);
//         toast.error("Failed to delete payroll!");
//       }
//     }
//   };

//   const handlePayslip = (id) => navigate(`/payrolls/${id}/payslip`);

//   return (
//     <Card className="mt-4 shadow-sm">
//       <Card.Header className="d-flex justify-content-between align-items-center">
//         <h3>Payrolls</h3>
//         {user.role_id === 1 && (
//           <Button variant="primary" onClick={() => navigate("/payrolls/create")}>
//             + Generate Payroll
//           </Button>
//         )}
//       </Card.Header>
//       <Card.Body>
//         {loading ? (
//           <div className="d-flex justify-content-center align-items-center mt-5">
//             <Spinner animation="border" />
//           </div>
//         ) : (
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Employee</th>
//                 <th>Month</th>
//                 <th>Gross Salary</th>
//                 <th>Net Salary</th>
//                 <th>Generated At</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {payrolls.length > 0 ? (
//                 payrolls.map((p) => (
//                   <tr key={p.id}>
//                     <td>{p.id}</td>
//                     <td>{p.employee?.user?.name || "N/A"}</td>
//                     <td>{p.month_year}</td>
//                     <td>{p.gross_salary}</td>
//                     <td>{p.net_salary}</td>
//                     <td>{new Date(p.generated_at).toLocaleDateString()}</td>
//                     <td>
//                       {/* Always show Payslip button */}
//                       <Button
//                         variant="info"
//                         size="sm"
//                         className="me-2"
//                         onClick={() => handlePayslip(p.id)}
//                       >
//                         Payslip
//                       </Button>

//                       {/* Show Edit + Delete only if Admin */}
//                       {user.role_id === 1 && (
//                         <>
//                           <Button
//                             variant="warning"
//                             size="sm"
//                             className="me-2"
//                             onClick={() => handleEdit(p.id)}
//                           >
//                             Edit
//                           </Button>
//                           <Button
//                             variant="danger"
//                             size="sm"
//                             onClick={() => handleDelete(p.id)}
//                           >
//                             Delete
//                           </Button>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center">No payrolls found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         )}
//       </Card.Body>
//     </Card>
//   );
// };

// export default PayrollList;



// import React, { useState, useEffect } from "react";
// import { Table, Card, Button, Spinner } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import api from "../../axios";

// const PayrollList = () => {
//   const [payrolls, setPayrolls] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState(null); // Added user state
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load authenticated user from localStorage (or context if you use it)
//     const loggedInUser = JSON.parse(localStorage.getItem("user"));
//     setUser(loggedInUser);

//     fetchPayrolls();
//   }, []);

//   const fetchPayrolls = async () => {
//     try {
//       const res = await api.get("/payrolls");
//       setPayrolls(res.data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch payrolls!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (id) => navigate(`/payrolls/${id}/edit`);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this payroll?")) {
//       try {
//         await api.delete(`/payrolls/${id}`);
//         toast.success("Payroll deleted successfully!");
//         fetchPayrolls();
//       } catch (err) {
//         console.error(err);
//         toast.error("Failed to delete payroll!");
//       }
//     }
//   };

//   const handlePayslip = (id) => navigate(`/payrolls/${id}/payslip`);

//   return (
//     <Card className="mt-4 shadow-sm">
//       <Card.Header className="d-flex justify-content-between align-items-center">
//         <h3>Payrolls</h3>
//         {user?.role_id === 1 && (
//           <Button variant="primary" onClick={() => navigate("/payrolls/create")}>
//             + Generate Payroll
//           </Button>
//         )}
//       </Card.Header>
//       <Card.Body>
//         {loading ? (
//           <div className="d-flex justify-content-center align-items-center mt-5">
//             <Spinner animation="border" />
//           </div>
//         ) : (
//           <Table striped bordered hover responsive>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Employee</th>
//                 <th>Month</th>
//                 <th>Gross Salary</th>
//                 <th>Net Salary</th>
//                 <th>Generated At</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {payrolls.length > 0 ? (
//                 payrolls.map((p) => (
//                   <tr key={p.id}>
//                     <td>{p.id}</td>
//                     <td>{p.employee?.user?.name || "N/A"}</td>
//                     <td>{p.month_year}</td>
//                     <td>{p.gross_salary}</td>
//                     <td>{p.net_salary}</td>
//                     <td>{new Date(p.generated_at).toLocaleDateString()}</td>
//                     <td>
//                       {/* Always show Payslip button */}
//                       <Button
//                         variant="info"
//                         size="sm"
//                         className="me-2"
//                         onClick={() => handlePayslip(p.id)}
//                       >
//                         Payslip
//                       </Button>

//                       {/* Show Edit + Delete only if Admin */}
//                       {user?.role_id === 1 && (
//                         <>
//                           <Button
//                             variant="warning"
//                             size="sm"
//                             className="me-2"
//                             onClick={() => handleEdit(p.id)}
//                           >
//                             Edit
//                           </Button>

//                           <Button
//                             variant="danger"
//                             size="sm"
//                             onClick={() => handleDelete(p.id)}
//                           >
//                             Delete
//                           </Button>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center">No payrolls found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         )}
//       </Card.Body>
//     </Card>
//   );
// };

// export default PayrollList;
