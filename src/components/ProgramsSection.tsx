import { FaWhatsapp } from "react-icons/fa";

const programs = [
  {
    name: "Play Group",
    age: "1.5 - 2.5 years",
    color: "from-primary to-pink",
    emoji: "🧸",
    features: [
      "Sensory play activities",
      "Basic motor skill development",
      "Introduction to colors & shapes",
      "Music and rhymes",
    ],
  },
  {
    name: "Nursery",
    age: "2.5 - 3.5 years",
    color: "from-secondary to-sky",
    emoji: "🌟",
    features: [
      "Pre-reading & phonics",
      "Number recognition",
      "Creative arts & crafts",
      "Social interaction skills",
    ],
    popular: true,
  },
  {
    name: "Pre-KG",
    age: "3.5 - 4.5 years",
    color: "from-purple to-pink",
    emoji: "🚀",
    features: [
      "Early writing practice",
      "Basic math concepts",
      "Science exploration",
      "Leadership activities",
    ],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-purple/10 text-purple px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Programs Designed for{" "}
            <span className="text-primary">Every Stage</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Age-appropriate curriculum that makes learning a joyful journey for
            every child.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl overflow-hidden bg-white border-2 ${
                p.popular
                  ? "border-primary shadow-xl scale-105"
                  : "border-gray-100 shadow-md"
              } hover:shadow-xl transition-all duration-300`}
            >
              {p.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${p.color} p-6 text-white text-center`}
              >
                <span className="text-5xl block mb-2">{p.emoji}</span>
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="text-white/80 mt-1">Age: {p.age}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/916361587391?text=Hi%2C%20I%20am%20interested%20in%20the%20{p.name}%20program%20at%20Prakruthi%20Pre%20School"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  <FaWhatsapp />
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
