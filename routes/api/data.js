const router = require("express").Router();
const locationController = require ("../../controllers/locationController");

router
  .route("/home")

router.route('/:location')
  .post(locationController.getLocationDetails)


module.exports = router;
