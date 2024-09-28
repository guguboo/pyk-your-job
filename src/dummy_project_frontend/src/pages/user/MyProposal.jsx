import { Button, Divider, Table, Tag, Typography } from "antd";
import dayjs from "dayjs";
import { CheckCircleOutlined, SyncOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const { Paragraph, Title } = Typography;

const dummyData = [
  {
    key: 1,
    id: 1,
    creatorId: 1,
    completed: false,
    jobTitle: "Backend Developer",
    company: "Dark Web",
    deadlineEndDate: dayjs().add(-1, "d"),
    dealPayment: 12040210401,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
  },
  {
    key: 2, //samain sama id
    id: 2,
    creatorId: 1,
    completed: true,
    jobTitle: "Backend Developer 2",
    company: "Google",
    deadlineEndDate: new Date(),
    dealPayment: 1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
  },
];

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const MyProposal = () => {
  const [data, setData] = useState(dummyData);

  // ======== Ga ush perhatiin ini
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);
  // ======== Oke udh selesai yg anehnya

  // use when only 1 data is updated DO NOT USE IN BATCH
  const updateOneData = (index, newData) => {
    const tempData = [...data];
    tempData[index] = newData;
    setData(tempData);
  };

  const onSubmit = (e) => {
    console.log(e);
  };

  const columns = [
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Deadline",
      dataIndex: "deadlineEndDate",
      key: "deadlineEndDate",

      render: (date) => <>{dayjs(date).toString()}</>,
    },
    {
      title: "Payment",
      dataIndex: "dealPayment",
      key: "dealPayment",
      render: (num) => <>{USDollar.format(num)}</>,
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",

      render: (bool) => (
        <>
          {bool ? (
            <Tag icon={<CheckCircleOutlined />} color="success">
              Finished
            </Tag>
          ) : (
            <Tag icon={<SyncOutlined spin />} color="#54a6c7">
              Inprogress
            </Tag>
          )}
        </>
      ),
    },
    {
      title: "Operation",
      dataIndex: "op",
      key: "op",
      render: (_, record) => {
        return (
          <>
            {!record.completed && (
              <Button
                type="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  onSubmit(record);
                }}>
                Submit
              </Button>
            )}
          </>
        );
      },
    },
  ];
  return (
    <>
      <Title>My Proposal</Title>
      <Divider style={{ borderColor: "#fff" }} />
      <Table
        expandable={{
          expandRowByClick: true,
          onExpand: (expandable, record) => {
            console.log(expandable, record.id);
            if (expandable) {
              setExpandedRowKeys([...expandedRowKeys, record.id]);
            } else {
              setExpandedRowKeys(
                expandedRowKeys.filter((id) => record.id !== id)
              );
            }
          },
          expandedRowKeys,
          expandedRowRender: (record) => (
            <Paragraph
              style={{
                margin: 0,
              }}>
              {record.description}
            </Paragraph>
          ),
        }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};

export default MyProposal;
