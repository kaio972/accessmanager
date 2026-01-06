import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { adminLogin, getAllUsers, validateAdminCode } from '../services/adminService';
import { deleteUser } from '../services/userService';
import '../App.css';
export default function Admin() {
    var _a = useState(''), email = _a[0], setEmail = _a[1];
    var _b = useState(''), password = _b[0], setPassword = _b[1];
    var _c = useState(false), logged = _c[0], setLogged = _c[1];
    var _d = useState([]), users = _d[0], setUsers = _d[1];
    var _e = useState(null), expandedUser = _e[0], setExpandedUser = _e[1];
    function handleLogin() {
        if (adminLogin(email, password)) {
            setLogged(true);
            setUsers(getAllUsers());
        }
        else {
            alert('Login inválido');
        }
    }
    function handleView(user) {
        if (!user.secure) {
            setExpandedUser(user.id);
            return;
        }
        var code = prompt('Digite o código do usuário');
        if (code === user.code) {
            setExpandedUser(user.id);
        }
        else {
            alert('Código incorreto');
        }
    }
    function handleDelete(id) {
        var adminCode = prompt('Digite o código do admin para excluir');
        if (!adminCode)
            return;
        if (!validateAdminCode(adminCode)) {
            alert('Código de admin inválido');
            return;
        }
        deleteUser(id);
        setUsers(getAllUsers());
    }
    if (!logged) {
        return (_jsx("div", { className: "container", children: _jsxs("div", { className: "card", children: [_jsx("h2", { children: "Login Admin" }), _jsx("input", { placeholder: "Email", onChange: function (e) { return setEmail(e.target.value); } }), _jsx("input", { placeholder: "Senha", type: "password", onChange: function (e) { return setPassword(e.target.value); } }), _jsx("button", { onClick: handleLogin, children: "Entrar" })] }) }));
    }
    return (_jsx("div", { className: "container", children: _jsxs("div", { className: "card admin-card", children: [_jsx("h2", { children: "Usu\u00E1rios cadastrados" }), users.map(function (user) { return (_jsxs("div", { className: "user-box", children: [_jsxs("div", { className: "user-header", children: [_jsx("strong", { children: user.name }), _jsxs("div", { className: "actions", children: [_jsx("button", { onClick: function () { return handleView(user); }, children: "Visualizar" }), _jsx("button", { className: "danger", onClick: function () { return handleDelete(user.id); }, children: "Excluir" })] })] }), expandedUser === user.id && (_jsxs("div", { className: "user-details", children: [_jsxs("p", { children: [_jsx("b", { children: "ID:" }), " ", user.id] }), _jsxs("p", { children: [_jsx("b", { children: "Email:" }), " ", user.email] }), _jsxs("p", { children: [_jsx("b", { children: "Login:" }), " ", user.login] }), _jsxs("p", { children: [_jsx("b", { children: "Prote\u00E7\u00E3o:" }), " ", user.secure ? 'Ativada' : 'Não'] }), user.secure && _jsxs("p", { children: [_jsx("b", { children: "C\u00F3digo:" }), " ", user.code] })] }))] }, user.id)); })] }) }));
}
