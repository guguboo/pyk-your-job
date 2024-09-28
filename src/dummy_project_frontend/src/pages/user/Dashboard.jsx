import React from "react";
import PostedJobs from "../../components/User/PostedJobs";

const Dashboard = () => {
  return (
    <>
      <div className="flex-grow p-4">
        <PostedJobs />
        {/* <Jobs/> */}
      </div>
    </>
  );
};

export default Dashboard;
