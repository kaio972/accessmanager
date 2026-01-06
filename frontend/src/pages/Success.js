import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
export default function Success() {
    var nav = useNavigate();
    var code = localStorage.getItem('lastUserCode');
    var id = localStorage.getItem('lastUserId');
    return (_jsx("div", { className: "home", children: _jsxs("div", { className: "card", children: [_jsx("h3", { children: "\u2705 Usu\u00E1rio cadastrado com sucesso!" }), _jsxs("p", { children: ["\uD83C\uDD94 ID do usu\u00E1rio: ", id] }), code && _jsxs("p", { children: ["\uD83D\uDD10 C\u00F3digo de prote\u00E7\u00E3o: ", code] }), _jsx("button", { onClick: function () { return nav('/'); }, children: "Entendi" })] }) }));
}
    