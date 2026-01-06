import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../types/User'

const UserPage: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  if (!user) return <p>Usuário não encontrado.</p>

  return (
    <div>
      <div className="header">
        
        <button onClick={() => navigate('/')}>Tela inicial</button>
      </div>

      <div className="container">
        <div className="card">
          <h3>Meus dados</h3>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Login:</strong> {user.login}</p>
          {user.secure && <p>Código de proteção: {user.code}</p>}
        </div>
      </div>
    </div>
  )
}

export default UserPage
