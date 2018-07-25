const router = require("express").Router();
// const apiRoutes = require("./api-routes");
const dataRoutes = require("./data");

// router.use("/articles", articleRoutes);

router.use("/location", dataRoutes);

module.exports = router;