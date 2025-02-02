import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">

        <div className="flex flex-col items-center sm:items-start">
          <img src={assets.logo} className="mb-5 w-32" alt="Protein+ Logo" />
          <p className="text-gray-600 text-center sm:text-left md:w-3/4">
            We’re committed to fueling your fitness journey with premium, science-backed protein products.
            From workout recovery to everyday nutrition, we deliver the quality and performance you need to reach your goals.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xl font-semibold mb-4">COMPANY</p>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/delivery" className="hover:text-blue-500">Delivery</a></li>
            <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xl font-semibold mb-4">GET IN TOUCH</p>
          <ul className="space-y-2 text-gray-600">
            <li><a href="tel:+12124567890" className="hover:text-blue-500">+1-212-456-7890</a></li>
            <li><a href="mailto:contact@Protein+.com" className="hover:text-blue-500">contact@Protein+.com</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-200 mt-10 pt-5">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-center text-gray-600">
            Copyright 2025 @ protein+.com - All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
