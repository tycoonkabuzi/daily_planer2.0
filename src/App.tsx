import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./layouts/Home";
import AddTask from "./layouts/AddTask";
import Help from "./layouts/Help";
import SingleActivity from "./layouts/SingleActivity";
import TimeLeftCountDown from "./components/TimeLeftCountDown";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/day" element={<SingleActivity />} />
          <Route path="/help" element={<Help />} />
        </Route>
        <Route path="/test" element={<TimeLeftCountDown />} />
      </Routes>
    </>
  );
}

export default App;
