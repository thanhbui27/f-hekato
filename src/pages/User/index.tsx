import { Outlet } from "react-router-dom";
import { Main, StyledRoot } from "src/routes/RootAdminPage";
import NavUser from "./components/nav";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const UUserPage = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="user-page">
        {/* <div className="slide__bar">
        <div className="container center-bar">
          <h1>Home</h1>
          <span>Home - User</span>
        </div>
      </div> */}
        <div className="container">
          <StyledRoot sx={{ marginTop: "100px" }}>
            <NavUser />
            <Main>
              <Outlet />
            </Main>
          </StyledRoot>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default UUserPage;
