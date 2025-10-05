//Defination of the needed modules
const express = require("express");
const app = express();

//Middleware
app.use(logging);
app.use(express.static("public"));
app.set("view engine", "ejs");
//Helps to read the objects inside the url
app.use(express.urlencoded({ extended: true }));

//For the root directory
app.get("/", (req, res) => {
  console.log("here");
  res.render("index", { text: "world" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

//Creating a logout function
function logging(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(3001);
