import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useNavigate, useLocation } from "react-router-dom";
import { RouteNames } from "../router";

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    {
      key: "/courses",
      'data-testid': "courses-link",
      onClick: () => navigate(RouteNames.COURSES),
      label: 'Courses'
    },
    {
      key: `/courses/${location.pathname.split('/')[2]}`,
      'data-testid': "courses-item-link",
      label: 'Course details',
      disabled: true,
    },
  ]

  return (
    <Header>
      <Menu 
        theme='dark'
        mode="horizontal"
        selectedKeys={(location.pathname !== `/`) ? [location.pathname] : [RouteNames.COURSES]}
        items={menuItems} 
      />
    </Header>
  );
}

export default Navbar;