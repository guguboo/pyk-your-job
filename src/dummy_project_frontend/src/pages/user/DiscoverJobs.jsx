import { Divider, Typography, Input } from "antd";
import React, { useEffect, useState } from "react";
import JobCard from "../../components/User/JobCard";
import { jobs_backend } from 'declarations/jobs_backend';

const { Title } = Typography;
const { Search } = Input;

const DiscoverJobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [userId, setUserId] = useState('')


  const fetchJobs = async () => {
    try {
      const fetchedJobs = await jobs_backend.getJobs();
      // print(fetchedJobs);
      setJobs(fetchedJobs);
      setFilteredJobs(fetchedJobs); // Set filteredJobs initially to all jobs
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
  const onSearch = (value) => {
    setSearchQuery(value);
    // Filter jobs based on job title or company that matches the search query
    const lowercasedValue = value.toLowerCase();
    const filtered = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(lowercasedValue) ||
      job.company.toLowerCase().includes(lowercasedValue)
    );
    setFilteredJobs(filtered);
  };

  return (
    <>
      <Title>Discover New Jobs</Title>
      <Search placeholder="Search a new job" loading={loading} 
        onSearch={onSearch} // Trigger search when the user hits "Enter" or clicks search button
        onChange={(e) => onSearch(e.target.value)}
      />
      <Divider style={{ borderColor: "#fff" }} />
      <section className="grid grid-cols-4 gap-4">
        {filteredJobs.map((c) => (
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
