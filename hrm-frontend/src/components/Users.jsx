import { useEffect, useState } from "react";
import api from "../api/axios";


export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", role_id: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle form changes
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Create or update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/users/${editingId}`, form);
        setEditingId(null);
      } else {
        await api.post("/users", { ...form, password: "default123" }); // default password
      }
      setForm({ name: "", email: "", role_id: "" });
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, role_id: user.role_id || "" });
    setEditingId(user.id);
  };

  // Delete user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await api.delete(`/users/${id}`);
      fetchUsers();
    }
  };

  return (
    <div>
      <h2>Users</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="role_id" placeholder="Role ID" value={form.role_id} onChange={handleChange} />
        <button type="submit">{editingId ? "Update User" : "Add User"}</button>
      </form>

      <table border="1" style={{ marginTop: "20px", width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role_id || "-"}</td>
              <td>
                <button onClick={() => handleEdit(u)}>Edit</button>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
