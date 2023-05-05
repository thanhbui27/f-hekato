import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./styles.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterParams } from "src/services/api/auth/types";
import { alert } from "src/components/Common/Alert";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { userRegister } from "src/store/auth/slice";

interface IRegister extends RegisterParams {
  confirmPassword: string;
}
const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
const emailRegExp = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
const passwordReg = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8}$/
const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required().matches(emailRegExp, "Email không đúng định dạng"),
  password: yup.string().required().matches(passwordReg, "Mật khẩu phải > 8 kí tự và có ít nhất 1 chữ hoa 1 chữ số và 1 kí tự đặc biệt"),
  phoneNumber: yup.string().required().matches(phoneRegExp, "Số điện thoại không đúng định dạng"),
  userName: yup.string().required(),
  confirmPassword : yup.string().required()
});

const Register = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<IRegister>();
  const nav = useNavigate()
  const onSubmit: SubmitHandler<IRegister> = (data: IRegister) => {
    if (data.password !== data.confirmPassword) {
      alert("error", "Password không trùng nhau");
      return;
    };

    schema
      .validate(data)
      .then(async function(value) {
         const res = await dispatch(userRegister(value))
         if(userRegister.fulfilled.match(res)){
          nav("/login")
          alert("success", "Đăng ký thành công")
         }else {
          alert("error", "Đăng ký thất bại")
         }
      })
      .catch(function(err) {
        if(err.message){
          alert("error", err.message);
        }
      });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("fullName")}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  {...register("userName")}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  {...register("email")}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  {...register("phoneNumber")}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  required
                  {...register("confirmPassword")}
                />
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
