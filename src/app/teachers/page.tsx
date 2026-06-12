"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaChild,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaHeartbeat,
  FaExclamationTriangle,
  FaSave,
  FaArrowLeft,
  FaCheckCircle,
  FaIdCard,
  FaBriefcase,
} from "react-icons/fa";

interface StudentForm {
  studentName: string;
  dateOfBirth: string;
  age: string;
  gender: string;
  bloodGroup: string;
  aadharNumber: string;
  program: string;
  fatherName: string;
  fatherOccupation: string;
  fatherPhone: string;
  fatherEmail: string;
  motherName: string;
  motherOccupation: string;
  motherPhone: string;
  address: string;
  city: string;
  pincode: string;
  allergies: string;
  medicalConditions: string;
  medications: string;
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactPhone: string;
  previousSchool: string;
  transportRequired: string;
  specialNeeds: string;
  notes: string;
  filledBy: string;
}

const initialForm: StudentForm = {
  studentName: "",
  dateOfBirth: "",
  age: "",
  gender: "",
  bloodGroup: "",
  aadharNumber: "",
  program: "",
  fatherName: "",
  fatherOccupation: "",
  fatherPhone: "",
  fatherEmail: "",
  motherName: "",
  motherOccupation: "",
  motherPhone: "",
  address: "",
  city: "",
  pincode: "",
  allergies: "",
  medicalConditions: "",
  medications: "",
  emergencyContactName: "",
  emergencyContactRelation: "",
  emergencyContactPhone: "",
  previousSchool: "",
  transportRequired: "No",
  specialNeeds: "",
  notes: "",
  filledBy: "",
};

function SectionHeader({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) {
  return (
    <div className={`flex items-center gap-3 mb-6 pb-3 border-b-2 ${color}`}>
      <div className={`p-2 rounded-lg ${color.replace("border-", "bg-").replace("500", "100")} ${color.replace("border-", "text-")}`}>
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
  );
}

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
      />
    </div>
  );
}

