import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginParams } from "../../services/api/auth/types";
import { useDispatch } from "react-redux";
import { authLogin } from "../../store/auth/slice";
import { AppDispatch } from "../../store/configureStore";
import "./styles.scss";
import { alert } from "../../components/Common/Alert";
import {url} from "src/services/request"

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [login, setLogin] = useState<LoginParams>({
    userName: "",
    password: "",
  });
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await dispatch(authLogin(login));
    if (authLogin.fulfilled.match(res)) {
      navigate("/");
      alert("success", "Đăng nhập thành công");
    } else {
      alert("error", "Đăng nhập thất bại");
    }
  };
  const handleLoginGoogle = async () => {
    window.location.href = url+"google-signin"
  };

  const handleLoginFacebook= async () => {
    window.location.href = url+"facebook-signin"
  };

  return (
    <div className="logins">
      <div className="slide__bar">
        <div className="container center-bar">
          <h1>Đăng nhập</h1>
          <span>Đăng nhập</span>
        </div>
      </div>
      <div className="container">
        <div className="form login">
          <div className="form-content">
            <div className="title">Đăng Nhập</div>
            <form action="post" onSubmit={handleSubmit}>
              <div className="field input-field">
                <input
                  type="text"
                  placeholder="Username"
                  name="userName"
                  className="input"
                  onChange={(e) =>
                    setLogin({ ...login, userName: e.target.value })
                  }
                />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  name="password"
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <a href="#" className="forgot-pass">
                  Forgot password?
                </a>
              </div>

              <div className="field button-field">
                <button>Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>
                Don't have an account?
                <Link to="/register" className="link signup-link">
                  Signup
                </Link>
              </span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <a href="#" className="field facebook" onClick={handleLoginFacebook}>
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>

          <div className="media-options" onClick={handleLoginGoogle}>
            <a href="#" className="field google">
              <img src="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg" alt="https://pixlok.com/wp-content/uploads/2021/04/Google-Icon-PNG-768x768.jpg" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
