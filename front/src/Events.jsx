import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3030")
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  const handleDelete = (event_id) => {
    axios.delete("http://localhost:3030/delete_event/" + event_id)
      .then((res) => {
        setEvents(events.filter(event => event.event_id !== event_id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container mt-5" style={{ overflowY: "auto", maxHeight: "80vh" }}>
      {events.length !== 0 ? 
        <div className="row">
          {events.map(event => (
            <div key={event.event_id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.event_name}</h5>
                  <p className="card-text"><strong>Location:</strong> {event.location}</p>
                  <p className="card-text"><strong>Start at:</strong> {event.start_at}</p>
                  <Link to={`/event/${event.event_id}`} className="btn btn-primary btn-sm me-2">View Details</Link>
                  <Link to={`/update_events/${event.event_id}`} className="btn btn-info btn-sm me-2">Update</Link>
                  <button type="button" onClick={() => handleDelete(event.event_id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        : <h2>No Records</h2>
      }
    </div>
  );
};

export default Events;
