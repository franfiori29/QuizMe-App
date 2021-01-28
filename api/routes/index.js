const { Router } = require('express');
// import all routers;

const authRouter = require('./auth.js');

const router = Router();
router.use('/auth', authRouter);
router.use('/graphql', (req, res, next) => {
	if (req.url === '/playground') return next();
	if (!req.user) return res.sendStatus(403);
	next();
});
module.exports = router;
