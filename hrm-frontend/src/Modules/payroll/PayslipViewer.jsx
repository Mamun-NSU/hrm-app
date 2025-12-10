import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, Container, Spinner } from "react-bootstrap";
import api from "./payroll.api";

const PayslipViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [payroll, setPayroll] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayroll = async () => {
      try {
        const res = await api.get(`/payroll/${id}/show`);
        setPayroll(res.data.data.payroll);
      } catch (err) {
        console.error("Failed to fetch payroll:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPayroll();
  }, [id]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  if (!payroll) return <p className="text-center mt-4">Payslip not found.</p>;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4">Payslip Details</h3>
        <p><strong>Employee:</strong> {payroll.employee?.employee_code ?? "—"}</p>
        <p><strong>Month:</strong> {payroll.month_year}</p>
        <p><strong>Gross Salary:</strong> {payroll.gross_salary}</p>
        <p><strong>Net Salary:</strong> {payroll.net_salary}</p>
        <p><strong>Generated At:</strong> {new Date(payroll.generated_at).toLocaleDateString()}</p>

        <Button
          variant="primary"
          className="w-100 mt-3"
          onClick={() => navigate("/payrolls")}
        >
          Back to List
        </Button>
      </Card>
    </Container>
  );
};

export default PayslipViewer;
