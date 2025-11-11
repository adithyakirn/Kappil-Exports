export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold text-gray-800">
            <span className="text-green-700 ">Kappil </span>Exports
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-green-700">
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-green-700 font-medium"
          >
            About Us
          </a>
          <a href="#" className="text-gray-600 hover:text-green-700">
            Products
          </a>
          <a href="#" className="text-gray-600 hover:text-green-700">
            Certifications
          </a>
          <a href="#" className="text-gray-600 hover:text-green-700">
            Contact
          </a>
        </nav>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
