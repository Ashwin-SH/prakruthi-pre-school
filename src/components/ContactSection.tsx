import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-warm to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            We&apos;d Love to <span className="text-primary">Hear From You</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions about admissions or want to visit our school? Reach
            out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                <FaWhatsapp className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
                <p className="text-gray-500 mb-2">
                  Quick replies, usually within minutes
                </p>
                <a
                  href="https://wa.me/916361587391?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Prakruthi%20Pre%20School"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-semibold hover:underline"
                >
                  +91 63615 87391
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
              <div className="bg-primary/10 text-primary p-3 rounded-xl">
                <FaPhone className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                <p className="text-gray-500 mb-2">Mon - Sat, 9 AM to 5 PM</p>
                <a
                  href="tel:+916361587391"
                  className="text-primary font-semibold hover:underline"
                >
                  +91 63615 87391
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
              <div className="bg-secondary/10 text-secondary p-3 rounded-xl">
                <FaEnvelope className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Email</h3>
                <p className="text-gray-500 mb-2">We reply within 24 hours</p>
                <span className="text-secondary font-semibold">
                  info@prakruthipreschool.com
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
              <div className="bg-pink/10 text-pink p-3 rounded-xl">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  School Hours
                </h3>
                <p className="text-gray-500">Monday - Friday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-500">Saturday: 9:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-br from-primary to-pink rounded-3xl p-10 text-white text-center shadow-xl">
            <div className="bg-white/20 p-4 rounded-full mb-6">
              <FaMapMarkerAlt className="text-4xl" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Visit Our Campus</h3>
            <p className="text-white/80 text-lg mb-2">
              Prakruthi Pre School
            </p>
            <p className="text-white/70 mb-8 max-w-sm">
              Bangalore, Karnataka, India
            </p>
            <a
              href="https://wa.me/916361587391?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20campus%20visit%20at%20Prakruthi%20Pre%20School"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
