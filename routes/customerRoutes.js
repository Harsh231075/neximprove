const express = require('express');
const router = express.Router();
const {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customerController');

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer management APIs
 */

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - gstin
 *             properties:
 *               name:
 *                 type: string
 *                 example: Global Logistics Pvt. Ltd.
 *               email:
 *                 type: string
 *                 example: global@logistics.com
 *               gstin:
 *                 type: string
 *                 example: 22AABCU9603R1ZV
 *     responses:
 *       201:
 *         description: Customer created successfully
 *       400:
 *         description: Validation error
 */
router.post('/customers', createCustomer);

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the customer
 *     responses:
 *       200:
 *         description: Customer data
 *       404:
 *         description: Customer not found
 */
router.get('/customers/:id', getCustomerById);

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the customer to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - gstin
 *             properties:
 *               name:
 *                 type: string
 *                 example: Global Ltd.
 *               email:
 *                 type: string
 *                 example: update@logistics.com
 *               gstin:
 *                 type: string
 *                 example: 22XYZCU1234R1ZX
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Customer not found
 */
router.put('/customers/:id', updateCustomer);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the customer to delete
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 */
router.delete('/customers/:id', deleteCustomer);

module.exports = router;
