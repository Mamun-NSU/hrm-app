// src/services/EmployeeService.js
import api from "../axios";

const EmployeeService = {
  // Get all employees
  getAll: () => {
    return api.get("/employee/list");
  },

  // Get a single employee by ID
  get: (id) => {
    return api.get(`/employee/${id}/show`);
  },

  // Create a new employee
  create: (data) => {
    return api.post("/employee/store", data);
  },

  // Update an existing employee
  update: (id, data) => {
    return api.put(`/employee/${id}/update`, data);
  },

  // Delete an employee
  remove: (id) => {
    return api.delete(`/employee/${id}/delete`);
  },
};

export default EmployeeService;
