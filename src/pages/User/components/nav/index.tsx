import { Box, Typography } from "@mui/material";
import NavSection from "src/admin/components/nav-section/NavSection";
import navConfig from "./constants";
import Scrollbar from "src/admin/components/scrollbar/Scrollbar";
interface Props {
}

const NAV_WIDTH = 280;

const NavUser: React.FC<Props> = () => {

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Typography
          variant="subtitle2"
          sx={{ color: "text.primary", fontSize: 20 + "px", fontWeight: "800" }}
        >
          My Account
        </Typography>
      </Box>

      <NavSection
        data={navConfig}
        sx={{ border: "1px solid rgba(0, 0, 0, 0.08)", borderRadius : "10px" }}
      />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Box
        sx={{
          width: NAV_WIDTH,
          bgcolor: "background.default",
          borderRightStyle: "dashed",
        }}
      >
        {renderContent}
      </Box>
    </Box>
  );
};

export default NavUser;
