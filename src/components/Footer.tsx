import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <div>
                <span className="text-xl font-bold text-white">Prakruthi</span>
                <span className="text-sm block -mt-1 text-gray-400">
                  Pre School
                </span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Nurturing young minds with love, creativity, and nature-inspired
              learning since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Gallery", "Programs", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <span>+91 63615 87391</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-green-400" />
                <a
                  href="https://wa.me/916361587391"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary" />
                <span>info@prakruthipreschool.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink mt-1" />
                <span>Prakruthi Pre School, Bangalore, Karnataka</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Prakruthi Pre School. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
