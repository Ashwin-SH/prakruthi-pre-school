import { FaWhatsapp, FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-warm via-white to-orange-50"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span>🌱</span> Admissions Open 2026-27
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink">
                Little Dreams
              </span>{" "}
              Begin to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-sky">
                Bloom
              </span>
            </h1>
            <p className="text-gray-600 text-lg sm:text-xl max-w-lg leading-relaxed">
              At Prakruthi Pre School, we nurture curiosity, creativity, and
              confidence in every child through nature-inspired, play-based
              learning.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://wa.me/916361587391?text=Hi%2C%20I%20would%20like%20to%20enroll%20my%20child%20at%20Prakruthi%20Pre%20School"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-xl" />
                Enquire on WhatsApp
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                Learn More
                <FaArrowDown className="text-sm" />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              {[
                { num: "500+", label: "Happy Students" },
                { num: "15+", label: "Years of Trust" },
                { num: "50+", label: "Expert Teachers" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-primary">{s.num}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero illustration - colorful grid of placeholder cards */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary to-pink rounded-3xl h-48 flex items-center justify-center text-white text-6xl shadow-lg animate-float">
                  🎨
                </div>
                <div className="bg-gradient-to-br from-secondary to-sky rounded-3xl h-64 flex items-center justify-center text-white text-6xl shadow-lg animate-float animation-delay-2000">
                  📚
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-accent to-lime rounded-3xl h-64 flex items-center justify-center text-6xl shadow-lg animate-float animation-delay-4000">
                  🌳
                </div>
                <div className="bg-gradient-to-br from-purple to-pink rounded-3xl h-48 flex items-center justify-center text-white text-6xl shadow-lg animate-float">
                  🎵
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
