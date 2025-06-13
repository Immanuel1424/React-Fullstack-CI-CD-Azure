import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data);
  };

  const addUser = async () => {
    await axios.post("http://localhost:3001/users", { name, email });
    setName(""); setEmail(""); fetchUsers();
  };

  return (
    <div>
      <h1>User List</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name} ({u.email})</li>)}
      </ul>
    </div>
  );
}

export default App;