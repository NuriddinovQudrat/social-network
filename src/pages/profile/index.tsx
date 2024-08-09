import { Col, Flex, Row, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";

import ProfileDetails from "./profile-details";
import UpdateProfile from "./update-profile";

const { Title } = Typography;

const Profile = () => {
  const items: TabsProps["items"] = [
    {
      key: "details",
      label: "Profile details",
      children: <ProfileDetails />,
    },
    {
      key: "update",
      label: "Update profile",
      children: <UpdateProfile />,
    },
  ];

  return (
    <Row gutter={[18, 18]}>
      <Col xl={8} lg={8} md={24} sm={24} xs={24}>
        <Flex vertical align="center" className="box">
          <Title level={4}>Nuriddinov Qudrat</Title>
          <img
            alt=""
            width={180}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            className="rounded-full"
          />
        </Flex>
      </Col>
      <Col xl={16} lg={16} md={24} sm={24} xs={24}>
        <Flex className="box">
          <Tabs defaultActiveKey="1" items={items} className="w-[100%]" />
        </Flex>
      </Col>
    </Row>
  );
};

export default Profile;
