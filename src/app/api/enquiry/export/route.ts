import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Enquiry } from "@/lib/models/Enquiry";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    await connectDB();

    const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();

    const data = enquiries.map((e, i) => ({
      "S.No": i + 1,
      "Child Name": e.childName,
      "Child Age": e.childAge,
      "Parent Name": e.parentName,
      "Phone": e.phone,
      "Email": e.email,
      "Program": e.program,
      "Message": e.message || "",
      "Date Submitted": new Date(e.createdAt).toLocaleDateString("en-IN"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);

    const colWidths = Object.keys(data[0] || {}).map((key) => ({
      wch: Math.max(key.length, 15),
    }));
    worksheet["!cols"] = colWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="Prakruthi_Enquiries_${new Date().toISOString().slice(0, 10)}.xlsx"`,
      },
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("Export error:", errMessage);
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
