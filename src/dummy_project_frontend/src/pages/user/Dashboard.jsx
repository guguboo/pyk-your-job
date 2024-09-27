import React from "react";
import MenuUser from "../components/User/MenuUser";
import JobCard from "../components/User/JobCard";
import Jobs from "../components/User/Jobs";
import PostedJobs from "../components/User/PostedJobs";

const Dashboard = () => {
  return (
    <>
      <div className="flex-grow p-4">
        <JobCard />
      </div>
      <div className="flex-grow p-4">
        <PostedJobs />
        {/* <Jobs/> */}
      </div>
    </>
  );
};

export default Dashboard;
