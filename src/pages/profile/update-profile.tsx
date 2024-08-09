import { Button, Col, Form, FormProps, Input, Row } from "antd";
import { useEffect } from "react";

type FieldType = {
  name?: string;
  email?: string;
  bio?: string;
  image?: string;
};

const UpdateProfile = (props: any) => {
  const { data } = props;
  const [form] = Form.useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);

  return (
    <div>
      <Form
        name="update-profile"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        form={form}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item<FieldType>
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
            <Form.Item<FieldType> label="Bio" name="bio">
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
    </div>
  );
};

export default UpdateProfile;
