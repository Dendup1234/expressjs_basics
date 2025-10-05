//Defination of the needed modules
const express = require("express");
const app = express();

//Middleware
app.use(logging);

app.set("view engine", "ejs");
app.set("views", "./views");

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
