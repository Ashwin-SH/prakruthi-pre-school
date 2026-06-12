import mongoose, { Schema, models } from "mongoose";

const EnquirySchema = new Schema(
  {
    childName: { type: String, required: true },
    childAge: { type: String, required: true },
    parentName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, default: "" },
    program: { type: String, required: true },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);

export const Enquiry = models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
