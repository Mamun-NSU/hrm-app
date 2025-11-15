import api from "../axios";

const RoleService = {
  getAll: () => api.get("/roles"),
  get: (id) => api.get(`/roles/${id}`),
  create: (data) => api.post("/roles", data),
  update: (id, data) => api.put(`/roles/${id}`, data),
  remove: (id) => api.delete(`/roles/${id}`),
};

export default RoleService;
