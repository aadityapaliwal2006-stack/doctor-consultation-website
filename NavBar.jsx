import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Stethoscope,
  Home,
  Users,
  BriefcaseMedical,
  ArrowLeft,
  HeartPulse,
} from "lucide-react";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ✅ Logo + Hospital Name */}
        <div className="flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-xl shadow-md">
            <HeartPulse className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide">
              CarePlus
            </h2>
            <p className="text-sm text-blue-100 -mt-1">
              Multi-Speciality Hospital
            </p>
          </div>
        </div>

        {/* ✅ Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg font-medium text-white">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 hover:text-yellow-200 transition"
            >
              <Home className="w-5 h-5" /> Home
            </Link>
          </li>

          <li>
            <Link
              to="/category"
              className="flex items-center gap-2 hover:text-yellow-200 transition"
            >
              <Users className="w-5 h-5" /> Category
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="flex items-center gap-2 hover:text-yellow-200 transition"
            >
              <BriefcaseMedical className="w-5 h-5" /> Services
            </Link>
          </li>

          <li>
            <Link
              to="/doctors"
              className="flex items-center gap-2 hover:text-yellow-200 transition"
            >
              <Stethoscope className="w-5 h-5" /> Doctors
            </Link>
          </li>
        </ul>

        {/* ✅ Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 hover:bg-indigo-50 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back button 
        </button>

      </div>
    </nav>
  );
}
