import React from "react";
import MenuUser from "../components/User/MenuUser";
import JobCard from "../components/User/JobCard";
import Jobs from "../components/User/Jobs";
import PostedJobs from "../components/User/PostedJobs";

const User = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-none w-full lg:w-1/4 p-4">
        <MenuUser />
      </div>
      <div className="flex-grow p-4">
        <JobCard />
      </div>
      <div className="flex-grow p-4">
        <PostedJobs />
        {/* <Jobs/> */}
      </div>
    </div>
  );
};

export default User;
