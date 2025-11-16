import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../axios";
import { Card, Table } from "react-bootstrap";

const PayslipView = () => {
  const { id } = useParams();
  const [payroll, setPayroll] = useState(null);

  useEffect(() => {
    api.get(`/payrolls/${id}`).then((res) => setPayroll(res.data));
  }, [id]);

  if (!payroll) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header className="bg-dark text-white">
          <h5>Payslip - {payroll.month_year}</h5>
        </Card.Header>

        <Card.Body>
          <h5>{payroll.employee.user.name}</h5>
          <p>Employee Code: {payroll.employee.employee_code}</p>

          <Table bordered>
            <tbody>
              <tr>
                <th>Basic Salary</th>
                <td>{payroll.basic_salary}</td>
              </tr>
              <tr>
                <th>Allowance</th>
                <td>{payroll.allowance_amount}</td>
              </tr>
              <tr>
                <th>Deduction</th>
                <td>{payroll.deduction_amount}</td>
              </tr>
              <tr className="table-info">
                <th>Gross Salary</th>
                <td>{payroll.gross_salary}</td>
              </tr>
              <tr className="table-success">
                <th>Net Salary</th>
                <td>{payroll.net_salary}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PayslipView;
