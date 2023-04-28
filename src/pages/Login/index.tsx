import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginParams } from "../../services/api/auth/types";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/auth/slice";
import { AppDispatch } from "../../store/configureStore";
import "./styles.scss";
import { selectIsAuth } from "../../store/auth/selector";
import { alert } from "../../components/Common/Alert";


const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useSelector(selectIsAuth)
  const navigate = useNavigate();
  const [login, setLogin] = useState<LoginParams>({
    userName : '',
    password : ''
  })
  const handleSubmit  = async (e : React.SyntheticEvent) => {
    e.preventDefault()
    const res = await dispatch(authLogin(login))
    if(authLogin.fulfilled.match(res)){
      navigate("/")
      alert("success","Đăng nhập thành công");
    }else{
      alert("error","Đăng nhập thất bại");
    }
  }

  console.log(isAuth)

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
                <input type="text" placeholder="Username" name="userName" className="input" onChange={e => setLogin({...login, userName : e.target.value})} />
              </div>

              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                  name="password"
                  onChange={e => setLogin({...login, password : e.target.value})}
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
            <a href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </a>
          </div>

          <div className="media-options">
            <a href="#" className="field google">
              <img src="#" alt="" className="google-img" />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
