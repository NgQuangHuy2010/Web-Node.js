const express = require('express');
const router = express.Router();

const accountController=require('../controller/admin/accountController');

router.get('/account',accountController.listAccount);
router.get('/add-account',accountController.addAccount);
router.post('/add-account',accountController.addPostAccount);
router.get('/edit-account/:id',accountController.editAccount);
router.post('/edit-account/:id',accountController.editPostAccount);
router.get('/delete-account/:id',accountController.deleteAccount);

module.exports =router;