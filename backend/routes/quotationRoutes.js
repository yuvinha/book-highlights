import express from "express";
import {
  getQuotations,
  getQuotationById,
} from "../controllers/quotationControllers.js";

const router = express.Router();

router.route("/").get(getQuotations);
router.route("/:id").get(getQuotationById);

export default router;
