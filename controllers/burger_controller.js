var burger = require("../models/burger.js");

module.exports = function (app) {

    app.get("/", function (req, res) {

        res.render("index");

    });

    app.post("/addburger", function (req, res) {

        console.log(req.body);
        res.send("Burger Received, it was delicious" + req.body.burger);

    });

    app.post("/eating", function (req, res) {

        res.render("index");

    });

    app.post("/deleting", function (req, res) {

        res.render("index");

    });

};