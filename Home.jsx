import React, { useState } from "react";

export default function Home() {
  const hospitals = [
    {
      id: 1,
      name: "City Care Hospital",
      location: "Mumbai, Maharashtra",
      beds: 150,
      speciality: "Cardiology",
      contact: "022-44556677",
      rating: 4.5,
      services: ["Emergency", "ICU", "Heart Surgery"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    },
    {
      id: 2,
      name: "Lotus Multi-Speciality Hospital",
      location: "Delhi, India",
      beds: 220,
      speciality: "Neurology",
      contact: "011-66778899",
      rating: 4.7,
      services: ["Neuro Surgery", "MRI", "Rehabilitation"],
      image:
        "https://doctorlistingingestionpr.blob.core.windows.net/doctorprofilepic/1670847963465_HospitalProfileImage_Capture.PNG",
    },
    {
      id: 3,
      name: "Sunrise General Hospital",
      location: "Ahmedabad, Gujarat",
      beds: 90,
      speciality: "Orthopedics",
      contact: "079-22334455",
      rating: 4.2,
      services: ["Bone Fracture", "X-Ray", "Physiotherapy"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    },
    {
      id: 4,
      name: "Green Life Hospital",
      location: "Bengaluru, Karnataka",
      beds: 180,
      speciality: "Pediatrics",
      contact: "080-98765432",
      rating: 4.6,
      services: ["Child Care", "Vaccination", "NICU"],
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29",
    },

    // ✅ NEW CARDS
    {
      id: 5,
      name: "Apollo Super Speciality",
      location: "Hyderabad, Telangana",
      beds: 320,
      speciality: "Multi Speciality",
      contact: "040-55667788",
      rating: 4.8,
      services: ["Cancer Care", "Emergency", "Dialysis"],
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    },
    {
      id: 6,
      name: "Global Medicare Hospital",
      location: "Pune, Maharashtra",
      beds: 200,
      speciality: "Dermatology",
      contact: "020-55668899",
      rating: 4.4,
      services: ["Skin Care", "Laser", "Cosmetic Surgery"],
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedHospital, setSelectedHospital] = useState(null);

  const filteredHospitals = hospitals.filter((h) => {
    const matchesSearch =
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase()) ||
      h.speciality.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || h.speciality === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-violet-50 p-6">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-teal-700">
        🏥 Hospital Directory
      </h1>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
        <input
          type="text"
          placeholder="Search hospital, city, speciality..."
          className="px-5 py-3 rounded-xl border shadow-sm w-full sm:w-1/2 focus:ring-2 focus:ring-teal-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-5 py-3 rounded-xl border shadow-sm w-full sm:w-1/4 focus:ring-2 focus:ring-violet-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Specialities</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Multi Speciality">Multi Speciality</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredHospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="bg-white/80 backdrop-blur border rounded-3xl shadow-md hover:shadow-2xl transition hover:-translate-y-3 overflow-hidden"
          >
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-44 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-teal-700 flex items-center gap-2">
                🏥 {hospital.name}
              </h2>

              <span className="inline-block mt-2 text-xs bg-violet-100 text-violet-700 px-3 py-1 rounded-full">
                {hospital.speciality}
              </span>

              <p className="text-gray-600 mt-3">📍 {hospital.location}</p>
              <p className="text-gray-600">🛏 Beds: {hospital.beds}</p>
              <p className="text-gray-600">📞 {hospital.contact}</p>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-yellow-600 font-semibold">
                  ⭐ {hospital.rating}
                </span>
                <button
                  onClick={() => setSelectedHospital(hospital)}
                  className="bg-teal-600 text-white px-5 py-2 rounded-xl hover:bg-teal-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center px-4">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-6">
            <h2 className="text-2xl font-bold text-teal-700 mb-3">
              🏥 {selectedHospital.name}
            </h2>

            <img
              src={selectedHospital.image}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <p><b>Speciality:</b> {selectedHospital.speciality}</p>
            <p><b>Location:</b> {selectedHospital.location}</p>
            <p><b>Beds:</b> {selectedHospital.beds}</p>
            <p><b>Contact:</b> {selectedHospital.contact}</p>
            <p className="mt-2">
              <b>Services:</b> {selectedHospital.services.join(", ")}
            </p>

            <button
              onClick={() => setSelectedHospital(null)}
              className="mt-6 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Footer */}
<footer className="mt-20 bg-gradient-to-r from-teal-600 to-violet-600 text-white py-10 rounded-t-3xl shadow-inner">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10">

    {/* About Section */}
    <div>
      <h2 className="text-xl font-semibold mb-3">🏥 Hospital Directory</h2>
      <p className="text-sm text-gray-100 leading-relaxed">
        A modern platform to explore top hospitals, specialists, and medical facilities across India.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
      <ul className="space-y-2 text-gray-100 text-sm">
        <li>🏡 Home</li>
        <li>🔍 Search Hospitals</li>
        <li>📞 Contact Support</li>
        <li>💡 About Us</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
      <p className="text-sm text-gray-100">📧 support@hospitaldirectory.com</p>
      <p className="text-sm text-gray-100">📍 India</p>
      <p className="text-sm text-gray-100">☎️ +91 98765 43210</p>
    </div>
  </div>

  <div className="text-center mt-10 text-gray-200 text-sm">
    © {new Date().getFullYear()} Hospital Directory — All Rights Reserved.
  </div>
</footer>
    </div>
  );
}
