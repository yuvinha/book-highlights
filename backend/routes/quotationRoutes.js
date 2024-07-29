import express from "express";
import {
  getQuotations,
  getQuotationById,
  createQuotation,
  deleteQuotation,
} from "../controllers/quotationControllers.js";

const router = express.Router();

router.route("/").post(createQuotation).get(getQuotations);
router.route("/:id").get(getQuotationById).delete(deleteQuotation);

export default router;
