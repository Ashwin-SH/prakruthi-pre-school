import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Student } from "@/lib/models/Student";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    await connectDB();

    const students = await Student.find().sort({ createdAt: -1 }).lean();

    const data = students.map((s, i) => ({
      "S.No": i + 1,
      "Student Name": s.studentName,
      "Date of Birth": s.dateOfBirth,
      "Age": s.age,
      "Gender": s.gender,
      "Blood Group": s.bloodGroup || "",
      "Aadhar Number": s.aadharNumber || "",
      "Program": s.program,
      "Father Name": s.fatherName,
      "Father Occupation": s.fatherOccupation || "",
      "Father Phone": s.fatherPhone,
      "Father Email": s.fatherEmail || "",
      "Mother Name": s.motherName,
      "Mother Occupation": s.motherOccupation || "",
      "Mother Phone": s.motherPhone || "",
      "Address": s.address,
      "City": s.city,
      "Pincode": s.pincode,
      "Allergies": s.allergies || "",
      "Medical Conditions": s.medicalConditions || "",
      "Medications": s.medications || "",
      "Emergency Contact": s.emergencyContactName,
      "Emergency Relation": s.emergencyContactRelation,
      "Emergency Phone": s.emergencyContactPhone,
      "Previous School": s.previousSchool || "",
      "Transport Required": s.transportRequired || "No",
      "Special Needs": s.specialNeeds || "",
      "Notes": s.notes || "",
      "Filled By": s.filledBy,
      "Date Submitted": new Date(s.createdAt).toLocaleDateString("en-IN"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    // Auto-width columns
    const colWidths = Object.keys(data[0] || {}).map((key) => ({
      wch: Math.max(key.length, 15),
    }));
    worksheet["!cols"] = colWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Student Records");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="Prakruthi_Student_Records_${new Date().toISOString().slice(0, 10)}.xlsx"`,
      },
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("Export error:", errMessage);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
