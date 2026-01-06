var users = [];
export function createUser(user) {
    users.push(user);
}
export function getUsers() {
    return users;
}
export function deleteUser(id) {
    users = users.filter(function (user) { return user.id !== id; });
}
