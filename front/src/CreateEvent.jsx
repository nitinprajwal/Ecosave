import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvents = () => {
    const [values,setValues] = useState({
      event_id:"" , event_name:"" , description:"" , location:"" , start_at:"" , category:"", organiser:""
    })
    const navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3030/create_events',values)
        .then(res => navigate('/events'))
        .catch (err => console.log(err))
        alert("Event created.")

    }
  return (
    <div className="d-flex align-items-center flex-column mt-3 ">
        <h1>Create an Event</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="eventid" class="form-label">
            Event ID:
          </label>
          <input
            type="text"
            class="form-control"
            id="eventid"
            placeholder="Enter Event ID"
            name="eventid"
            onChange={(e)=> setValues({...values, event_id : e.target.value})}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="eventName" class="form-label">
            Event Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="eventName"
            placeholder="Enter event Name"
            name="eventName"
            onChange={(e)=> setValues({...values, event_name : e.target.value})}
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
            name="description"
            onChange={(e)=> setValues({...values, description : e.target.value})}
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
            name="location"
            onChange={(e)=> setValues({...values, location : e.target.value})}
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
            onChange={(e)=> setValues({...values, start_at : e.target.value})}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="category" class="form-label">
            Category:
          </label>
          <input
            type="text"
            class="form-control"
            id="category"
            placeholder="Enter event category"
            name="category"
            onChange={(e)=> setValues({...values, category : e.target.value})}
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
            placeholder="Enter Organiser Name"
            name="organiser"
            onChange={(e)=> setValues({...values, organiser : e.target.value})}
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
            onChange={(e)=> setValues({...values, image : e.target.value})}
          />
        </div>
        <button type="submit" class="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvents;