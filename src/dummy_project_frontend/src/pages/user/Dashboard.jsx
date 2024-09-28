import { Button, Divider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-6xl mb-4">Hello Welcome</h1>
      <p className="text-xl">
        To Start you can choose the menu on the left side
      </p>
      <Divider style={{ borderColor: "#fff" }} />
      <Button
        onClick={() => {
          navigate("/jobs/find");
        }}>
        Go to Job Discovery
      </Button>
    </>
  );
};

export default Dashboard;
