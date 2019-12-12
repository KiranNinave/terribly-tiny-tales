const router = require("express").Router();
const wordController = require("../controllers/wordController");

router.route("/word/:id").get(wordController.getWords);

module.exports = router;
