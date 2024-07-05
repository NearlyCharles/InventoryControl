import express from 'express';
import { addItem, getAllInventory, editItem, deleteItem} from './controllers/customerController.js';

const router = express.Router();

router.post('/', addItem);
router.get('/', getAllInventory);
router.patch('/:id', editItem);
router.delete('/:id', deleteItem);

export default router;