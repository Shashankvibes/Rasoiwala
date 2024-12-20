const Footer = () => {
  return (
    <footer className="bg-[#F1D145] text-gray-800 py-4">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1: Logo and About */}
        <div>
          <h2 className="text-xl font-bold mb-3">FoodieHub</h2>
          <p className="text-sm leading-relaxed">
            Savor the taste of life! Explore delicious meals from the comfort of your home, curated with love and speed.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-orange-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-orange-600 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <i className="fas fa-phone-alt mr-2"></i> +91 98765 43210
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i> support@foodiehub.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i> 123, Food Lane, India
            </li>
          </ul>
        </div>

        {/* Column 4: Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-orange-600 hover:text-white transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-orange-600 hover:text-white transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-orange-600 hover:text-white transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-orange-600 hover:text-white transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm border-t border-gray-300 pt-4">
        <p>© 2024 FoodieHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
