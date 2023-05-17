const superAdmin = require('../models/SuperAdmin');

const updateAdmin = (req, res) => {
  const { id } = req.params;
  const {
    email, password,
  } = req.body;

  superAdmin.findByIdAndUpdate(
    id,
    {
      email,
      password,
    },
    { new: true },
  )
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          msg: `The id ${id} was not found`,
        });
      }
      return res.status(200).json(result);
    })
    .catch((error) => res.status(500).json(error));
};

const getAllSuperAdmin = (req, res) => {
  superAdmin.find()
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: 'This are all the super admin',
          data,
        });
      }
    })
    .catch((error) => res.status(500).json({
      message: 'Error ocurred',
      error,
    }));
};
const createSuperAdmin = (req, res) => {
  const {
    email, password,
  } = req.body;
  superAdmin.create({
    email,
    password,
  })
    .then((result) => res.status(201).json({
      message: 'Super Admin created',
      result,
    }))
    .catch((error) => res.status(500).json({
      message: 'Error ocurred',
      error,
    }));
};

const getSuperAdminById = (req, res) => {
  const { id } = req.params;

  superAdmin.findById(id)
    .then((data) => {
      if (data) {
        res.status(200).json({
          message: 'Super Admin Found',
          data,
          error: false,
        });
      } else {
        res.status(404).json({
          message: 'Super Admin not found',
          error: true,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'An error ocurred',
        error: error.msg,
      });
    });
};

module.exports = {
  createSuperAdmin,
  getAllSuperAdmin,
  getSuperAdminById,
  updateAdmin,
};