import { Icon } from "@iconify/react/dist/iconify.js";
import backgroundVideo from "../assets/video/7235110-uhd_2160_3840_30fps.mp4";
import { useState } from "react";

import { useLocation, useNavigate } from "react-router";
import api from "../middlewears/api";

const AuthForm = () => {
  const [newUser, setNewUser] = useState({});
  const location = useLocation().pathname;
  const navigate = useNavigate();

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/register", newUser);
      console.log("Registered successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/login", newUser);
      console.log("login Successfully");
      navigate("/");
    } catch (error) {}
  };
  console.log(newUser);
  return (
    <div className="main-login">
      <div
        className={`main-login-background ${
          location === "/register" ? "second radius-left" : "radius-right"
        }`}
      >
        <div className="main-login-background-text">
          <div className="main-login-background-text--top">
            <p>You can easily</p>
            <h1>Track your activities with our WebApp</h1>
          </div>

          <div className="main-login-background-text--bottom">
            <p>Reach out to us </p>
            <div className="main-login-background-text--bottom-icons">
              <Icon icon="uim:facebook" width={"40px"} />
              <Icon icon="uim:youtube" width={"40px"} />
              <Icon icon="uim:twitter" width={"40px"} />
              <Icon icon="uim:instagram" width={"40px"} />
            </div>
          </div>
        </div>
        <video autoPlay muted loop src={backgroundVideo}></video>
      </div>
      <div className="main-login-formContainer first">
        {location === "/register" ? (
          <>
            <h1>Get Started Now</h1>
            <p>Please sign in the account to continue</p>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <p>Please login to the account to continue</p>
          </>
        )}

        <form action="">
          {location === "/register" ? (
            <>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name here..."
                onChange={handleForm}
              />
            </>
          ) : (
            ""
          )}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="eg: exemple@exemple.com"
            onChange={handleForm}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleForm}
          />

          {location === "/register" ? (
            <button className="btn" onClick={signIn}>
              Sign in
            </button>
          ) : (
            <button className="btn" onClick={signUp}>
              Log in
            </button>
          )}

          <div className="account-message">
            {location === "/register" ? (
              <p>
                You already have an account <a href="/login">Login</a>
              </p>
            ) : (
              <p>
                You don't have an account <a href="/register">sign in </a>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
