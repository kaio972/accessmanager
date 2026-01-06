import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from 'react-router-dom';
export var ProtectedRoute = function (_a) {
    var children = _a.children, isAdmin = _a.isAdmin;
    var userIsAdmin = sessionStorage.getItem('isAdmin') === 'true';
    if (isAdmin && !userIsAdmin) {
        return _jsx(Navigate, { to: "/" });
    }
    return _jsx(_Fragment, { children: children });
};
