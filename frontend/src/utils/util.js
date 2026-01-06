export var getUsers = function () {
    return JSON.parse(localStorage.getItem('users') || '[]');
};
export var saveUsers = function (users) {
    localStorage.setItem('users', JSON.stringify(users));
};
export var generateUserId = function () {
    return 'USR-' + Math.floor(1000 + Math.random() * 9000);
};
export var generateCode = function () {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
