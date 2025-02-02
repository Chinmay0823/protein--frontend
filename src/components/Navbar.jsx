import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        {['COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
          <NavLink key={index} to={`/${item.toLowerCase()}`} className="flex flex-col items-center gap-1">
            <p>{item}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Icon */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="Profile"
          />
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Toggle */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden" alt="Menu" />
      </div>

      {/* Mobile Sidebar Menu */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setVisible(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out ${
          visible ? 'w-[70%] sm:w-[50%]' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col text-gray-600">
          {/* Back Button */}
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
            <p>Back</p>
          </div>

          {/* Sidebar Menu Links */}
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
          >
            HOME
          </NavLink>
          {['COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
