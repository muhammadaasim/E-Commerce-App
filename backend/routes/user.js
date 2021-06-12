var router = require("express").Router();
const { getUser, createUser, deleteUser } = require("../controllers/users");

router.get("/", getUser);
router.post("/", createUser);
router.delete("/:email", deleteUser);

module.exports.User = router;
