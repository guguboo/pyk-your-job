import { Divider, Typography, Input } from "antd";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/User/JobCard";
import { jobs_backend } from 'declarations/jobs_backend';

const { Title } = Typography;
const { Search } = Input;

// const jobsDef = [
//   {
//     id: 1,
//     creatorId: 1,
//     completed: false,
//     jobTitle: "Backend Developer",
//     company: "Dark Web",
//     registrationEndDate: new Date(),
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
//   },
//   {
//     id: 2,
//     creatorId: 1,
//     completed: false,
//     jobTitle: "Backend Developer 2",
//     company: "Light Web",
//     registrationEndDate: new Date(),
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
//   },
//   {
//     id: 3,
//     creatorId: 1,
//     completed: false,
//     jobTitle: "Backend Developer 3",
//     company: "Google",
//     registrationEndDate: new Date(),
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
//   },
//   {
//     id: 4,
//     creatorId: 1,
//     completed: false,
//     jobTitle: "Backend Developer 4",
//     company: "Shoope",
//     registrationEndDate: new Date(),
//     description:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate incidunt similique sint architecto. Libero vero a ullam quo sint adipisci voluptas dolorem nesciunt praesentium commodi, earum totam dolorum omnis.",
//   },
// ];

const DiscoverJobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [userId, setUserId] = useState('')


  const fetchJobs = async () => {
    try {
      const fetchedJobs = await jobs_backend.getJobs();
      // print(fetchedJobs);
      setJobs(fetchedJobs);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };
  useEffect(() => {
    const id = jobs_backend.whoami()
    setUserId(id)
    fetchJobs();
}, []);

  const onAddJob = ({ id }) => {
    fetchJobs()
    console.log(id);
  };

  return (
    <>
      <Title>Discover New Jobs</Title>
      <Search placeholder="Search a new job" loading={loading} />
      <Divider style={{ borderColor: "#fff" }} />
      <section className="grid grid-cols-4 gap-4">
        {jobs.map((c) => (
          <JobCard 
            key={c.id} 
            id={c.id}
            creatorId={c.creatorId}
            completed={c.completed}
            jobTitle={c.jobTitle}
            company={c.company}
            registrationEndDate={c.registrationEndDate}
            description={c.description}
            onAddJob={onAddJob}
            loading={loading} 
          />
        ))}
      </section>
    </>
  );
};

export default DiscoverJobs;