export default function TeacherPortal() {
  const [form, setForm] = useState<StudentForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md text-center">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Record Saved!</h2>
          <p className="text-gray-500 mb-6">
            Student details have been saved to the database successfully.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setStatus("idle")}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Add Another Student
            </button>
            <Link
              href="/teachers/records"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              View Records
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm via-white to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                🌿 Teacher Portal
              </h1>
              <p className="text-sm text-gray-500">Student Data Collection Form</p>
            </div>
          </div>
          <Link
            href="/teachers/records"
            className="bg-secondary/10 text-secondary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/20 transition-colors"
          >
            View All Records
          </Link>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student Details */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <SectionHeader
              icon={<FaChild className="text-xl" />}
              title="Student Details"
              color="border-primary"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <InputField label="Student Full Name" name="studentName" value={form.studentName} onChange={handleChange} required placeholder="Enter child's full name" />
              <InputField label="Date of Birth" name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} required />
              <InputField label="Age" name="age" value={form.age} onChange={handleChange} required placeholder="e.g., 2 years 6 months" />
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Blood Group</label>
                <select
                  name="bloodGroup"
                  value={form.bloodGroup}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                >
                  <option value="">Select</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
              </div>
              <InputField label="Aadhar Number" name="aadharNumber" value={form.aadharNumber} onChange={handleChange} placeholder="12-digit Aadhar number" />
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                  Program <span className="text-red-500">*</span>
                </label>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                >
                  <option value="">Select Program</option>
                  <option value="Kindergarten (2 - 3 years)">Kindergarten (2 - 3 years)</option>
                  <option value="Nursery (3 - 4 years)">Nursery (3 - 4 years)</option>
                  <option value="LKG (4 - 5 years)">LKG (4 - 5 years)</option>
                  <option value="UKG (5 - 6 years)">UKG (5 - 6 years)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Father Details */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <SectionHeader
              icon={<FaUser className="text-xl" />}
              title="Father's Details"
              color="border-sky"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField label="Father's Full Name" name="fatherName" value={form.fatherName} onChange={handleChange} required placeholder="Enter father's name" />
              <div className="flex items-end">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-600 mb-1.5 flex items-center gap-1">
                    <FaBriefcase className="text-gray-400" /> Occupation
                  </label>
                  <input type="text" name="fatherOccupation" value={form.fatherOccupation} onChange={handleChange} placeholder="e.g., Software Engineer" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5 flex items-center gap-1">
                  <FaPhone className="text-gray-400" /> Phone Number <span className="text-red-500">*</span>
                </label>
                <input type="tel" name="fatherPhone" value={form.fatherPhone} onChange={handleChange} required placeholder="10-digit phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5 flex items-center gap-1">
                  <FaEnvelope className="text-gray-400" /> Email
                </label>
                <input type="email" name="fatherEmail" value={form.fatherEmail} onChange={handleChange} placeholder="email@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" />
              </div>
            </div>
          </div>

          {/* Mother Details */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <SectionHeader
              icon={<FaUser className="text-xl" />}
              title="Mother's Details"
              color="border-pink"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField label="Mother's Full Name" name="motherName" value={form.motherName} onChange={handleChange} required placeholder="Enter mother's name" />
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5 flex items-center gap-1">
                  <FaBriefcase className="text-gray-400" /> Occupation
                </label>
                <input type="text" name="motherOccupation" value={form.motherOccupation} onChange={handleChange} placeholder="e.g., Doctor" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5 flex items-center gap-1">
                  <FaPhone className="text-gray-400" /> Phone Number
                </label>
                <input type="tel" name="motherPhone" value={form.motherPhone} onChange={handleChange} placeholder="10-digit phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" />
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <SectionHeader
              icon={<FaHome className="text-xl" />}
              title="Address"
              color="border-secondary"
            />
            <div className="grid sm:grid-cols-1 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                  Full Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="House No., Street, Area, Landmark"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField label="City" name="city" value={form.city} onChange={handleChange} required placeholder="e.g., Bangalore" />
                <InputField label="Pincode" name="pincode" value={form.pincode} onChange={handleChange} required placeholder="e.g., 560001" />
              </div>
            </div>
          </div>

          {/* Medical Info */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <SectionHeader
              icon={<FaHeartbeat className="text-xl" />}
              title="Medical Information"
              color="border-red-500"
            />
            <div className="grid sm:grid-cols-1 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Known Allergies</label>
                <textarea name="allergies" value={form.allergies} onChange={handleChange} rows={2} placeholder="e.g., Peanut allergy, Dust allergy, None" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">Medical Conditions</label>
                  <textarea name="medicalConditions" value={form.medicalConditions} onChange={handleChange} rows={2} placeholder="e.g., Asthma, None" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1.5">Current Medications</label>
                  <textarea name="medications" value={form.medications} onChange={handleChange} rows={2} placeholder="e.g., Inhaler, None" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <SectionHeader
              icon={<FaExclamationTriangle className="text-xl" />}
              title="Emergency Contact"
              color="border-orange-500"
            />
            <div className="grid sm:grid-cols-3 gap-5">
              <InputField label="Contact Person Name" name="emergencyContactName" value={form.emergencyContactName} onChange={handleChange} required placeholder="e.g., Uncle Ram" />
              <InputField label="Relation to Child" name="emergencyContactRelation" value={form.emergencyContactRelation} onChange={handleChange} required placeholder="e.g., Uncle, Grandmother" />
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input type="tel" name="emergencyContactPhone" value={form.emergencyContactPhone} onChange={handleChange} required placeholder="10-digit phone number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white" />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <SectionHeader
              icon={<FaIdCard className="text-xl" />}
              title="Additional Information"
              color="border-purple"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField label="Previous School (if any)" name="previousSchool" value={form.previousSchool} onChange={handleChange} placeholder="Name of previous school" />
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Transport Required</label>
                <select
                  name="transportRequired"
                  value={form.transportRequired}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Special Needs / Requirements</label>
                <textarea name="specialNeeds" value={form.specialNeeds} onChange={handleChange} rows={2} placeholder="Any special requirements for the child" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Additional Notes</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} rows={2} placeholder="Any other information" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none" />
              </div>
            </div>
          </div>

          {/* Filled By */}
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField label="Form Filled By (Teacher Name)" name="filledBy" value={form.filledBy} onChange={handleChange} required placeholder="Enter your name" />
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3">
            {status === "error" && (
              <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white px-12 py-4 rounded-xl text-lg font-bold transition-colors shadow-lg hover:shadow-xl"
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin">⏳</span> Saving...
                </>
              ) : (
                <>
                  <FaSave />
                  Save Student Record
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
