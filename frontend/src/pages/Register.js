import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { createUser } from '../services/userService';
import '../App.css';
export default function Register() {
    var _a;
    var _b = useState(''), name = _b[0], setName = _b[1];
    var _c = useState(''), email = _c[0], setEmail = _c[1];
    var _d = useState(''), login = _d[0], setLogin = _d[1];
    var _e = useState(''), password = _e[0], setPassword = _e[1];
    var _f = useState(false), secure = _f[0], setSecure = _f[1];
    var _g = useState(null), success = _g[0], setSuccess = _g[1];
    function handleSubmit() {
        var newUser = {
            id: Date.now(),
            name: name,
            email: email,
            login: login,
            password: password,
            secure: secure,
            code: secure ? Math.random().toString(36).substring(2, 8) : undefined
        };
        createUser(newUser);
        setSuccess(newUser);
    }
    return (_jsx("div", { className: "container", children: _jsxs("div", { className: "card", children: [_jsx("h2", { children: "Cadastrar usu\u00E1rio" }), _jsx("input", { placeholder: "Nome", onChange: function (e) { return setName(e.target.value); } }), _jsx("input", { placeholder: "Email", onChange: function (e) { return setEmail(e.target.value); } }), _jsx("input", { placeholder: "Login", onChange: function (e) { return setLogin(e.target.value); } }), _jsx("input", { placeholder: "Senha", type: "password", onChange: function (e) { return setPassword(e.target.value); } }), _jsxs("div", { className: "checkbox", children: [_jsx("input", { type: "checkbox", onChange: function (e) { return setSecure(e.target.checked); } }), _jsx("span", { children: "Ativar c\u00F3digo de prote\u00E7\u00E3o" })] }), _jsx("button", { onClick: handleSubmit, children: "Cadastrar" }), success && (_jsxs("div", { className: "success", children: ["Usu\u00E1rio cadastrado com sucesso ", _jsx("br", {}), "ID: ", success.id, " ", _jsx("br", {}), "C\u00F3digo: ", (_a = success.code) !== null && _a !== void 0 ? _a : '—'] }))] }) }));
}
