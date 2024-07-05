import express from 'express';
import { addCustomer, getAllCustomers, editCustomer, deleteCustomer } from './controllers/customerController.js';

const router = express.Router();

router.post('/', addCustomer);
router.get('/', getAllCustomers);
router.patch('/:id', editCustomer);
router.delete('/:id', deleteCustomer);

export default router;