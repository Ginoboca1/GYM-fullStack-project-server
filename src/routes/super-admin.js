const express = require('express');

const controllersSuperAdmin = require('../controllers/super-admin');

const superAdminValidation = require('../validations/super-admin');

const router = express.Router();

router
  .get('/', controllersSuperAdmin.getAllSuperAdmin)
  .get('/:id', controllersSuperAdmin.getSuperAdminById)
  .post('/', superAdminValidation.createSuperAdminValidation, controllersSuperAdmin.createSuperAdmin);

module.exports = router;
