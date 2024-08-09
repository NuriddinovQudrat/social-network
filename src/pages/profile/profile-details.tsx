import { Col, Divider, Row } from "antd";

const ProfileDetails = (props: any) => {
  const { data } = props;

  return (
    <Row className="mt-4">
      <Col span={6}>
        <b>Name:</b>
      </Col>
      <Col span={18}>{data?.name}</Col>
      <Divider />

      <Col span={6}>
        <b>Email:</b>
      </Col>
      <Col span={18}>{data?.email}</Col>
      <Divider />

      <Col span={6}>
        <b>Bio:</b>
      </Col>
      <Col span={18}>{data?.bio}</Col>
    </Row>
  );
};

export default ProfileDetails;
