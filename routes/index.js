const router = require('express').Router();
const Burger = require('../models/Burger');

// let burgersObj = [
//     {
//         name: "Cheese",
//         devoured: 0
//     },
//     {
//         name: "Bacon",
//         devoured: 1
//     }
// ]

router.get("/", function (req, res) {

    Burger.find({})
        .then(function(burgersObj){
            res.render("homePage", {
                title: "My Burgers Page is the BOMB!",
                burgers: burgersObj
            })
        })
})
router.post("/change", function (req, res) {
    Burger.findByIdAndUpdate(req.body.id, {
        devoured: req.body.devoured
    }).then(function(data){
        console.log(data)
        res.redirect("/")
    })
    // for (var i = 0; i < burgersObj.length; i++) {
    //     if (req.body.name === burgers[i].name) {
    //         burgersObj.splice(i, 1)
    //     }
    // }
})
router.post("/add", function(req, res){
    Burger.create({
        name: req.body.name,
        devoured: 0
    }).then(function(data){
        console.log(data)
        res.redirect("/")
    })
})

module.exports = router;