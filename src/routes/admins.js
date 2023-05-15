const express = require('express');

const validationsAdmin = require('../validations/admins');

const controllersAdmin = require('../controllers/admins');

const router = express.Router();

router
  .post('/', validationsAdmin.validateCreation, controllersAdmin.createAdmin);

module.exports = router;
