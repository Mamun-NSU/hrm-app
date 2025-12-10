import api from "../axios";

const RoleService = {
  getAll: () => api.get("/role/list"),
  create: (data) => api.post("/role/store", data),
  get: (id) => api.get(`/role/${id}/show`), 
  update: (id, data) => api.put(`/role/${id}/update`, data),
  remove: (id) => api.delete(`/role/${id}/delete`),
};

export default RoleService;
