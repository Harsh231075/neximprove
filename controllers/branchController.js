const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { z } = require('zod');
const handleError = require('../utils/handleError');

//  Schemas
const branchSchema = z.object({
  branch_code: z.string().min(2, { message: "Branch code must be at least 2 characters" }),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }),
  customerId: z.number({ required_error: "Customer ID is required" })
});

const paramSchema = z.object({
  id: z.string().regex(/^\d+$/, "ID must be a valid number")
});

const querySchema = z.object({
  customerId: z.string().regex(/^\d+$/, "Customer ID is required")
});


//  Create Branch
exports.createBranch = async (req, res) => {
  try {
    const data = branchSchema.parse(req.body); // Validate body
    const branch = await prisma.branch.create({ data });
    res.status(201).json(branch);
  } catch (error) {
    handleError(error, res);
  }
};

//  Get Branches by Customer ID
exports.getBranchesByCustomer = async (req, res) => {
  try {
    const { customerId } = querySchema.parse(req.query); // Validate query
    const branches = await prisma.branch.findMany({
      where: { customerId: parseInt(customerId) },
    });
    res.json(branches);
  } catch (error) {
    handleError(error, res);
  }
};

//  Update Branch
exports.updateBranch = async (req, res) => {
  try {
    const { id } = paramSchema.parse(req.params); // Validate param
    const data = branchSchema.omit({ customerId: true }).parse(req.body); // No need to update customerId
    const updated = await prisma.branch.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(updated);
  } catch (error) {
    handleError(error, res);
  }
};

//  Delete Branch
exports.deleteBranch = async (req, res) => {
  try {
    const { id } = paramSchema.parse(req.params); // Validate param
    const deleted = await prisma.branch.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: "Branch deleted successfully", deleted });
  } catch (error) {
    handleError(error, res);
  }
};
