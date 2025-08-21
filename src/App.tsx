import { Route, Routes } from "react-router";
import "./App.css";
import Menu from "./components/Menu";
import Home from "./layouts/Home";
import AddTask from "./layouts/AddTask";
import Help from "./layouts/Help";
import SingleActivity from "./layouts/SingleActivity";
import TimeLeftCountDown from "./components/TimeLeftCountDown";
import AuthForm from "./components/AuthForm";

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

        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm />} />
      </Routes>
    </>
  );
}

export default App;
