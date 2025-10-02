const mongoose = require("mongoose");
const Schema = mongoose.Schema;

main().then(() => { 
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log("Error connecting to MongoDB:", err);
});
async function main() {
    await mongoose.connect("mongodb://localhost:27017/LikeHome");
}

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    filename: { type: String, required: true },
    url: { type: String, required: true },
    /*  default:"https://images.unsplash.com/photo-1699645522859-512f53d4a4bf?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1699645522859-512f53d4a4bf?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : v, */
  },
  price: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
const Listing=mongoose.model("Listing",ListingSchema);

module.exports = Listing;