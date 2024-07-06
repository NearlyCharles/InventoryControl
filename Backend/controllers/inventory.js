import InventoryData from "../models/inventory.js";

export const addInventory = async (req, res) => {
    const item = req.body;
    const newItem = new InventoryData(item);
    try {
      await newItem.save();
      res.header("Access-Control-Allow-Origin", "*");
      res.status(201).json(newItem);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


export const getAllInventory = async (req, res) => {
    try {
        const inventory = await CustomerData.find();
        res.status(200).json(inventory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const editItem = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const updatedItem = await InventoryData.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedItem = await InventoryData.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};