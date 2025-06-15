import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://13.203.229.170:5000"; // your EC2 IP with backend port

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/users`);
      setUsers(res.data);
    } catch (err) {
      console.error("Fetch error:", err.message);
    }
  };

  const addUser = async () => {
    try {
      await axios.post(`${API_URL}/users`, { name, email });
      setName("");
      setEmail("");
      fetchUsers();
    } catch (err) {
      console.error("Add error:", err.message);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} ({u.email})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

