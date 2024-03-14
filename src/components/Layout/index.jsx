import style from "./style.module.css";
import Logo from "../Logo";
import { Menu, Layout, Segmented, Spin, Typography, Space } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import useAppState from "../../hooks/appState";
import { navItems, themeOptions } from "../../utils/constants";
import { MessageContextWrapper } from "../../context/message";
import appStrings from "../../utils/strings";

const { Header, Sider } = Layout;

export default function GeneralLayout({ children }) {
  // Global state for theme
  const setTheme = useAppState((state) => state.setTheme);
  const isCVUploading = useAppState((state) => state.isCVUploading);
  const isJDUploading = useAppState((state) => state.isJDUploading);
  const isQuestionUploading = useAppState((state) => state.isQuestionUploading);

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

  function GetHeaderState() {
    if (isCVUploading) {
      return (
        <Space size={10}>
          <Spin size="small" />
          <Typography.Text strong>
            {appStrings.language.navbar.uploadingCV}
          </Typography.Text>
        </Space>
      );
    }
    if (isJDUploading) {
      return (
        <Space size={10}>
          <Spin size="small" />
          <Typography.Text strong>
            {appStrings.language.navbar.uploadingJD}
          </Typography.Text>
        </Space>
      );
    }
    if (isQuestionUploading) {
      return (
        <Space size={10}>
          <Spin size="small" />
          <Typography.Text strong>
            {appStrings.language.navbar.uploadingQuestion}
          </Typography.Text>
        </Space>
      );
    }
    return <Logo />;
  }

  return (
    <MessageContextWrapper>
      <Layout className={style.wrapper}>
        <Header>
          <div className={style.header}>
            <GetHeaderState />
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
          <div className={style.content}>{children}</div>
        </Layout>
      </Layout>
    </MessageContextWrapper>
  );
}
