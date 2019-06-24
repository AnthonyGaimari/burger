var burger = require("../models/burger.js");

module.exports = function (app) {

    app.get("/", function (req, res) {
        burger.all(function (data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/addburger", function (req, res) {
        var cols = ['burger_name'];
        var vals = [req.body.burger];
        console.log(vals);

        burger.create(cols, vals, function (response) {
            //  res.redirect('/burgers');
            console.log(response);

        });
        console.log(req.body.burger_name);
        res.send("Burger Received, it was delicious" + req.body.burger);

    });

    app.post("/devoured", function (req, res) {        
    var cols = ['devoured'];
    var vals = [req.body.id];


        burger.update(cols, vals, function (response) {
            //  res.redirect('/burgers');
            console.log(response);

        });
        res.send("index");

    });

    app.post("/deleting", function (req, res) {

        res.render("index");

    });

};