import { Col, Divider, Row } from "antd";

const ProfileDetails = () => {
  return (
    <Row className="mt-4">
      <Col span={6}>
        <b>Name:</b>
      </Col>
      <Col span={18}>Nuriddinov Qudrat</Col>
      <Divider />

      <Col span={6}>
        <b>Email:</b>
      </Col>
      <Col span={18}>email@gmail.com</Col>
      <Divider />

      <Col span={6}>
        <b>Bio:</b>
      </Col>
      <Col span={18}>Bio</Col>
    </Row>
  );
};

export default ProfileDetails;
