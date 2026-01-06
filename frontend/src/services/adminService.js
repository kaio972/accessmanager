import { getUsers } from './userService';
var ADMIN_EMAIL = 'admin@email.com';
var ADMIN_PASSWORD = '123456';
var ADMIN_DELETE_CODE = '2010';
export function adminLogin(email, password) {
    return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}
export function getAllUsers() {
    return getUsers();
}
export function validateAdminCode(code) {
    return code === ADMIN_DELETE_CODE;
}
