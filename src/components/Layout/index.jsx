import style from "./style.module.css";
import Logo from "../Logo";
import { Menu, Layout, Segmented } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import useAppState from "../../hooks/appState";
import { navItems, themeOptions } from "../../utils/constants";

const { Header, Sider } = Layout;

export default function GeneralLayout({ children }) {
  // Global state for theme
  const setTheme = useAppState((state) => state.setTheme);

  // Define hooks of react-router-dom
  const navigate = useNavigate();
  const location = useLocation();

  // Handle theme change
  function handleSetTheme(theme) {
    setTheme(theme);
  }

  // Handle navigation click
  function handleNavClick({ key }) {
    navigate(key);
  }

  function getThemeOptions(options) {
    return options.map((option) => {
      // Get option icon
      let icon = <></>;
      if (option === "light") {
        icon = <SunOutlined />;
      }
      if (option === "dark") {
        icon = <MoonOutlined />;
      }
      return {
        value: option,
        label: icon,
      };
    });
  }

  return (
    <Layout className={style.wrapper}>
      <Header>
        <div className={style.header}>
          <Logo />
          <Segmented
            options={getThemeOptions(themeOptions)}
            onChange={handleSetTheme}
          />
        </div>
      </Header>
      <Layout className={style.navbar}>
        <Sider>
          <Menu
            className={style.navbar}
            defaultSelectedKeys={[location.pathname]}
            items={navItems}
            onClick={handleNavClick}
          />
        </Sider>
        {children}
      </Layout>
    </Layout>
  );
}
