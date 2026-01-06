const db = require('../database/connection');

// GET
const getUsers = async (req, res) => {
  const [users] = await db.query(
    'SELECT id, nome, email FROM users'
  );
  res.json(users);
};

// PUT
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  await db.query(
    'UPDATE users SET nome = ?, email = ? WHERE id = ?',
    [nome, email, id]
  );

  res.json({ message: 'Usuário atualizado' });
};

// DELETE
const deleteUser = async (req, res) => {
  const { id } = req.params;

  await db.query(
    'DELETE FROM users WHERE id = ?',
    [id]
  );

  res.json({ message: 'Usuário deletado' });
};

module.exports = {
  getUsers,
  updateUser,
  deleteUser
};
