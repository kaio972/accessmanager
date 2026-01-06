import { useState } from 'react';
import { addUsuario, NewUser } from '../services/api';
import '../App.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(false);
  const [success, setSuccess] = useState<NewUser | null>(null);

  const handleSubmit = async () => {
    try {
      const newUser: NewUser = { name, email, login, password, secure };
      const res = await addUsuario(newUser);
      setSuccess(res);
    } catch (err) {
      console.error('Erro ao cadastrar usuário:', err);
      alert('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Cadastrar usuário</h2>
        <input placeholder="Nome" onChange={e => setName(e.target.value)} />
        <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input placeholder="Login" onChange={e => setLogin(e.target.value)} />
        <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
        <div className="checkbox">
          <input type="checkbox" onChange={e => setSecure(e.target.checked)} />
          <span>Ativar código de proteção</span>
        </div>
        <button onClick={handleSubmit}>Cadastrar</button>

        {success && (
          <div className="success">
            Usuário cadastrado com sucesso <br />
            Nome: {success.name} <br />
            Email: {success.email} <br />
            Login: {success.login} <br />
            Código: {success.secure ? 'Ativado' : '—'}
          </div>
        )}
      </div>
    </div>
  );
}
