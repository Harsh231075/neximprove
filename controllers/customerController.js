const { PrismaClient } = require('@prisma/client');
const { z } = require('zod');
const handleError = require("../utils/handleError");

const prisma = new PrismaClient();

//  Zod Schema for Validation
const customerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email format" }),
  gstin: z.string().min(5, { message: "GSTIN must be at least 5 characters" })
});

const paramSchema = z.object({
  id: z.coerce.number({
    required_error: "ID is required",
    invalid_type_error: "ID must be a number",
  }).int("ID must be an integer").positive("ID must be positive"),
});

//  Create Customer
exports.createCustomer = async (req, res) => {
  try {
    const data = customerSchema.parse(req.body);
    const customer = await prisma.customer.create({ data });
    res.status(201).json(customer);
  } catch (error) {
    handleError(error, res);
  }
};

//  Get Customer
exports.getCustomerById = async (req, res) => {
  try {

    const { id } = paramSchema.parse(req.params);
    const customer = await prisma.customer.findUnique({
      where: { id: parseInt(id) },
      include: { branches: true }
    });
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {

    handleError(error, res);
  };
}

//  Update Customer
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = paramSchema.parse(req.params);
    const data = customerSchema.parse(req.body);
    const updated = await prisma.customer.update({
      where: { id },
      data
    });
    res.json(updated);
  } catch (error) {
    handleError(error, res);
  }
};

//  Delete
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = paramSchema.parse(req.params);
    await prisma.customer.delete({ where: { id } });
    res.json({ message: "Customer deleted" });
  } catch (error) {
    handleError(error, res);
  }
};
