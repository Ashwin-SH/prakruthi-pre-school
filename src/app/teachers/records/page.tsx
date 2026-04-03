"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaPlus, FaChild, FaPhone, FaSearch, FaFileExcel } from "react-icons/fa";

interface Student {
  _id: string;
  studentName: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  program: string;
  fatherName: string;
  fatherPhone: string;
  motherName: string;
  city: string;
  filledBy: string;
  createdAt: string;
}

export default function RecordsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/student")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = students.filter(
    (s) =>
      s.studentName?.toLowerCase().includes(search.toLowerCase()) ||
      s.fatherName?.toLowerCase().includes(search.toLowerCase()) ||
      s.motherName?.toLowerCase().includes(search.toLowerCase()) ||
      s.fatherPhone?.includes(search)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/teachers" className="text-gray-400 hover:text-primary transition-colors">
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Student Records</h1>
              <p className="text-sm text-gray-500">{students.length} total records</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/api/student/export"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <FaFileExcel /> Download Excel
            </a>
            <Link
              href="/teachers"
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <FaPlus /> Add New
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search */}
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by student name, parent name, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white shadow-sm"
          />
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading records...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <FaChild className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              {search ? "No matching records found" : "No student records yet"}
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filtered.map((s) => (
              <div
                key={s._id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-xl">
                      <FaChild className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{s.studentName}</h3>
                      <p className="text-sm text-gray-500">
                        {s.age} &middot; {s.gender} &middot; {s.program}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-gray-500">
                        <span>Father: {s.fatherName}</span>
                        <span>Mother: {s.motherName}</span>
                        <span className="flex items-center gap-1">
                          <FaPhone className="text-xs" /> {s.fatherPhone}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-400 sm:min-w-[140px]">
                    <p>{new Date(s.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
                    <p className="text-xs">by {s.filledBy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
