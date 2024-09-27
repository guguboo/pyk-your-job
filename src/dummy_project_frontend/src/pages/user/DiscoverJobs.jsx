import { Divider, Input, Table, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;
const { Search } = Input;

const jobs = [
  {
    id: 1,
    creatorId: 1,
    completed: false,
    jobTitle: "Backend Developer",
    company: "Dark Web",
    registrationEndDate: "",
  },
];

const DiscoverJobs = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Title>Discover New Jobs</Title>
      <Search placeholder="Search a new job" loading={loading} />
      <Divider style={{ borderColor: "#fff" }} />
    </>
  );
};

export default DiscoverJobs;
