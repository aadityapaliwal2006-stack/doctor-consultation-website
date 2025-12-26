import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Cardiology",
      desc: "Heart-related treatments with expert doctors.",
      img: "https://www.shutterstock.com/image-photo/doctors-hand-analyzes-isolated-human-600nw-2498486499.jpg",
    },
    {
      id: 2,
      title: "Neurology",
      desc: "Brain and nervous system specialist services.",
      img: "https://hayathospital.in/wp-content/uploads/2023/07/neurology-banner-hayat.jpg",
    },
    {
      id: 3,
      title: "Kidney Care",
      desc: "Advanced nephrology & kidney treatment facilities.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbPuduzZEbZWMkaJo35JYtWGoJzoGQP8AYg&s",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">

      {/* ------- Heading ------- */}
      <h1 className="text-4xl md:text-5xl font-bold text-center p-10 text-blue-700">
        Our Healthcare Services
      </h1>

      {/* ------- Services Cards ------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 flex-grow">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition hover:-translate-y-2"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.desc}</p>

              <Link to={`/service/${item.id}`}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ------- FOOTER ------- */}
      <footer className="bg-gray-900 text-white mt-10 py-6 text-center">
        <p className="text-sm">© 2025 MediCare. All rights reserved.</p>
        <p className="text-sm">Designed by Aaditya ❤️</p>
      </footer>

    </div>
  );
}
