import CustomerData from "../models/customers.js";

// add customer
export const addCustomer = async (req, res) => {
  const customer = req.body;
  const newCustomer = new CustomerData(customer);
  try {
    await newCustomer.save();
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Query All Customers Controller
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerData.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Edit Customer Controller
export const editCustomer = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedCustomer = await CustomerData.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json(updatedCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Delete Customer Controller (Additional)
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCustomer = await CustomerData.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
