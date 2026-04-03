import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Student } from "@/lib/models/Student";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { studentName, dateOfBirth, age, gender, program, fatherName, fatherPhone, motherName, address, city, pincode, emergencyContactName, emergencyContactRelation, emergencyContactPhone, filledBy } = body;

    if (!studentName || !dateOfBirth || !age || !gender || !program || !fatherName || !fatherPhone || !motherName || !address || !city || !pincode || !emergencyContactName || !emergencyContactRelation || !emergencyContactPhone || !filledBy) {
      return NextResponse.json(
        { error: "Please fill all required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const student = await Student.create(body);

    return NextResponse.json(
      { message: "Student record saved successfully!", id: student._id },
      { status: 201 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("Student record error:", errMessage);
    return NextResponse.json(
      { error: "Something went wrong. Please try again.", details: errMessage },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const students = await Student.find().sort({ createdAt: -1 });
    return NextResponse.json(students);
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to fetch records", details: errMessage },
      { status: 500 }
    );
  }
}
