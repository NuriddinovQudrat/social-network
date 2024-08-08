import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Layout,
  Space,
  Typography,
} from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useLayoutEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";

const { Header } = Layout;
const { Text } = Typography;

interface PropsInterface {
  colorBgContainer: string;
  colorPrimary: string;
  collapsed: boolean;
  setCollapsed: any;
}

const CustomHeader = (props: PropsInterface) => {
  const { colorBgContainer, collapsed, setCollapsed } = props;

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div>
          <Space className="">
            <Avatar size={40} style={{ textTransform: "uppercase" }}>
              Nuriddinov Qudrat
            </Avatar>
            <div className="w-[150px]">
              <h5 className="mr-2 my-0">Nuriddinov Qudrat</h5>
            </div>
          </Space>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <Space className="p-1" align="center">
          <MdLogout size={18} color="red" className="mt-[5px] mr-[10px]" />
          <Text className="text-[red]">Logout</Text>
        </Space>
      ),
    },
  ];

  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setCollapsed(true);
    } else {
      setIsMobile(false);
    }
  }, [setCollapsed]);

  return (
    <Header
      style={{
        padding: 20,
        background: colorBgContainer,
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isMobile ? null : (
        <Button
          type="text"
          icon={
            collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: "24px" }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: "24px" }} />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
            marginRight: "20px",
          }}
        />
      )}

      <Space>
        <Space wrap size={16}>
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            arrow
            trigger={["click"]}
          >
            <Badge count={0}>
              <Avatar
                size={48}
                icon={<UserOutlined />}
                className="cursor-pointer"
              />
            </Badge>
          </Dropdown>
        </Space>
      </Space>
    </Header>
  );
};

export default CustomHeader;
