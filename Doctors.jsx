import React, { useMemo, useState } from "react";

// Doctors.jsx
// A responsive Tailwind-based doctors list component with search, filter and sample data.
// Paste this file into src/components/Doctors.jsx and make sure Tailwind CSS is configured in your project.

export default function Doctors() {
  const [query, setQuery] = useState("");
  const [speciality, setSpeciality] = useState("All");

  const doctors = [
    {
      id: 1,
      name: "Dr. Aarav Sharma",
      speciality: "Cardiology",
      experience: 14,
      rating: 4.8,
      hospital: "City Care Hospital",
      phone: "+91 98100 11223",
      fee: 700,
      image:
        "https://images.unsplash.com/photo-1582495612950-8f3c8f3f0d9b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1",
    },
    {
      id: 2,
      name: "Dr. Meera Iyer",
      speciality: "Dermatology",
      experience: 9,
      rating: 4.6,
      hospital: "Dermacare Clinic",
      phone: "+91 98222 33445",
      fee: 500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwTnoc2E2g9KxNjyUESJl11ZpAIimVp2Tzw&s",
    },
    {
      id: 3,
      name: "Dr. Rahul Verma",
      speciality: "Orthopedics",
      experience: 12,
      rating: 4.7,
      hospital: "Bone & Joint Hospital",
      phone: "+91 99011 22334",
      fee: 600,
      image:
        "https://images.unsplash.com/photo-1584467735873-6c9f9f6be8d2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3",
    },
    {
      id: 4,
      name: "Dr. Sneha Gupta",
      speciality: "Gynecology",
      experience: 11,
      rating: 4.5,
      hospital: "MotherCare Hospital",
      phone: "+91 97700 44556",
      fee: 650,
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    },
    {
      id: 5,
      name: "Dr. Vikram Patel",
      speciality: "Neurology",
      experience: 18,
      rating: 4.9,
      hospital: "NeuroLife Institute",
      phone: "+91 98811 55667",
      fee: 1200,
      image:
        "https://images.unsplash.com/photo-1580281658163-3f9d86df3b6b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5",
    },
    {
      id: 6,
      name: "Dr. Kiran Desai",
      speciality: "Pediatrics",
      experience: 7,
      rating: 4.4,
      hospital: "Little Stars Clinic",
      phone: "+91 96655 77889",
      fee: 400,
      image:
        "https://images.unsplash.com/photo-1580281657521-7df6a2a4f7e0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6",
    },
    {
      id: 7,
      name: "Dr. Nitin Joshi",
      speciality: "ENT",
      experience: 10,
      rating: 4.3,
      hospital: "HearWell Clinic",
      phone: "+91 94422 33441",
      fee: 450,
      image:
        "https://images.unsplash.com/photo-1576765607924-0f8f5b3d1a3d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7",
    },
    {
      id: 8,
      name: "Dr. Pooja Menon",
      speciality: "Ophthalmology",
      experience: 13,
      rating: 4.7,
      hospital: "ClearSight Eye Centre",
      phone: "+91 92100 55660",
      fee: 550,
      image:
        "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8",
    },
    {
      id: 9,
      name: "Dr. Suresh Rao",
      speciality: "Gastroenterology",
      experience: 16,
      rating: 4.6,
      hospital: "Digestive Health Centre",
      phone: "+91 93344 11223",
      fee: 800,
      image:
        "https://images.unsplash.com/photo-1526256262350-6c8b1d8f2b2a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9",
    },
    {
      id: 10,
      name: "Dr. Anjali Rao",
      speciality: "Psychiatry",
      experience: 8,
      rating: 4.2,
      hospital: "MindCare Clinic",
      phone: "+91 90011 22334",
      fee: 650,
      image:
        "https://images.unsplash.com/photo-1580281657529-9abc9a3f7c2e?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=10",
    },
    // add more doctors as needed
  ];

  const specialities = useMemo(() => {
    const set = new Set(doctors.map((d) => d.speciality));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return doctors.filter((d) => {
      const matchQuery =
        query.trim() === "" ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.hospital.toLowerCase().includes(query.toLowerCase()) ||
        d.speciality.toLowerCase().includes(query.toLowerCase());

      const matchSpec = speciality === "All" || d.speciality === speciality;
      return matchQuery && matchSpec;
    });
  }, [doctors, query, speciality]);

  function handleBook(doctor) {
    // placeholder: replace with navigation to a booking page or modal
    alert(`Booking appointment with ${doctor.name} (id: ${doctor.id})`);
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold mb-1">Doctors</h1>
        <p className="text-sm text-gray-600">Search, filter and book appointments quickly</p>
      </header>

      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, hospital or speciality"
          className="flex-1 rounded-lg border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />

        <select
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          className="w-48 rounded-lg border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          {specialities.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setQuery("");
            setSpeciality("All");
          }}
          className="px-4 py-3 rounded-lg bg-gray-100 border hover:bg-gray-200"
        >
          Reset
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((doc) => (
          <article
            key={doc.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
          >
            <div className="flex items-center gap-4 p-4">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.speciality} — {doc.hospital}</p>

                <div className="mt-2 flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{doc.experience} yrs</span> exp • ₹{doc.fee}
                  </div>

                  <div className="text-sm text-yellow-600">⭐ {doc.rating}</div>
                </div>
              </div>
            </div>

            <div className="border-t px-4 py-3 flex items-center justify-between bg-gray-50">
              <div className="text-sm text-gray-700">{doc.phone}</div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigator.clipboard?.writeText(doc.phone)}
                  className="text-sm px-3 py-1 rounded-md border hover:bg-gray-100"
                  title="Copy phone"
                >
                  Copy
                </button>

                <button
                  onClick={() => handleBook(doc)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:opacity-95"
                >
                  Book
                </button>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No doctors matched your search.
          </div>
        )}
      </section>

      <footer className="mt-8 text-xs text-gray-500">Tip: click <span className="font-medium">Book</span> to start a booking flow — replace alert with your routing/modal.</footer>
    </div>
  );
}
