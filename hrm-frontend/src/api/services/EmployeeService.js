// src/services/EmployeeService.js
import api from "../axios";

const EmployeeService = {
  // Get all employees
  getAll: () => {
    return api.get("/employees");
  },

  // Get a single employee by ID
  get: (id) => {
    return api.get(`/employees/${id}`);
  },

  // Create a new employee
  create: (data) => {
    return api.post("/employees", data);
  },

  // Update an existing employee
  update: (id, data) => {
    return api.put(`/employees/${id}`, data);
  },

  // Delete an employee
  remove: (id) => {
    return api.delete(`/employees/${id}`);
  },
};

export default EmployeeService;
