import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import SignIn from "./pages/SignIn";
import GraduateProgram from "./pages/GraduateProgram";
import StudentAmbassador from "./pages/StudentAmbassador";
import JobPortal from "./pages/JobPortal";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">
      {/* ✅ Navbar appears once */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/graduate" element={<GraduateProgram />} />
          <Route path="/ambassador" element={<StudentAmbassador />} />
          <Route path="/jobportal" element={<JobPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* ✅ Footer always at bottom */}
      <Footer />
    </div>
  );
}
