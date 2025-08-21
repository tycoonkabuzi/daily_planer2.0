import { useState } from "react";
import "../style/main.scss";

import { useNavigate } from "react-router";
import api from "../middlewears/api";
const AddTask = () => {
  const [dataToAdd, setDataToAdd] = useState({});
  const [emergency, setEmergency] = useState("low");
  console.log(dataToAdd);
  const navigate = useNavigate();
  const handleFormData = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    switch (e.target.className) {
      case "main__home__urgency__colors--red":
        setEmergency("high");
        break;

      case "main__home__urgency__colors--yellow":
        setEmergency("mid-low");
        break;
      case "main__home__urgency__colors--orange":
        setEmergency("medium");
        break;
      case "main__home__urgency__colors--green":
        setEmergency("low");
        break;
      default:
        setEmergency("low");
        break;
    }
    console.log(dataToAdd);
    setDataToAdd((data) => ({
      ...data,
      [fieldName]: value,
      emergencyLevel: emergency,
    }));
  };

  const addData = async () => {
    try {
      await api.post("/activities", dataToAdd);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main__home">
      <div className="main__home__title">New event</div>
      <div className="main__home__inputs">
        <input
          type="text"
          placeholder="Event"
          name="activity"
          onChange={handleFormData}
        />
        <div>
          <label> Start time </label>
          <input
            name="startTime"
            type="time"
            placeholder="Start time"
            onChange={handleFormData}
          />
          <label> End time </label>
          <input
            name="endTime"
            type="time"
            placeholder="End time"
            onChange={handleFormData}
          />
        </div>
        <input name="date" type="date" onChange={handleFormData} />

        <div className="main__home__inputs__howLong">
          <p>How long?</p>
          <ul className="main__home__inputs__howLong__container">
            <li>5min</li>
            <li>10min</li>
            <li>15min</li>
            <li>20min</li>
            <li>25min</li>
            <li>30min</li>
            <li>35min</li>
            <li>40min</li>
            <li>45min</li>
            <li>50min</li>
            <li id="add">More</li>
          </ul>
        </div>
        <textarea
          name="notes"
          id=""
          cols="30"
          rows="10"
          onChange={handleFormData}
        >
          Notes
        </textarea>
      </div>
      <div className="main__home__urgency">
        <div className="main__home__urgency__colors">
          <div
            className="main__home__urgency__colors--red"
            onClick={handleFormData}
          ></div>
          <div
            className="main__home__urgency__colors--orange"
            onClick={handleFormData}
          ></div>
          <div
            className="main__home__urgency__colors--yellow"
            onClick={handleFormData}
          ></div>
          <div
            className="main__home__urgency__colors--green"
            onClick={handleFormData}
          ></div>
        </div>
        <button
          onClick={() => {
            addData();
            navigate("/");
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddTask;
