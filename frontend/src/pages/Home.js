import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.svg';
export default function Home() {
    var navigate = useNavigate();
    return (_jsx("div", { className: "container", children: _jsxs("div", { className: "card", children: [_jsx("img", { src: logo, className: "logo" }), _jsx("h1", { children: "Access Manager" }), _jsx("p", { className: "subtitle", children: "Sistema de cadastro e controle de usu\u00E1rios" }), _jsxs("div", { className: "actions", children: [_jsx("button", { onClick: function () { return navigate('/register'); }, children: "Cadastrar Usu\u00E1rio" }), _jsx("button", { className: "secondary", onClick: function () { return navigate('/admin'); }, children: "Login Admin" })] })] }) }));
}
