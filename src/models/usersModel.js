const users = [
    {
        name: 'admin',
        email: 'admin@spsgroup.com.br',
        type: 'admin',
        password: '1234'
    }
];

class UserModel {
    static getAll() {
        return users;
    }

    static findByEmail(email) {
        return users.find((user) => user.email === email);
    }

    static create(userData) {
        const existingUser = this.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('El email ya existe');
        }
        users.push(userData);
        return userData;
    }

    static update(email, newData) {
        const index = users.findIndex((user) => user.email === email);
        if (index === -1) {
            throw new Error('Usuario no encontrado');
        }
        users[index] = {...users[index], ...newData};
        return users[index];
    }

    static delete(email) {
        const index = users.findIndex((user) => user.email === email);
        if (index === -1) {
            throw new Error('Usuario no encontrado');
        }
        const deletedUser = users.splice(index, 1)[0];
        return deletedUser;
    }
}

module.exports = UserModel;
