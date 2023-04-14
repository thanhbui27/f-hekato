import { Link } from "react-router-dom";
import "./styles.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="slide__bar">
        <div className="container center-bar">
          <h1>Đăng ký thành viên</h1>
          <span>Đăng ký</span>
        </div>
      </div>
      <div className="container">
  
        <div className="content">
        <div className="title">Đăng ký</div>
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
          <div className="form-link">
              <span>
                you have an account?
                <Link to="/login" className="link signup-link">
                  Login
                </Link>
              </span>
            </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Register with Facebook</span>
            </a>
          </div>

          <div className="media-options">
            <a href="#" className="field google">
              <img src="#" alt="" className="google-img" />
              <span>Register with Google</span>
            </a>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Register;
