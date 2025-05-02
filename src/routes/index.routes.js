const {Router} = require("express")
const {indexcontroller, homeController, createUser, getUserController} = require("../controller/index.controller")
const router = Router();

router.get("/", indexcontroller)
router.get("/home", homeController)
router.post("/create-user", createUser)
router.get("get-all", getUserController)
// router.post("/create-user", )

module.exports = router