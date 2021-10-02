const express = require("express");
const app = express();

const aRandomMiddleware = (req, res, next) => {
  console.log("a random middle ware called");
  next();
};

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(aRandomMiddleware);

app.get(
  "/",
  (req, res, next) => {
    console.log("middleware");
    next();
  },
  (req, res) => {
    res.status(200);
    res.send("working fine");
  }
);

app.post('/', (req, res) => {
    res.json({text: req.body})
})

app.get(
  "/admin",
  (req, res, next) => {
    if (req.query.admin == "true") {
      console.log("check in as admin");
      next();
    } else {
      res.status(400).send("admin access required");
    }
  },
  (req, res) => {
    console.log("admin logged in");
    res.status(200).send("logged in as admin");
  }
);

app.listen(3000, console.log("live on 3000"));
