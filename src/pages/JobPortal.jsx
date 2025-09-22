import React from "react";

export default function JobPortal() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechSoft",
      location: "Karachi, Pakistan",
      type: "Full-Time",
      image: "/images/frontend.jpg",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Lahore, Pakistan",
      type: "Remote",
      image: "/images/uiux.jpeg",
    },
    {
      id: 3,
      title: "AI Intern",
      company: "FutureAI",
      location: "Remote",
      type: "Internship",
      image: "/images/ai.jpeg",
    },
    {
      id: 4,
      title: "Marketing Executive",
      company: "Brandify",
      location: "Islamabad, Pakistan",
      type: "Full-Time",
      image: "/images/marketing.jpg",
    },
  ];

  return (
    <div className="jobportal-page">
      <div className="container">
        {/* Header */}
        <div className="jobportal-header">
          <h1>Job Portal</h1>
          <p>Find your dream job and apply today.</p>
        </div>

        {/* Search + Filter */}
        <div className="job-filters">
          <input
            type="text"
            placeholder="Search jobs..."
            className="job-search"
          />
          <select className="job-filter">
            <option>All Types</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
        </div>

        {/* Job Cards */}
        <div className="grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-img">
                <img src={job.image} alt={job.title} />
              </div>
              <div className="job-card-body">
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="location">{job.location}</p>
                <span className="badge">{job.type}</span>
                <button className="btn btn-primary apply-btn">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
