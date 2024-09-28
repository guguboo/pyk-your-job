import React, { useState } from "react";
import { Avatar, Card, Descriptions, Tooltip, Typography } from "antd";
import {
  FileAddOutlined,
  ShopOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import * as dayjs from "dayjs";

const { Paragraph } = Typography;
const { Meta } = Card;

const JobCard = (props) => {
  const {
    key,
    id,
    creatorId, // ga tau diapain
    completed, // ga tau diapain 2
    jobTitle,
    company,
    registrationEndDate,
    description,
    onAddJob,
    loading,
  } = props;
  //   const [ellipsis, setEllipsis] = useState(true);

  return (
    <Card
      loading={loading} // ini gw add aja, jadi cmn 1 state dmn semua card jd loading (biar cepet aja wkwk)
      actions={[<FileAddOutlined key="add" onClick={() => onAddJob(props)} />]}>
      <Meta
        avatar={
          <Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${id}`} />
        }
        title={jobTitle}
      />
      <div className="mb-4" />
      <div className="flex gap-2">
        <Tooltip title="Company">
          <ShopOutlined />
        </Tooltip>
        {company}
      </div>
      <div className="flex gap-2">
        <Tooltip title="Registration End Date">
          <FieldTimeOutlined />
        </Tooltip>
        {/* {dayjs(registrationEndDate).toString()} */}
      </div>
      <div className="mb-2" />
      <Paragraph style={{ marginBottom: 0 }}>{description}</Paragraph>
    </Card>
  );
};

export default JobCard;
