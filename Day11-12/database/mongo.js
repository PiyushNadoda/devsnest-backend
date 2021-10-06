var mongoose = require("mongoose");

var mongodb = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true
});

var db = mongoose.connection;

db.auth('admin', '987654321')

db.on("error", console.error.bind(console, "Mongodb connection error"));
