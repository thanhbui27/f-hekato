// component
import SvgColor from "src/admin/components/svg-color";

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: "Dashboard",
    path: "/user/dashboard",
    icon: icon("ic_analytics"),
  },
  {
    title: "My Account",
    path: "/user/my-account",
    icon: icon("ic_user"),
  },
  {
    title: "Cart",
    path: "/user/cart",
    icon: icon("ic_cart"),
  },
  {
    title: "Order",
    path: "/user/my-order",
    icon: icon("ic_order"),
  },
  {
    title: "Blog",
    path: "/user/my-blog",
    icon: icon("ic_blog"),
  },

  {
    title: "HelpDesk",
    path: "/user/help-desk",
    icon: icon("ic_face"),
  },
  {
    title: "Settings",
    path: "/user/settings",
    icon: icon("ic_settings"),
  },
];

export default navConfig;
