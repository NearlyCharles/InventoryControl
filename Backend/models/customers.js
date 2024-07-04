import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    required: true,
    type: String,
  }, 
  email: {
    required: true,
    type: String
  },
  storeCredit: {
    required: true,
    type: Number
  }
});

const customerModel = mongoose.model("customer", customerSchema);

export default customerModel;