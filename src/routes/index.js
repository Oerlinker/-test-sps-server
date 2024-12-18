const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const {Router} = require('express');
const router = Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
module.exports = router;
