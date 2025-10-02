//const express = require("express");
//const ejs = require("ejs");
const mongoose = require("mongoose");
//const path = require("path");
//const app = express("");
const Listing = require("../models/listing.cjs");

const initData = require("./data.cjs");
// connect to mongodb

main().then(() => { 
    console.log("Connected to MongoDB");
    initDB();
}).catch(err => {
    console.log("Error connecting to MongoDB:", err);
});
async function main() {
    await mongoose.connect("mongodb://localhost:27017/LikeHome");
}

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Database initialized");
}