import asyncHandler from "../middleware/asyncHandler.js";
import Quotation from "../models/quotationModel.js";
import User from "../models/userModel.js";

// @desc Fetch all quotations
// @route GET /api/quotations
// @access Public
const getQuotations = asyncHandler(async (req, res) => {
  const quotations = await Quotation.find({});
  res.json(quotations);
});

// @desc Fetch a quotation
// @route GET /api/quotation/:id
// @access Public
const getQuotationById = asyncHandler(async (req, res) => {
  const quotation = await Quotation.findById(req.params.id);

  if (quotation) {
    return res.json(quotation);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

// @desc Add a quotation
// @route POST /api/quotations
// @access Private/Admin
const createQuotation = asyncHandler(async (req, res) => {
  // 1. Get the quotation data sent from the form
  const { text, bookTitle, author } = req.body;

  // 2. Check if the user is admin
  const adminUser = await User.findOne({ isAdmin: true });

  // 2. Create a new quotation
  const quotation = await Quotation.create({
    user: adminUser,
    text,
    bookTitle,
    author,
  });

  if (quotation) {
    res.status(201).json({
      _id: adminUser._id,
      text: quotation.text,
      bookTitle: quotation.bookTitle,
      author: quotation.author,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

// @desc Delete a quotation
// @route DELETE /api/quotations/:id
// @access Private/Admin
const deleteQuotation = asyncHandler(async (req, res) => {
  const quotation = await Quotation.findById(req.params.id);

  if (quotation) {
    await Quotation.deleteOne({ _id: quotation._id });
    res.status(200).json({ message: "Quotation removed" });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getQuotations, getQuotationById, createQuotation, deleteQuotation };
