"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [];
const handleUsers = {
    addUser(user) {
        users.push(user);
        return users;
    },
    checkUser(newUser) {
        const check = users.length > 0 ||
            users.some((users) => {
                return users.uid == newUser.uid;
            });
        return check;
    },
    getAll() {
        return users;
    },
};
exports.default = handleUsers;
//# sourceMappingURL=handleUsers.js.map