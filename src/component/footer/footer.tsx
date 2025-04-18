import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gray-300 text-white py-3 px-4"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(150,150,150,0.2) 10%, transparent 10%)",
        backgroundSize: "10px 10px",
      }}
    >
      <div className="container mx-auto flex flex-wrap justify-between items-center text-xs">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Links Section */}
        <div className="flex space-x-6">
          {/* Home & About Column */}
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              className="text-gray-600 hover:text-white transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="text-gray-600 hover:text-white transition duration-300"
            >
              About Us
            </Link>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col space-y-1">
            <Link
              href="/contact-us"
              className="text-gray-600 hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
            <div className="flex items-center text-gray-500 hover:text-white text-xs">
              <FaPhone className="mr-1" size={10} />
              <Link href="tel:9745940854">9745940854</Link>
            </div>
            <div className="flex items-center text-gray-500 hover:text-white text-xs">
              <FaEnvelope className="mr-1" size={10} />
              <Link href="mailto:nsujal806@gmail.com">nsujal806@gmail.com</Link>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-3">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="text-gray-600 hover:text-white text-base"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-600 hover:text-white text-base"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="text-gray-600 hover:text-white text-base"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
