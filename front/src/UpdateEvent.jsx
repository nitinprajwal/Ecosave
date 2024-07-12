import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";

const UpdateEvent = () => {
  const {event_id} = useParams()
  const [values, setValues] = useState({
    event_id: "",
    event_name: "",
    description: "",
    location: "",
    start_at: "",
    category: "",
    organiser: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put("http://localhost:3030/update_events/" + event_id, values)
      .then((res) => navigate("/events"))
      .catch((err) => console.log(err))
    alert("Event Updated.");
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/getRecords/" + event_id)
      .then((res) =>
        setValues({
          ...values,
          event_id: res.data[0].event_id,
          event_name: res.data[0].event_name,
          description: res.data[0].description,
          location: res.data[0].location,
          start_at: res.data[0].start_at,
          category: res.data[0].category,
          organiser: res.data[0].organiser,
        })
      )
      .catch((err) => console.log(err));
  }, [event_id]);
  return (
    <div className="d-flex align-items-center flex-column mt-3 ">
      <h1>Update Event</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="event_id" class="form-label">
            Event ID:
          </label>
          <input
            type="text"
            class="form-control"
            id="event_id"
            placeholder="Enter Event ID"
            value={values.event_id}
            name="event_id"
            onChange={(e) => setValues({ ...values, event_id: e.target.value })}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="event_name" class="form-label">
            Event Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="event_name"
            placeholder="Enter event Name"
            value={values.event_name}
            name="event_name"
            onChange={(e) =>
              setValues({ ...values, event_name: e.target.value })
            }
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="dscription" class="form-label">
            Description:
          </label>
          <input
            type="text"
            class="form-control"
            id="description"
            placeholder="Enter event description"
            value={values.description}
            name="description"
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="location" class="form-label">
            Location:
          </label>
          <input
            type="text"
            class="form-control"
            id="location"
            placeholder="Enter event location"
            value={values.location}
            name="location"
            onChange={(e) => setValues({ ...values, location: e.target.value })}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="start_at" class="form-label">
            Starts at:
          </label>
          <input
            type="date"
            class="form-control"
            id="start_at"
            name="start_at"
            value={values.start_at}
            onChange={(e) => setValues({ ...values, start_at: e.target.value })}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="category" class="form-label">
            Location:
          </label>
          <input
            type="text"
            class="form-control"
            id="category"
            placeholder="Enter event category"
            value={values.category}
            name="category"
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="organiser" class="form-label">
            Organiser:
          </label>
          <input
            type="text"
            class="form-control"
            id="organiser"
            value={values.organiser }
            placeholder="Enter Organiser Name"
            name="organiser"
            onChange={(e) =>
              setValues({ ...values, organiser: e.target.value })
            }
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="image" class="form-label">
            Image:
          </label>
          <input
            type="file"
            class="form-control"
            id="image"
            name="image"
            onChange={(e) => setValues({ ...values, image: e.target.value })}
          />
        </div>
        <button type="submit" class="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateEvent;