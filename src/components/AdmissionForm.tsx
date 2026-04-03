"use client";

import { useState } from "react";
import { FaChild, FaUser, FaPhone, FaEnvelope, FaBook, FaPaperPlane } from "react-icons/fa";

export default function AdmissionForm() {
  const [form, setForm] = useState({
    childName: "",
    childAge: "",
    parentName: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({
          childName: "",
          childAge: "",
          parentName: "",
          phone: "",
          email: "",
          program: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="admission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-lime/10 text-lime px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Admissions Open
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Enroll Your <span className="text-primary">Little One</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {status === "success" ? (
            <div className="text-center bg-green-50 border border-green-200 rounded-3xl p-10">
              <span className="text-6xl block mb-4">🎉</span>
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Thank You!
              </h3>
              <p className="text-green-600 text-lg">
                Your enquiry has been submitted successfully. We&apos;ll contact you
                soon!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-warm rounded-3xl p-8 sm:p-10 shadow-lg space-y-5"
            >
              {/* Child Name */}
              <div className="relative">
                <FaChild className="absolute left-4 top-4 text-primary" />
                <input
                  type="text"
                  name="childName"
                  placeholder="Child's Full Name"
                  value={form.childName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
              </div>

              {/* Child Age */}
              <div className="relative">
                <FaChild className="absolute left-4 top-4 text-secondary" />
                <input
                  type="text"
                  name="childAge"
                  placeholder="Child's Age (e.g., 2 years 3 months)"
                  value={form.childAge}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
              </div>

              {/* Parent Name */}
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-purple" />
                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent / Guardian Name"
                  value={form.parentName}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <FaPhone className="absolute left-4 top-4 text-green-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-sky" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
              </div>

              {/* Program */}
              <div className="relative">
                <FaBook className="absolute left-4 top-4 text-pink" />
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white appearance-none"
                >
                  <option value="">Select a Program</option>
                  <option value="Play Group (1.5 - 2.5 years)">
                    Play Group (1.5 - 2.5 years)
                  </option>
                  <option value="Nursery (2.5 - 3.5 years)">
                    Nursery (2.5 - 3.5 years)
                  </option>
                  <option value="Pre-KG (3.5 - 4.5 years)">
                    Pre-KG (3.5 - 4.5 years)
                  </option>
                </select>
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Any additional message (optional)"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-bold transition-colors shadow-lg hover:shadow-xl"
              >
                {status === "loading" ? (
                  <>
                    <span className="animate-spin">⏳</span> Submitting...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Submit Enquiry
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-center text-sm">
                  Something went wrong. Please try again or contact us on
                  WhatsApp.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
