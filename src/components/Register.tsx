import { Icon } from "@iconify/react/dist/iconify.js";
import backgroundVideo from "../assets/video/7235110-uhd_2160_3840_30fps.mp4";

const Register = () => {
  return (
    <div className="main-login">
      <div className="main-login-background">
        <div className="main-login-background-text">
          <div className="main-login-background-text--top">
            <p>You can easily</p>
            <h1>Speed up your work with our WebApp</h1>
          </div>

          <div className="main-login-background-text--bottom">
            <p>Reach out to us </p>
            <div className="main-login-background-text--bottom-icons">
              <Icon icon="uim:facebook" width={"70px"} />
              <Icon icon="uim:youtube" width={"70px"} />
              <Icon icon="uim:twitter" width={"70px"} />
              <Icon icon="uim:instagram" width={"70px"} />
            </div>
          </div>
        </div>
        <video autoPlay muted loop src={backgroundVideo}></video>
      </div>
      <div className="main-login-formContainer">
        <h1>Get Started Now</h1>
        <p>Please login the account to continue</p>
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here..."
          />
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="eg: exemple@exemple.com"
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
          />

          <button className="btn">Sign in </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
