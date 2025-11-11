export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              <span className="text-green-700">Kappil</span> Exports
            </h2>
            <p className="text-gray-400 mb-4">
              Estate-Direct Malabar Spices & Premium Nutmeg Exports from Kerala, India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/918590808078"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25D366] transition"
              >
                <span className="sr-only">WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0012 0C5.37 0 .07 5.3.07 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.63A11.86 11.86 0 0012 23.77c6.63 0 12-5.3 12-11.88 0-3.18-1.3-6.17-3.48-8.41zM12 21.27a9.33 9.33 0 01-4.77-1.3l-.34-.2-3.75.97 1-3.64-.23-.37a9.38 9.38 0 01-1.44-4.99C2.47 6.39 6.73 2.4 12 2.4c2.59 0 5.03 1 6.86 2.83 1.84 1.83 2.86 4.27 2.86 6.84 0 5.27-4.26 9.2-9.72 9.2zm5.64-7.04c-.31-.16-1.83-.9-2.12-1-.29-.1-.5-.16-.7.16-.21.31-.8 1-.98 1.21-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.48-1.52a9.28 9.28 0 01-1.72-2.13c-.18-.31-.02-.47.14-.63.14-.14.31-.36.47-.54.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53l-.6-.01c-.2 0-.52.08-.8.39-.27.31-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.16.21 2.15 3.44 5.22 4.83.73.32 1.3.51 1.75.65.73.23 1.4.2 1.93.12.59-.09 1.83-.75 2.09-1.48.26-.74.26-1.38.18-1.52-.08-.13-.28-.21-.59-.37z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Whole Nutmeg Kernel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Nutmeg Mace (Jathi Pathri)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Nutmeg Powder</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Custom Packaging</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Quality Assurance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Export & Logistics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Request a Quote</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Certifications</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kappil Exports. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}