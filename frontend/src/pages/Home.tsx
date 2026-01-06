import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="card">
      <h1>Access Manager</h1>
      <p>Sistema de cadastro e controle de usuários</p>

      <div className="actions">
        <button onClick={() => navigate('/register')}>Cadastrar Usuário</button>
        <button onClick={() => navigate('/admin')}>Login Admin</button>
      </div>
    </div>
  )
}
