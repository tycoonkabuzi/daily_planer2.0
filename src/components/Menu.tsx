import Home from "../layouts/Home";
import "../style/main.scss";
import homeIcon from "../assets/images/home.png";
import addIcon from "../assets/images/add.png";
import dashboardIcon from "../assets/images/dashboard.png";
import helpIcon from "../assets/images/help.png";
const Menu = () => {
  return (
    <aside className="main">
      <div className="main__menu">
        <h1>
          Daily<span>Plan</span>
        </h1>
        <ul>
          <a href="/">
            <li>
              <img src={homeIcon} />
              <p>Home</p>
            </li>
          </a>
          <a href="/add">
            <li>
              <img src={addIcon} />
              <p>Add</p>
            </li>
          </a>
          <a href="/dashboard">
            <li>
              <img src={dashboardIcon} />
              <p>dashboard</p>
            </li>
          </a>
          <a href="/help">
            <li>
              <img src={helpIcon} />
              <p>help</p>
            </li>
          </a>
        </ul>
      </div>
      <Home />
    </aside>
  );
};
export default Menu;
