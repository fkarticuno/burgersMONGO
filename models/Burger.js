const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const burgerSchema = new Schema({
    name: String,
    devoured: Boolean
})

const burger = mongoose.model("Burger", burgerSchema);

module.exports = burger;