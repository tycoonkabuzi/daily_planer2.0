import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import TimeLeftCountDown from "../components/TimeLeftCountDown";
import api from "../middlewears/api";

const SingleActivity = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const singleDay = searchParams.get("singleDay");
  const id = searchParams.get("id");
  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const response = await api.get(
          `/activities/day?singleDay=${singleDay}&id=${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    };
    getSinglePost();
  }, []);

  console.log(data);
  return (
    <div className="main__home">
      {loading ? (
        <>
          <div className="main__home__title">{data.activity} </div>
          <div className="main__home__home">
            <div className="main__home__home__header">
              Time left:
              <TimeLeftCountDown
                date={data.date}
                startTime={data.startTime}
                endTime={data.endTime}
              />
            </div>
            <div className="main__home__home__content">
              <h2>Notes:</h2>
              <br />
              {data.notes}
            </div>
          </div>{" "}
        </>
      ) : (
        <p> loading</p>
      )}
    </div>
  );
};
export default SingleActivity;
