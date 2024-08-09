import { Button, Col, Form, FormProps, Input, Row } from "antd";
import { useProfileUpdate } from "hooks/useUpdateProfile";
import { useEffect } from "react";
import { UserDataInterface } from "types/server-data.types";

const UpdateProfile = (props: any) => {
  const { data } = props;
  const [form] = Form.useForm();

  const { mutateAsync: updateProfile } = useProfileUpdate();

  const onFinish: FormProps<UserDataInterface>["onFinish"] = (
    values: UserDataInterface
  ) => {
    updateProfile(values);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);

  return (
    <Form
      name="update-profile"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      form={form}
    >
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item<UserDataInterface>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item<UserDataInterface>
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Email is not valid!",
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item<UserDataInterface> label="Bio" name="bio">
            <Input.TextArea />
          </Form.Item>
        </Col>
      </Row>

      <div className="text-right">
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </div>
    </Form>
  );
};

export default UpdateProfile;
