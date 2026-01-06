const apiBase = "http://localhost:3001/users";

const listaUsuarios = document.getElementById("listaUsuarios");
const formUsuario = document.getElementById("formUsuario");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");

// Função para listar usuários
async function listarUsuarios() {
  try {
    const response = await fetch(apiBase);
    const usuarios = await response.json();

    listaUsuarios.innerHTML = "";
    usuarios.forEach((u) => {
      const li = document.createElement("li");
      li.textContent = `${u.id} - ${u.nome} (${u.email})`;
      listaUsuarios.appendChild(li);
    });
  } catch (error) {
    console.error("Erro ao listar usuários:", error);
  }
}

// Função para adicionar usuário
formUsuario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nome = inputNome.value.trim();
  const email = inputEmail.value.trim();

  if (!nome || !email) return alert("Preencha todos os campos");

  try {
    const response = await fetch(apiBase, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email }),
    });

    if (!response.ok) throw new Error("Erro ao adicionar usuário");

    const novoUsuario = await response.json();
    console.log("Usuário adicionado:", novoUsuario);

    inputNome.value = "";
    inputEmail.value = "";
    listarUsuarios();
  } catch (error) {
    console.error(error.message);
  }
});

// Lista usuários ao carregar a página
listarUsuarios();
