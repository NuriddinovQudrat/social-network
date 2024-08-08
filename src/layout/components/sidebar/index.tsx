import { Layout, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { ROUTER } from "constants/router";

const { Sider } = Layout;
const { Text } = Typography;

interface PropsInterface {
  collapsed: boolean;
}

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

type MenuItem = Required<MenuProps>["items"][number];

const CustomSidebar = (props: PropsInterface) => {
  const { collapsed } = props;
  const location = useLocation();

  const pathName = location.pathname;

  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);

  const items: MenuItem[] = [
    {
      key: ROUTER.USERS,
      icon: <FaUsersGear size={18} />,
      label: (
        <Link to={ROUTER.USERS} className="text-[16px]">
          Users
        </Link>
      ),
    },
    // {
    //   type: "divider",
    // },
    {
      key: "/logout",
      icon: <MdLogout size={18} color="red" />,
      label: <div className="text-[16px] text-[red] mt-[auto]">Logout</div>,
    },
  ];

  const getLevelKeys = (items1: LevelKeysProps[]) => {
    const key: Record<string, number> = {};
    const func = (items2: LevelKeysProps[], level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };

  const levelKeys = getLevelKeys(items as LevelKeysProps[]);

  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
      <Link to="/">
        <Layout
          className={`demo-logo-vertical h-[90px] bg-[#ffffff] flex flex-row items-center justify-center`}
        >
          {collapsed ? null : <Text className="font-[600]">Mohirdev</Text>}
        </Layout>
      </Link>
      <Menu
        className="pt-2"
        style={{ height: "calc(100vh - 90px)", overflowY: "scroll" }}
        mode="inline"
        defaultSelectedKeys={["11"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        items={items}
        selectedKeys={[pathName]}
      />
    </Sider>
  );
};

export default CustomSidebar;
