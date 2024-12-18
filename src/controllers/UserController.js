const userModels = require('../models/usersModel');

class UserController {
    static getAll(req, res) {
        const allUsers = userModels.getAll();
        return res.json(allUsers);
    }

    static create(req, res) {
        try {
            const {name, email, type, password} = req.body;
            if (!name || !email || !type || !password) {
                throw new Error('Datos incompletos');
            }
            const newUser = userModels.create({name, email, type, password});
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }

    static updateUser(req, res) {
        try {
            const {email} = req.params;
            const {name, type, password} = req.body;

            const updatedUser = userModels.update(email, {name, type, password});
            return res.json(updatedUser);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }

    static deleteUser(req, res) {
        try {
            const {email} = req.params;
            const deletedUser = userModels.delete(email);
            return res.json(deletedUser);
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }
}

module.exports = UserController;
