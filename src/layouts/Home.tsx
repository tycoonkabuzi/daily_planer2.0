import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import "../style/main.scss";
import axios from "axios";
import { useNavigate } from "react-router";
const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/activities");
        const dayOrder = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        const sorted = response.data.sort(
          (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day)
        );
        setData(sorted);
      } catch (error) {
        setError(error.message || "Unable to tech data ");
      } finally {
        setLoading(true);
      }
    };
    fetchData();
  }, []);

  const deleteActivity = (day, id) => {
    try {
      const response = axios.delete(
        `http://localhost:8080/activities?day=${day}&id=${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main__home">
      <div className="main__home__title">Welcome to your Daily Plan</div>

      {loading ? (
        <div className="main__home__content">
          {data && data.length > 0 ? (
            data.map((days) => (
              <div className="main__home__content__day" key={days._id}>
                <div className="main__home__content__day__title">
                  {days.day}
                </div>
                <div className="main__home__content__content__day__content">
                  <ul>
                    {days.events.map((event) => (
                      <div className="event-item">
                        <li
                          key={event._id}
                          onClick={() => {
                            navigate(
                              `/day?singleDay=${days.day}&id=${event._id}`
                            );
                          }}
                          id={event.emergencyLevel}
                        >
                          {event.startTime}-{event.endTime}: {event.activity}
                        </li>
                        <div
                          style={{
                            width: "18%",
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <Icon
                            icon="material-symbols-light:edit-outline"
                            width="20"
                            height="20"
                          />
                          <Icon
                            icon="material-symbols-light:delete-outline"
                            width="20"
                            height="20"
                            onClick={() => {
                              deleteActivity(days.day, event._id);
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="main__home">
              You have no todo, you can add event below
              <button className="button" onClick={() => navigate("/add")}>
                {" "}
                Add event
              </button>
            </div>
          )}
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
export default Home;
