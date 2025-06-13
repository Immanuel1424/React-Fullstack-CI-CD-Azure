const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "testdb",
  password: "password",
  port: 5432,
});

const getUsers = (req, res) => {
  pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const { name, email } = req.body;
  pool.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email], (error) => {
    if (error) throw error;
    res.status(201).send("User added.");
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id], (error) => {
    if (error) throw error;
    res.status(200).send("User updated.");
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM users WHERE id = $1", [id], (error) => {
    if (error) throw error;
    res.status(200).send("User deleted.");
  });
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };