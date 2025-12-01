import React, { useState, useEffect } from "react";
import { Button, Card, Spinner, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "./payroll.api";

const PayrollList = ({ user, isAdmin }) => {
  const [payrolls, setPayrolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPayrolls();
  }, []);

  const fetchPayrolls = async () => {
    setLoading(true);
    try {
      const response = await api.get("/payroll/list");
      let payrollData = response.data.data.payrolls;

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
      await api.delete(`/payroll/${id}/delete`);
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
        {isAdmin && (
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
                      <Button
                        variant="info"
                        size="sm"
                        className="me-2"
                        onClick={() => handlePayslip(p.id)}
                      >
                        Payslip
                      </Button>
                      {isAdmin && (
                        <>
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
