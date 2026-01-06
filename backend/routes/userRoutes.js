const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.json(users);
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.json({ message: "Usuário criado" });
});

router.put("/:id", (req, res) => {
  res.json({ message: "Usuário atualizado" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Usuário removido" });
});

module.exports = router;
