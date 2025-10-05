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
    console.log(req.user);
    res.send(`Get the users with id: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Get the user with id: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Get the user with id: ${req.params.id}`);
  });

// Writing the user the array
const users = [{ name: "Dendup" }, { name: "Tshering" }];
//params to find the user
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
