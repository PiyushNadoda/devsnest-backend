const express = require("express");
const path = require("path");
const app = express();

// set views before setting view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", (req, res, next) => {
  console.log("starting log");
  //   res.sendFile(path.join(__dirname, "public/file.txt"), "text.txt");
  //   res.download(path.join(__dirname, "public/file.txt"), "download.txt")
  //   res.render('index', {title: "express"})
  res
    .status(201)
    .cookie("token", "001", {
      expires: new Date(Date.now() + 8 * 360000),
    })
    .cookie("name", "piyush")
    .redirect(301, "/admin");
});

app.listen(3000, console.log(`listening to port 3000`));
