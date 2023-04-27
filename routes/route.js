const router = require("express").Router();
const { main } = require("../controller/appConroller");

router.post("/user", main);

module.exports = router;
