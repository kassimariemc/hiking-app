const router = require("express").Router();
const trailRoutes = require("./trails");
const mapSearchRoutes = require("./mapSearchAPI");
const streetviewRoutes = require("./streetviewAPI");
const geocodeRoutes = require("./geocodeAPI");
const keyRoutes = require("./APIKeys");
const distanceRoutes = require("./distance")

// Trail routes
router.use("/trails", trailRoutes);
router.use("/mapSearch", mapSearchRoutes);
router.use("/streetview", streetviewRoutes);
router.use("/geocode", geocodeRoutes);
router.use("/key", keyRoutes);
router.use("/distance", distanceRoutes);

module.exports = router;
