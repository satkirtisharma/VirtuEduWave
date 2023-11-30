// Import the required modules
import  express from "express";
const router = express.Router();
import {
  capturePayment,
  // verifySignature,
  verifyPayment,
  sendPaymentSuccessEmail,
} from "../controllers/payments.js";
import { auth, isInstructor, isStudent, isAdmin } from "../middleware/auth.js";
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifyPayment", auth, isStudent, verifyPayment)
router.post(
  "/sendPaymentSuccessEmail",
  auth,
  isStudent,
  sendPaymentSuccessEmail
)
// router.post("/verifySignature", verifySignature)

export default  router
