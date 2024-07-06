import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  barcode: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  cost: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  vendor: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true,
  }
});

const inventoryModel = mongoose.model("inventory", inventorySchema);

export default inventoryModel;