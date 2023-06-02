const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const authenticationMiddleware = require('../middleware/authentication');

router.get('/', authenticationMiddleware.authenticateToken, postsController.getPosts);

module.exports = router;
