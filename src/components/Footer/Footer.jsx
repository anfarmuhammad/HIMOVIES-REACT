import React from 'react';

function Footer() {
  return (
    <div className="w-full bg-[#111] text-gray-200 py-8">
      <div className="flex flex-col items-center">
        {/* Links Section */}
        <div className="w-full px-4">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Social Icons Section */}
        <div className="flex justify-center mt-4">
          <ul className="flex flex-wrap gap-4 text-2xl">
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
        {/* Copyright Section */}
        <div className="mt-4 text-center px-4">
          <p className="text-sm md:text-base">
            © Copyright 2024 Hi Movies, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
