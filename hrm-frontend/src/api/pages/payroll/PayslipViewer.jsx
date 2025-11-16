import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import api from "../../axios";

const PayslipViewer = () => {
  const { id } = useParams();
  const [payroll, setPayroll] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/payrolls/${id}`).then((res) => setPayroll(res.data)).finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Spinner animation="border" className="mt-5 d-block mx-auto" />;

  if (!payroll) return <p className="text-center mt-4">Payslip not found.</p>;

  return (
    <Card className="mt-4 p-4 shadow-sm">
      <h4>Payslip for {payroll.employee?.user?.name}</h4>
      <p><strong>Month:</strong> {payroll.month_year}</p>
      <p><strong>Gross Salary:</strong> {payroll.gross_salary}</p>
      <p><strong>Net Salary:</strong> {payroll.net_salary}</p>
      <p><strong>Generated At:</strong> {new Date(payroll.generated_at).toLocaleDateString()}</p>
    </Card>
  );
};

export default PayslipViewer;
