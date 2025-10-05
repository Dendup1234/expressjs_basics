const express = require("express");
const router = express.Router();
//For the user
router.get("/", (req, res) => {
  res.send("User list");
});

router.post("/", (req, res) => {
  res.send("Add a new user");
});

//router to combine all the methods

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get the user with id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get the user with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get the user with id: ${req.params.id}`);
  });
module.exports = router;
