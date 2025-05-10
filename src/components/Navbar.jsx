import React, { useState } from 'react';
import { FaApple, FaSearch, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import NavItem from './NavItem';

const navItems = [
  {
    label: 'Store',
    dropdown: {
      mainCategories: ['Shop the Latest', 'Mac', 'iPad', 'iPhone', 'Apple Watch', 'Accessories'],
      quickLinks: {
        'Quick Links': ['Find a Store', 'Order Status', 'Ways to Buy'],
        'Shop Special Stores': ['Education', 'Business'],
      },
    },
  },
  {
    label: 'Mac',
    dropdown: {
      mainCategories: ['MacBook Air', 'MacBook Pro', 'iMac', 'Mac Mini'],
      quickLinks: {
        'Explore Mac': ['Compare Mac', 'Mac Accessories'],
      },
    },
  },
  {
    label: 'iPad',
    dropdown: {
      mainCategories: ['iPad Pro', 'iPad Air', 'iPad', 'iPad Mini'],
      quickLinks: {
        'Explore iPad': ['Compare iPad', 'iPad Accessories'],
      },
    },
  },
  {
    label: 'iPhone',
    dropdown: {
      mainCategories: ['iPhone 14', 'iPhone 13', 'iPhone SE'],
      quickLinks: {
        'Explore iPhone': ['Compare iPhone', 'iPhone Accessories'],
      },
    },
  },
  {
    label: 'Watch',
    dropdown: {
      mainCategories: ['Apple Watch Series 8', 'Apple Watch SE', 'Apple Watch Ultra'],
      quickLinks: {
        'Explore Watch': ['Compare Watch', 'Watch Bands'],
      },
    },
  },
  {
    label: 'AirPods',
    dropdown: {
      mainCategories: ['AirPods Pro', 'AirPods Max', 'AirPods 3rd Generation'],
      quickLinks: {
        'Explore AirPods': ['Compare AirPods', 'AirPods Accessories'],
      },
    },
  },
  {
    label: 'TV & Home',
    dropdown: {
      mainCategories: ['Apple TV 4K', 'HomePod', 'HomePod Mini'],
      quickLinks: {
        'Explore TV & Home': ['Apple TV App', 'Home App'],
      },
    },
  },
  {
    label: 'Entertainment',
    dropdown: {
      mainCategories: ['Apple Music', 'Apple TV+', 'Apple Arcade'],
      quickLinks: {
        'Explore Entertainment': ['Apple One', 'Apple Podcasts'],
      },
    },
  },
  {
    label: 'Accessories',
    dropdown: {
      mainCategories: ['Cases & Protection', 'Chargers & Cables', 'MagSafe'],
      quickLinks: {
        'Shop by Category': ['For iPhone', 'For iPad', 'For Mac'],
      },
    },
  },
  {
    label: 'Support',
    dropdown: {
      mainCategories: ['Contact Support', 'AppleCare+', 'Repairs & Service'],
      quickLinks: {
        'Helpful Topics': ['User Guides', 'Community Forums'],
      },
    },
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-gray-700 text-sm sticky top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between  items-center h-12">

          <div className="flex-shrink-0">
            <FaApple className="text-black text-lg cursor-pointer" />
          </div>


          <ul className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <NavItem key={index} label={item.label} dropdown={item.dropdown} isMobile={false} />
            ))}
          </ul>


          <div className="hidden md:flex items-center space-x-6">
            <FaSearch className="text-black text-sm cursor-pointer" />
            <FaShoppingBag className="text-black text-sm cursor-pointer" />
          </div>


          <div className="md:hidden flex  items-center space-x-4">
            <FaSearch className="text-black text-sm cursor-pointer" />
            <FaShoppingBag className="text-black text-sm cursor-pointer" />
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes className="text-black text-lg" />
              ) : (
                <FaBars className="text-black text-lg" />
              )}
            </button>
          </div>
        </div>


        {isMobileMenuOpen && (
          <div className="md:hidden bg-black text-gray-400 flex flex-col justify-between space-x-10 items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <NavItem key={index} label={item.label} dropdown={item.dropdown} isMobile={true} />
            ))}
            <div className="flex space-x-6 pt-4">
              <FaSearch className="text-white text-sm cursor-pointer" />
              <FaShoppingBag className="text-white text-sm cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar