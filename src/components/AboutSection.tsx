import {
  FaLeaf,
  FaPaintBrush,
  FaMusic,
  FaBook,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf className="text-2xl" />,
    title: "Nature-Based Learning",
    desc: "Children explore, observe, and learn through direct interaction with nature and the environment.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaPaintBrush className="text-2xl" />,
    title: "Creative Arts",
    desc: "Painting, crafting, and creative expression to develop fine motor skills and imagination.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: <FaMusic className="text-2xl" />,
    title: "Music & Movement",
    desc: "Rhythm, dance, and musical activities that boost cognitive development and coordination.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaBook className="text-2xl" />,
    title: "Early Literacy",
    desc: "Story time, phonics, and language activities that build a strong foundation for reading.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <FaHeart className="text-2xl" />,
    title: "Social Skills",
    desc: "Group activities and guided play that teach sharing, empathy, and cooperation.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: <FaStar className="text-2xl" />,
    title: "Holistic Growth",
    desc: "A balanced approach to physical, emotional, and intellectual development.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            A Place Where Children{" "}
            <span className="text-primary">Thrive</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Prakruthi Pre School, we believe every child is a seed of
            potential. Our nurturing environment, experienced educators, and
            play-based curriculum help your little one grow into a confident,
            curious learner.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div
                className={`w-14 h-14 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
