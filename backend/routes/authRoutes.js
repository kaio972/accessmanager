import express from 'express';

const router = express.Router();

// Banco de dados fake
let users = [];

// Registrar usuário
router.post('/register', (req, res) => {
  const { name, email, login, password, secure } = req.body;
  const code = secure ? Math.random().toString(36).substring(2, 8) : undefined;
  const newUser = { id: Date.now(), name, email, login, password, secure, code };
  users.push(newUser);
  res.json(newUser);
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: 'Usuário ou senha inválidos' });

  // Para agora, vamos só retornar o usuário sem JWT (você arruma depois)
  res.json(user);
});

// Listar usuários (para admin)
router.get('/users', (req, res) => {
  res.json(users);
});

export default router;
