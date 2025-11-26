import api from "../axios";

const EmployeeService = {
 
  getAll: () => {
    return api.get("/employee/list");
  },
  get: (id) => {
    return api.get(`/employee/${id}/show`);
  },
  create: (data) => {
    return api.post("/employee/store", data);
  },
  update: (id, data) => {
    return api.put(`/employee/${id}/update`, data);
  },
  remove: (id) => {
    return api.delete(`/employee/${id}/delete`);
  },
};

export default EmployeeService;
