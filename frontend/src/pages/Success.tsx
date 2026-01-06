import { useNavigate } from 'react-router-dom'

export default function Success() {
  const nav = useNavigate()
  const code = localStorage.getItem('lastUserCode')
  const id = localStorage.getItem('lastUserId')

  return (
    <div className="home">
      <div className="card">
        <h3>✅ Usuário cadastrado com sucesso!</h3>
        <p>🆔 ID do usuário: {id}</p>
        {code && <p>🔐 Código de proteção: {code}</p>}
        <button onClick={() => nav('/')}>Entendi</button>
      </div>
    </div>
  )
}
