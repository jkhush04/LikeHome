const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const app = express("");
const Listing = require("./models/listing.cjs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// connect to mongodb

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
async function main() {
  await mongoose.connect("mongodb://localhost:27017/LikeHome");
}

/* app.get("/testlisting", (req, res) => {
    let sample = new Listing({
        title: "My new Villa",
        description: "by the beach",
        price: 1200,
        location: "calangute, Goa",
        country:"India",
    
    });
    sample.save();
    console.log("saved");
    res.send("successfully saved");
}); */

//index Route
app.get("/listings", async (req, res) => {
  const alllistings = await Listing.find({});
  res.render("./listings/index.ejs", { alllistings });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

//create route
app.post("/listings", async (req, res) => {
  //  const listing = new Listing(req.body);
  const listing = new Listing(req.body.listing); // if in object form data given in form is converted to object
  await listing.save();
  res.redirect("/listings");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  const listing = await Listing.findById(req.params.id);
  res.render("./listings/show.ejs", { listing });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
