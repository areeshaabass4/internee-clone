import React from 'react';

export default function Card({ title, img }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt={title} />
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <a href="#" className="apply">↗ Apply Now</a>
      </div>
    </div>
  );
}
