import { styled } from "@mui/system";
import { useNavigate } from "react-router";

const StyleLogo = styled("div")(() => ({
  span: {
    fontFamily: "inherit",
    fontSize: "34px",
    lineHeight: 1,
    color: "#000",
    fontWeight: 800,
    cursor: "pointer",
  },
}));

export const Logo = () => {
    const nav = useNavigate();
  return (
    <StyleLogo onClick={() =>  nav("/")}>
      <span className="logo">Hekto</span>
    </StyleLogo>
  );
};
