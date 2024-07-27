import asyncHandler from "../middleware/asyncHandler.js";
import Quotation from "../models/quotationModel.js";

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

export { getQuotations, getQuotationById };
