const express = require('express');
const router = express.Router();
const {
  createBranch,
  getBranchesByCustomer,
  updateBranch,
  deleteBranch
} = require('../controllers/branchController');

/**
 * @swagger
 * tags:
 *   name: Branches
 *   description: Branch management APIs
 */

/**
 * @swagger
 * /branches:
 *   post:
 *     summary: Create a new branch
 *     tags: [Branches]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - branch_code
 *               - location
 *               - customerId
 *             properties:
 *               branch_code:
 *                 type: string
 *                 example: DEL001
 *               location:
 *                 type: string
 *                 example: Delhi
 *               customerId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Branch created successfully
 *       400:
 *         description: Validation error
 */
router.post('/branches', createBranch);

/**
 * @swagger
 * /branches:
 *   get:
 *     summary: Get branches by customer ID
 *     tags: [Branches]
 *     parameters:
 *       - in: query
 *         name: customerId
 *         required: true
 *         schema:
 *           type: string
 *         description: Customer ID to filter branches
 *     responses:
 *       200:
 *         description: List of branches for the specified customer
 *       400:
 *         description: Validation error
 *       404:
 *         description: No branches found for the specified customer
 */
router.get('/branches', getBranchesByCustomer);

/**
 * @swagger
 * /branches/{id}:
 *   put:
 *     summary: Update an existing branch
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the branch to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - branch_code
 *               - location
 *             properties:
 *               branch_code:
 *                 type: string
 *                 example: MUM002
 *               location:
 *                 type: string
 *                 example: Mumbai
 *     responses:
 *       200:
 *         description: Branch updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Branch not found
 */
router.put('/branches/:id', updateBranch);

/**
 * @swagger
 * /branches/{id}:
 *   delete:
 *     summary: Delete a branch
 *     tags: [Branches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the branch to delete
 *     responses:
 *       200:
 *         description: Branch deleted successfully
 *       404:
 *         description: Branch not found
 */
router.delete('/branches/:id', deleteBranch);

module.exports = router;
