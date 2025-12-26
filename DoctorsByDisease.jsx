import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function DoctorsByDisease() {
  const { dId } = useParams();
  const [search, setSearch] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const doctors = [
    {
      id: 1,
      name: "Dr. Aarav Sharma",
      speciality: "Cardiologist",
      experience: "15 years",
      hospital: "City Heart Care",
      diseaseId: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Dr. Priya Kapoor",
      speciality: "Cardiologist",
      experience: "12 years",
      hospital: "Apollo Heart",
      diseaseId: 1,
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Dr. Rakesh Verma",
      speciality: "Cardiologist",
      experience: "18 years",
      hospital: "Fortis Hospital",
      diseaseId: 2,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      name: "Dr. Neha Jain",
      speciality: "Cardiologist",
      experience: "10 years",
      hospital: "Max Heart Clinic",
      diseaseId: 2,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 6,
      name: "Dr. Pankaj Mehta",
      speciality: "Nephrologist",
      experience: "12 years",
      hospital: "Kidney Care Centre",
      diseaseId: 4,
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 11,
      name: "Dr. Suresh Nair",
      speciality: "Neurologist",
      experience: "20 years",
      hospital: "Neuro Life Hospital",
      diseaseId: 7,
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
  ];

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.diseaseId === parseInt(dId) &&
      doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 p-6">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-4">
        Specialist Doctors
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Find the best doctors for your disease
      </p>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl shadow border focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Cards */}
      {filteredDoctors.length === 0 ? (
        <p className="text-center text-red-500 font-medium">
          No doctors found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredDoctors.map((doc, index) => (
            <div
              key={doc.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden
              transform transition-all duration-700
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              hover:-translate-y-3 hover:shadow-2xl`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {doc.name}
                </h2>
                <p className="text-indigo-600 font-medium">
                  {doc.speciality}
                </p>

                <p className="text-gray-600 text-sm mt-2">
                  Experience: <span className="font-medium">{doc.experience}</span>
                </p>

                <p className="text-gray-600 text-sm mb-4">
                  Hospital: <span className="font-medium">{doc.hospital}</span>
                </p>

                <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 
                text-white py-3 rounded-xl font-semibold 
                hover:from-indigo-700 hover:to-blue-700 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
