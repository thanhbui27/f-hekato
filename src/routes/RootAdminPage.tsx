import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import Header from "src/admin/layouts/dashboard/header";
import Nav from "src/admin/layouts/dashboard/nav";
import ThemeProvider from "src/admin/theme";
import { useAppSelector } from "src/hooks/useAppSelector";
import { alert } from "src/components/Common/Alert";
//

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

export const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

export const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------
const RootAdminPage = () => {
  const [open, setOpen] = useState(false);
  const {isAdmin} = useAppSelector(state => state.auth)
  const location = useLocation();
  const nav = useNavigate()

  useEffect(() => {
      if(location.pathname.split("/").find(x => x === "admin") && !isAdmin){
          nav("/")
          alert("error","bạn không có đủ quyền truy cập trang này");
      }
  },[location])

  return (
    <ThemeProvider>
      <StyledRoot>
        <Header onOpenNav={() => setOpen(true)} />
        <Nav openNav={open} onCloseNav={() => setOpen(false)} />
        <Main>
          <Outlet />
        </Main>
      </StyledRoot>
    </ThemeProvider>
  );
};

export default RootAdminPage;
