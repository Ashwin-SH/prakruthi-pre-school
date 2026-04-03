"use client";

const galleryItems = [
  {
    gradient: "from-pink to-primary",
    emoji: "🎨",
    label: "Art & Craft Time",
  },
  {
    gradient: "from-secondary to-sky",
    emoji: "🌿",
    label: "Nature Walk",
  },
  {
    gradient: "from-accent to-lime",
    emoji: "🤸",
    label: "Outdoor Play",
  },
  {
    gradient: "from-purple to-pink",
    emoji: "📖",
    label: "Story Time",
  },
  {
    gradient: "from-sky to-secondary",
    emoji: "🎵",
    label: "Music Class",
  },
  {
    gradient: "from-primary to-accent",
    emoji: "🧩",
    label: "Puzzle & Games",
  },
  {
    gradient: "from-lime to-secondary",
    emoji: "🌻",
    label: "Gardening",
  },
  {
    gradient: "from-pink to-purple",
    emoji: "🎭",
    label: "Annual Day",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-pink/10 text-pink px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Moments of <span className="text-primary">Joy</span>
          </h2>
          <p className="text-gray-600 text-lg">
            A glimpse into the colorful world of learning and fun at Prakruthi
            Pre School.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                i === 0 || i === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`flex flex-col items-center justify-center text-white ${
                  i === 0 || i === 5 ? "h-64 md:h-full" : "h-48 md:h-56"
                }`}
              >
                <span
                  className={`${
                    i === 0 || i === 5 ? "text-8xl" : "text-5xl"
                  } group-hover:scale-125 transition-transform duration-300`}
                >
                  {item.emoji}
                </span>
                <span className="mt-3 font-semibold text-sm sm:text-base opacity-90">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Watch Our Little Stars in Action
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Prakruthi Pre School Activities"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-secondary/20 to-purple/20 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Prakruthi Pre School Annual Day"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Replace these with your school&apos;s actual YouTube video links
          </p>
        </div>
      </div>
    </section>
  );
}
