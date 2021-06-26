import './Banner.css';
import React from 'react';

function Banner() {
  return (
    <div className="main-banner">
      <div className="banner-image"></div>
      <h2 className="web-desc">All the popular movies in one place.
        <p className="web-subtitle">Watch anywhere. Anytime.</p>
      </h2>
    </div>
  );
}

export default Banner;