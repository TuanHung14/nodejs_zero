const express = require('express');
const { getHomePage, postCreateUser, getCreateUser } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomePage);
router.get('/create-user', getCreateUser);
router.post('/create-user', postCreateUser);

module.exports = router;