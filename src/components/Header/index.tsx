import "./Header.scss";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone-call.svg";
import User from "../../assets/icons/user.svg";
import Heart from "../../assets/icons/heart-white.svg";
import Cart from "../../assets/icons/card-white.svg";
import Search from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";
import CustomerButton from "../Common/CustomerButton";
import { useAppSelector } from "src/hooks/useAppSelector";
import { logout } from "src/store/auth/slice";
import { useState } from "react";
import { useAppDispatch } from "src/hooks/useAppDispatch";

const Header: React.FC = () => {
  const { isAuth, me, isAdmin } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogOut = async () => {
    await dispatch(logout());
  };
  return (
    <header className="header">
      <div className="header__bar">
        <div className="container header--flex--between">
          <div className="header__barLeft">
            <span>
              {" "}
              <img src={Mail} alt="" /> bthanh2001@gmail.com
            </span>
            <span>
              {" "}
              <img src={Phone} alt="" /> 0393256471
            </span>
          </div>
          <div className="header__barRight">
            {isAuth ? (
              <div className="dropdown" onClick={handleOpen}>
                <span>
                  <img src={User} alt="" /> {`${me?.fullName}`}
                </span>
                <div
                  className="dropdown-content"
                  style={{
                    display: !open ? "none" : "block",
                  }}
                >
                  <Link to={"/user/dashboard"}>
                    <span>Thông tin người dùng</span>
                  </Link>
                  {isAdmin && (
                    <Link to={"/admin/dashboard/statistics"}>
                      <span>Trang quản trị</span>
                    </Link>
                  )}
                  <Link to={"#"} onClick={handleLogOut}>
                    <span>Đăng xuất</span>
                  </Link>
                </div>
              </div>
            ) : (
              <Link to={"/login"}>
                <span>
                  Login <img src={User} alt="" />{" "}
                </span>
              </Link>
            )}

            <span>
              Wishlist <img src={Heart} alt="" />{" "}
            </span>
            <Link to={"/cart"}>
              {" "}
              <span>
                <img src={Cart} alt="" />{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__navBar ">
        <div className="container header--flex--between">
          <div className="header--flex--between">
            <span className="logo">Hekto</span>
            <ul className="menu">
              <li className="menu__item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="menu__item">
                <Link to={"/pages"}>Pages</Link>
              </li>
              <li className="menu__item">
                <Link to={"/products"}>Products</Link>
              </li>
              <li className="menu__item">
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li className="menu__item">
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className="menu__item">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="header__search">
            <input type="text" />
            <CustomerButton
              element={<img src={Search} className="btn-search" alt="" />}
              customerCLass="btn__search"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
