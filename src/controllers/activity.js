const Activity = require('../models/Activity');

const updateActivity = (req, res) => {
  const { id } = req.params;
  const {
    name, description, active, assignedTo,
  } = req.body;

  Activity.findByIdAndUpdate(
    id,
    {
      name,
      description,
      active,
      assignedTo,
    },
    { new: true },
  )
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: `Activity with the id: ${id} was not found, please try with another one`,
          error: true,
        });
      }
      return res.status(201).json(result);
    })
    .catch((error) => res.status(400).json(error));
};

const deleteActivity = (req, res) => {
  const { id } = req.params;

  Activity.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          message: `Activity with the id: ${id} was not found, please try with another one`,
          error: true,
        });
      }
      return res.status(204).send();
    })
    .catch((error) => res.status(400).json({
      message: 'Oops! There was an error!',
      error,
    }));
};

module.exports = {
  updateActivity,
  deleteActivity,
};
