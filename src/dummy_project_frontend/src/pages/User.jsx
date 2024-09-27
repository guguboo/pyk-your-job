import React from "react";
import MenuUser from "../components/User/MenuUser";
import JobCard from "../components/User/JobCard";
import Jobs from "../components/User/Jobs";

const User = () => {
  return (
    <>
      <MenuUser />
      <JobCard />
      <Jobs/>
    </>
  );
};

export default User;
