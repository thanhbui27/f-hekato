import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAppSelector } from "src/hooks/useAppSelector";
import { useEffect } from "react";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { setTokened } from "src/store/auth/slice";
import { alert } from "src/components/Common/Alert";
import { handleMessagerErrorLogin } from "src/constants/messagerError";

const RootPage: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const nav = useNavigate();

  const setToken = async () => {
    const query = new URLSearchParams(location.search);
    if (query.get("token")) {
      const token = query.get("token");
      dispatch(setTokened(token));
      nav("/");
      alert("success", "Đăng nhập thành công");
    } else if (query.get("error")) {
      alert("error", handleMessagerErrorLogin(query.get("error")!)!);
    }
  };

  useEffect(() => {
    if (location.pathname === "/login" && isAuth) {
      nav("/");
    }
    if (location.pathname === "/setAuth") {
      setToken();
    }
  }, [location, isAuth, nav]);
  return (
    <div className="wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootPage;
