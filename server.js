const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const hbs = require('express-handlebars');
app.engine("handlebars", hbs({ defaultLayout: "batman" }));
app.set("view engine", "handlebars")

const routes = require('./routes');
app.use(routes);


const mongoose = require('mongoose');
const MONGO_URI = "mongodb://localhost/testBurgers";
mongoose.connect(MONGO_URI);

const fs = require('fs');
app.get("/", function(req, res){
    fs.readFile("./views/layouts/batman.handlebars", "utf8", function(err, layout){

        fs.readFile("./views/homePage.handlebars", "utf8", function(err, page){

            layout = layout.replace("{{{body}}}", page);

            res.send(layout)

        })
    })
})

app.listen(PORT, function () {
    console.log("Listening on PORT: ", PORT)
})