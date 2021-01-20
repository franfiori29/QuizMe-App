const { Router } = require('express');
// import all routers;

const authRouter = require('./auth.js');

const router = Router();
router.use('/auth', authRouter);

module.exports = router;
