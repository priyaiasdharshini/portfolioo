
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <p>© 2025 Priyadharshini E. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
              GitHub
            </a>
          </div>
          <div className="text-center">
            <p>Email: <a href="mailto:priyaiasdharshini@gmail.com" className="hover:text-blue-400 transition-colors duration-300">priyaiasdharshini@gmail.com</a></p>
            <p>Phone: <a href="tel:+918838184517" className="hover:text-blue-400 transition-colors duration-300">+91 8838184517</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
