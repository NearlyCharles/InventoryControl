import express from 'express';
import { addInventory, getAllInventory, editItem, deleteItem} from '../controllers/inventory.js';

const router = express.Router();

router.post('/', addInventory);
router.get('/', getAllInventory);
router.patch('/:id', editItem);
router.delete('/:id', deleteItem);

export default router;