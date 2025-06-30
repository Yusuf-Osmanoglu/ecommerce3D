import { useState } from 'react';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

const Header = ({ cartCount }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: '/', label: 'Ana Sayfa' },
    { id: '/products', label: 'Ürünler' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <h1 className="text-2xl font-bold text-blue-600">E-Ticaret</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaBars className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium text-left transition-colors ${
                    location.pathname === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 