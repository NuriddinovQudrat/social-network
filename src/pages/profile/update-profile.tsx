import { Button, Col, Form, FormProps, Input, message, Row } from "antd";
import axios, { AxiosError, AxiosResponse } from "axios";
import { UPDATE_USER_INFO, USER_INFO } from "constants/query-keys";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { UserDataInterface } from "types/server-data.types";

const UpdateProfile = (props: any) => {
  const { data } = props;
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const { mutate: updateProfile, isLoading } = useMutation({
    mutationKey: [UPDATE_USER_INFO],
    mutationFn: async (data: UserDataInterface) => {
      return await axios.patch(`/api/user`, data);
    },
    onSuccess: (res: AxiosResponse) => {
      messageApi.success("Succesfully updated!");
      queryClient.invalidateQueries([USER_INFO]);
    },
    onError: (err: AxiosError) => {
      messageApi.error("An error occured!");
    },
  });

  const onFinish: FormProps<UserDataInterface>["onFinish"] = (
    values: UserDataInterface
  ) => {
    updateProfile(values);
  };

  useEffect(() => {
    form.setFieldsValue(data);
  }, [data, form]);

  return (
    <>
      {contextHolder}
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
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Update
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UpdateProfile;
