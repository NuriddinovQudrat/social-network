import { Button, Upload, Col, Form, FormProps, Input, Row } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";

type FieldType = {
  name?: string;
  email?: string;
  bio?: string;
  image?: string;
};

const UpdateProfile = () => {
  const props: UploadProps = {
    action: "//jsonplaceholder.typicode.com/posts/",
    maxCount: 1,
    // previewFile(file) {
    //   console.log("Your upload file:", file);
    //   // Your process logic. Here we just mock to the same file
    //   return fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8", {
    //     method: "POST",
    //     body: file,
    //   })
    //     .then((res) => res.json())
    //     .then(({ thumbnail }) => thumbnail);
    // },
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="update-profile"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
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

          <Col span={24}>
            <Form.Item<FieldType> label="Image" name="image">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
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
