import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icon từ react-icons
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-[55%] left-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
    >
      <FaArrowLeft />
    </button>
  );
};
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-[55%] right-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full"
    >
      <FaArrowRight />
    </button>
  );
};
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <NextArrow />, // Sử dụng nút Next tùy chỉnh
  prevArrow: <PrevArrow />, // Sử dụng nút Prev tùy chỉnh
};
type Props = {};
const Home = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-xl fixed w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-4xl font-bold text-white">
            <a
              href="#"
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity duration-300"
            >
              <img
                src="/image/logo.png"
                alt="Logo"
                className="w-[60px] h-[60px] rounded-full shadow-lg"
              />
              <span>Book Garden</span>
            </a>
          </div>

          {/* Menu cho desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-white font-semibold hover:text-gray-100 transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-gray-100 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-gray-100 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white font-semibold hover:text-gray-100 transition duration-300"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-white text-purple-600 font-bold px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Login
            </a>
          </div>

          {/* Nút hamburger menu cho mobile */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu cho mobile */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg rounded-lg mt-2 space-y-2 py-4 px-6">
            <a
              href="#"
              className="block text-gray-800 font-semibold hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-800 font-semibold hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-800 font-semibold hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-800 font-semibold hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="block text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Get Started
            </a>
          </nav>
        )}
      </header>
      <div className="w-full overflow-hidden relative">
        <Slider {...settings}>
          <div>
            <a href="/product">
              <img
                className="w-full h-[700px] max-w-screen"
                src="https://static.vecteezy.com/system/resources/previews/008/558/887/non_2x/book-now-button-book-now-text-web-template-modern-web-banner-template-vector.jpg"
                alt="Slide 1"
              />
            </a>
          </div>
          <div>
            <img
              className="w-full h-[700px] max-w-screen"
              src="https://www.fitchburgstate.edu/sites/default/files/styles/library_megasearch_sm/public/media/images/2024-06/search-banner-bg.jpg.webp?itok=8SXKf7-b"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              className="w-full h-[700px] max-w-screen"
              src="
              https://i.pinimg.com/564x/4d/60/c4/4d60c4bcacc7d285b9d66647d95a27ae.jpg"
              alt="Slide 3"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
