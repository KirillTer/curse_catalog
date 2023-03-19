import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import MenuItem from "antd/lib/menu/MenuItem";
import { useNavigate, useLocation } from "react-router-dom";
import { RouteNames } from "../router";

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Header>
      <Menu theme='dark' mode="horizontal" defaultSelectedKeys={[location.pathname]}>
        <MenuItem key="/courses" data-testid="posts-link" onClick={() => navigate(RouteNames.COURSES)}>Courses</MenuItem>
        <MenuItem key="/courses/:id" data-testid="users-link" disabled={true}>Course details</MenuItem>
      </Menu>
    </Header>
  );
}

export default Navbar;