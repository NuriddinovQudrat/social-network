import { Col, Flex, Result, Row, Spin, Tabs, Typography } from "antd";
import type { TabsProps } from "antd";

import ProfileDetails from "./profile-details";
import UpdateProfile from "./update-profile";
import { useQuery } from "react-query";
import { UserDataInterface } from "types/server-data.types";
import axios from "axios";
import { useState } from "react";

const { Title } = Typography;

const Profile = () => {
  const [tabType, setTabType] = useState<string>("details");

  const items: TabsProps["items"] = [
    {
      key: "details",
      label: "Profile details",
    },
    {
      key: "update",
      label: "Update profile",
    },
  ];

  const { data, isLoading, isError } = useQuery<UserDataInterface>(
    ["user-info"],
    async () => {
      const response = await axios.get(`/api/user`);
      return response.data;
    }
  );

  if (isLoading) {
    <Spin />;
  }
  if (isError) {
    <Result status="500" title="500" subTitle="Sorry, something went wrong." />;
  }

  return (
    <Row gutter={[18, 18]}>
      <Col xl={8} lg={8} md={24} sm={24} xs={24}>
        <Flex vertical align="center" className="box">
          <Title level={4}>{data?.name}</Title>
          <img
            alt={data?.name}
            width={180}
            src={data?.image}
            className="rounded-full"
          />
        </Flex>
      </Col>

      <Col xl={16} lg={16} md={24} sm={24} xs={24}>
        <div className="box">
          <Tabs
            defaultActiveKey={tabType}
            activeKey={tabType}
            items={items}
            className="w-[100%]"
            onChange={(e: string) => setTabType(e)}
          />
          {tabType === "details" ? <ProfileDetails data={data} /> : null}
          {tabType === "update" ? <UpdateProfile data={data} /> : null}
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
