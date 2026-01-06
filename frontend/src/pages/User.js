import { getUsuarios } from '../services/api'

useEffect(() => {
  const storedUser = localStorage.getItem('currentUser')
  if (storedUser) {
    setUser(JSON.parse(storedUser))
  } else {
    // busca do backend pelo ID do usuário
    getUsuarios().then(data => {
      const found = data.find(u => u.id === 8) 
      if (found) setUser(found)
    })
  }
}, [])
