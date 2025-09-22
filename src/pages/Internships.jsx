import React from "react";
import Card from "../components/Card";

const items = [
  {
    title: "Graphic Design",
    img: "/images/design.jpeg",
  },
  {
    title: "Chatbot Development",
    img: "/images/chatbot.jpeg",
  },
  {
    title: "Frontend Internship",
    img: "/images/frontend.jpg",
  },
  {
    title: "Backend Development",
    img: "/images/backend.jpg",
  },
  {
    title: "App Development",
    img: "/images/app.jpg",
  },
  {
    title: "Other Internships",
    img: "/images/other.jpg",
  },
];

export default function Internships() {
  return (
    <div className="internships-page">
      <div className="section-header">
        <span className="badge">Programs</span>
        <h2>Explore Our Internship Programs</h2>
        <p>
          Choose from multiple domains and start building your career with{" "}
          <strong>Internee.pk</strong>.
        </p>
      </div>

      <div className="container">
        <div className="grid">
          {items.map((it) => (
            <Card key={it.title} {...it} />
          ))}
        </div>
      </div>
    </div>
  );
}
