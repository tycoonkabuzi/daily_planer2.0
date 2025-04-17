import "../style/main.scss";
const AddTask = () => {
  return (
    <div className="main__home">
      <div className="main__home__title">New event</div>
      <div className="main__home__inputs">
        <input type="text" placeholder="Event" />
        <input type="date" placeholder="Date" />
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
        <textarea name="" id="" cols="30" rows="10">
          Notes
        </textarea>
      </div>
      <div className="main__home__urgency">
        <div className="main__home__urgency__colors">
          <div className="main__home__urgency__colors--red"></div>
          <div className="main__home__urgency__colors--orange"></div>
          <div className="main__home__urgency__colors--yellow"></div>
          <div className="main__home__urgency__colors--green"></div>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};
export default AddTask;
