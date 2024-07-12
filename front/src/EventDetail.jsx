import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { event_id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/event/${event_id}`);
        setEvent(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [event_id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>No event found</p>;

  return (
    <div className="container mt-5">
      <h2>{event.event_name}</h2>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Start at:</strong> {event.start_at}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Organiser:</strong> {event.organiser}</p>
      {/* Add more event details as needed */}
    </div>
  );
};

export default EventDetail;
