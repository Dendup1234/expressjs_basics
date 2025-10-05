const express = require("express");
const router = express.Router();
//For the user
router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.render("users/form", { firstName: "test" });
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`users/${users.length - 1}`);
  } else {
    console.log("error");
    res.redirect("users/form");
  }
  console.log(req.body.firstName);
  res.send(`Hi ${req.body.firstName}`);
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
