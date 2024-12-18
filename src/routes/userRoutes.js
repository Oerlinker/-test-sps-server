const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');
const {Router} = require('express');

const router = Router();

router.get('/', UserController.getAll);
router.post('/',authMiddleware, UserController.create);
router.put('/:email',authMiddleware,UserController.updateUser);
router.delete('/:email',authMiddleware, UserController.deleteUser);

module.exports = router;