import { useLocalStorageState } from "ahooks";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import CustomHeader from "./components/header";
import CustomSidebar from "./components/sidebar";

const { Content } = Layout;

const CustomLayout = () => {
  const [collapsed, setCollapsed] = useLocalStorageState<any>(
    "is-sidebar-collapsed",
    {
      defaultValue: false,
    }
  );
  const {
    token: { colorBgContainer, borderRadiusLG, colorPrimary },
  } = theme.useToken();

  return (
    <Layout className="h-[100vh]">
      <CustomSidebar collapsed={collapsed} />
      <Layout>
        <CustomHeader
          colorBgContainer={colorBgContainer}
          colorPrimary={colorPrimary}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Content
          style={{
            margin: "20px 20px",
            padding: 20,
            minHeight: "calc(100vh - 120px)",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "scroll",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
