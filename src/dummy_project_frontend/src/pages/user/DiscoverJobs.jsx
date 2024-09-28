import { Divider, Typography, Input } from "antd";
import React, { useState } from "react";
import JobCard from "../../components/User/JobCard";

const { Title } = Typography;
const { Search } = Input;

const jobsDef = [
  {
    id: 1,
    creatorId: 1,
    completed: false,
    jobTitle: "Backend Developer",
    company: "Dark Web",
    registrationEndDate: new Date(),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
  },
  {
    id: 2,
    creatorId: 1,
    completed: false,
    jobTitle: "Backend Developer 2",
    company: "Light Web",
    registrationEndDate: new Date(),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
  },
  {
    id: 3,
    creatorId: 1,
    completed: false,
    jobTitle: "Backend Developer 3",
    company: "Google",
    registrationEndDate: new Date(),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
  },
  {
    id: 4,
    creatorId: 1,
    completed: false,
    jobTitle: "Backend Developer 4",
    company: "Shoope",
    registrationEndDate: new Date(),
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
  },
];

const DiscoverJobs = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState(jobsDef);

  const onAddJob = ({ id }) => {
    // kalo butuh values lain dari array jobs tinggal tambah sebelah id kaya ({ id }) jadi ({ id, creatorId })
    console.log(id);
  };

  return (
    <>
      <Title>Discover New Jobs</Title>
      <Search placeholder="Search a new job" loading={loading} />
      <Divider style={{ borderColor: "#fff" }} />
      <section className="grid grid-cols-4 gap-4">
        {jobs.map((c) => (
          <JobCard key={c.id} {...c} onAddJob={onAddJob} loading={loading} />
        ))}
      </section>
    </>
  );
};

export default DiscoverJobs;
