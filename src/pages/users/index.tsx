import { Table } from "antd";
import { useGetAllUsers } from "hooks/useGetAllUsers";

const Users = () => {
  const { data } = useGetAllUsers();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns} />
    </div>
  );
};

export default Users;
