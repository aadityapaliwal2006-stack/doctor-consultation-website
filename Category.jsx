import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Category() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const categories = [
    {
      CategoryId: 1,
      name: "Heart Disease",
      experience: "10+ Years Expertise",
      poster:
        "https://bpincontrol.in/wp-content/uploads/2023/08/Heart-Disease.jpg",
      color: "from-rose-500 to-red-600",
    },
    {
      CategoryId: 2,
      name: "Kidney Disease",
      experience: "8+ Years Expertise",
      poster:
        "https://www.cdc.gov/diabetes/images/library/features/kidney-failure-diabetes.jpg",
      color: "from-indigo-500 to-blue-600",
    },
    {
      CategoryId: 3,
      name: "Neuro Disease",
      experience: "12+ Years Expertise",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI92BMTFbDNryUY24xGusjyZIioedyRKGrQ&s",
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-8">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-800 tracking-wide">
        Disease Categories
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {categories.map((item, index) => (
          <div
            key={item.CategoryId}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`
              bg-white rounded-3xl overflow-hidden shadow-xl
              transform transition-all duration-700 ease-out
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              hover:-translate-y-4 hover:shadow-2xl
            `}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-56">
              <img
                src={item.poster}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40`}
              ></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {item.name}
              </h2>

              <p className="text-gray-600 text-sm mb-6">
                {item.experience}
              </p>

              <Link to={`/categoryDetails/${item.CategoryId}`}>
                <button
                  className={`w-full bg-gradient-to-r ${item.color}
                  text-white py-3 rounded-2xl font-semibold
                  shadow-lg hover:scale-105 transition`}
                >
                  Explore Diseases
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ⭐ FOOTER */}
      <footer className="mt-20 bg-gradient-to-r from-teal-600 to-violet-600 text-white py-10 rounded-t-3xl shadow-inner">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-semibold mb-3">🏥 Health Directory</h2>
            <p className="text-sm text-gray-100 leading-relaxed">
              Explore trusted medical categories and specialists to find the right healthcare.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-100 text-sm">
              <li>🏡 Home</li>
              <li>🩺 Doctors</li>
              <li>📁 Categories</li>
              <li>📞 Contact Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-sm text-gray-100">📧 support@healthdirectory.com</p>
            <p className="text-sm text-gray-100">📍 India</p>
            <p className="text-sm text-gray-100">☎️ +91 98765 43210</p>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-200 text-sm">
          © {new Date().getFullYear()} Health Directory — All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
