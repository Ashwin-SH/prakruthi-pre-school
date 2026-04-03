import mongoose, { Schema, models } from "mongoose";

const StudentSchema = new Schema(
  {
    // Student Details
    studentName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    bloodGroup: { type: String, default: "" },
    aadharNumber: { type: String, default: "" },
    program: { type: String, required: true },

    // Father Details
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, default: "" },
    fatherPhone: { type: String, required: true },
    fatherEmail: { type: String, default: "" },

    // Mother Details
    motherName: { type: String, required: true },
    motherOccupation: { type: String, default: "" },
    motherPhone: { type: String, default: "" },

    // Address
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },

    // Medical Info
    allergies: { type: String, default: "" },
    medicalConditions: { type: String, default: "" },
    medications: { type: String, default: "" },

    // Emergency Contact
    emergencyContactName: { type: String, required: true },
    emergencyContactRelation: { type: String, required: true },
    emergencyContactPhone: { type: String, required: true },

    // Additional
    previousSchool: { type: String, default: "" },
    transportRequired: { type: String, default: "No" },
    specialNeeds: { type: String, default: "" },
    notes: { type: String, default: "" },

    // Teacher who filled the form
    filledBy: { type: String, required: true },
  },
  { timestamps: true }
);

export const Student = models.Student || mongoose.model("Student", StudentSchema);
