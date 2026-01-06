import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUsuario } from '../services/api'

export default function Admin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    const res = await loginUsuario(email, password)
    if (res.token) {
      localStorage.setItem('token', res.token)
      navigate('/')
    } else {
      setError('Login inválido')
    }
  }

  return (
    <div className="card">
      <h2>Login Admin</h2>

      <input placeholder="Email admin" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha admin" type="password" onChange={e => setPassword(e.target.value)} />

      <div className="actions">
        <button onClick={handleLogin}>Entrar</button>
      </div>

      {error && <div className="success" style={{ background: '#fbe9e9', color: '#e74c3c' }}>{error}</div>}
    </div>
  )
}
