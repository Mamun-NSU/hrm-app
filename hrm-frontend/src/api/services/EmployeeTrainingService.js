import api from "../axios";

const BASE_URL = "/employee-trainings";

const EmployeeTrainingService = {
  getAll: () => api.get(BASE_URL),
  get: (id) => api.get(`${BASE_URL}/${id}`),
  create: (data) => api.post(BASE_URL, data),
  update: (id, data) => api.put(`${BASE_URL}/${id}`, data),
  remove: (id) => api.delete(`${BASE_URL}/${id}`),
};

export default EmployeeTrainingService;
