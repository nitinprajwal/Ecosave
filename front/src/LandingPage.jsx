import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the CSS file
import eventImage from './event_image.png'; // Import the image

const LandingPage = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-left">
          <h1 className="display-4 font-weight-bold">
            Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>
          <p className="lead my-4">
            Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
          </p>
          <Link to="/events" className="btn btn-primary btn-lg">Explore Events</Link>
        </div>
        <div className="col-lg-6 text-center">
          <img src={eventImage} alt="Event" className="img-fluid rounded-circle" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
