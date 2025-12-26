import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CategoryDetails() {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const disease = [
    // -------- Heart --------
    { dId: 1, diseaseName: "Heart Failure", diseasePoster: "https://bpincontrol.in/wp-content/uploads/2023/08/Heart-Disease.jpg", category: 1 },
    { dId: 2, diseaseName: "Cardiac Arrest", diseasePoster: "https://www.heart.org/-/media/images/health-topics/cardiac-arrest.jpg", category: 1 },
    { dId: 3, diseaseName: "Coronary Artery Disease", diseasePoster: "https://www.abchealthcare.com/wp-content/uploads/2021/07/coronary-artery-disease.jpg", category: 1 },

    // -------- Kidney --------
    { dId: 4, diseaseName: "Kidney Failure", diseasePoster: "https://www.cdc.gov/diabetes/images/library/features/kidney-failure-diabetes.jpg", category: 2 },
    { dId: 5, diseaseName: "Chronic Kidney Disease", diseasePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5u0LGG5Wz_gTgM4T6n4JHOYsX2g5N4Yu5Q", category: 2 },
    { dId: 6, diseaseName: "Kidney Stones", diseasePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuI92BMTFbDNryUY24xGusjyZIioedyRKGrQ", category: 2 },

    // -------- Neuro --------
    { dId: 7, diseaseName: "Brain Tumor", diseasePoster: "https://www.matherhospital.org/wp-content/uploads/2017/09/brain-tumor-blog-photo.jpg", category: 3 },
    { dId: 8, diseaseName: "Stroke", diseasePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkZpyEeMx8xLqKMeJhrsNrD5-GQXBjgHm02A", category: 3 },
    { dId: 9, diseaseName: "Parkinson's Disease", diseasePoster: "https://southmiamineurology.net/wp-content/uploads/2023/12/parkinsons-disease.jpg", category: 3 },
  ];

  const filteredDiseases = disease.filter(
    (d) =>
      d.category === parseInt(id) &&
      d.diseaseName.toLowerCase().includes(search.toLowerCase())
  );

  const categoryName =
    id == 1 ? "Heart Diseases" : id == 2 ? "Kidney Diseases" : "Neuro Diseases";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 p-8">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700">
          {categoryName}
        </h1>
        <p className="text-gray-600 mt-2">
          Choose a disease to explore specialist doctors
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search disease..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-2xl shadow border focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredDiseases.length === 0 && (
          <p className="text-center col-span-full text-red-500">
            No diseases found
          </p>
        )}
        
        {filteredDiseases.map((item, index) => (
          <div
            key={item.dId}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-700
              ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
              hover:-translate-y-4 hover:shadow-2xl`}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.diseasePoster}
                alt={item.diseaseName}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                Category {item.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                {item.diseaseName}
              </h2>

              <Link
                to={`/disease/${item.dId}/doctors`}
                className="block text-center bg-gradient-to-r from-indigo-600 to-blue-600
                hover:from-indigo-700 hover:to-blue-700
                text-white py-3 rounded-2xl font-semibold transition"
              >
                View Doctors
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
