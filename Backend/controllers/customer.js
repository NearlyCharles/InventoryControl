import CustomerData from "../../InventoryControl/Backend/models/customers.js";

export const addCustomer = async (req, res) => {
    const customer = req.body;
    console.log(req)
    const newCustomer = new CustomerData(customer);
    console.log(newCustomer)
    try {
      await newCustomer.save();
      res.header("Access-Control-Allow-Origin", "*");
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };