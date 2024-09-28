import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  SearchOutlined,
  AppstoreAddOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  {
    key: "/jobs/home",
    label: "Home",
    icon: <HomeOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "jobMenu",
    label: "Jobs",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "/jobs/find",
        label: "Discovery",
        icon: <SearchOutlined />,
      },
      {
        key: "/jobs/create",
        label: "Create Jobs",
        icon: <AppstoreAddOutlined />,
      },
      {
        key: "/jobs/proposal",
        label: "My Proposal",
        icon: <ContainerOutlined />,
      },
    ],
  },
  // {
  //   type: "divider",
  // },
  // {
  //   key: "/jobs/{number}", // add an id based on the jobs id
  //   label: "Home",
  //   icon: <HomeOutlined />,
  // },
];

const MenuUser = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    setSelectedKey(location.pathname);
    if (location.pathname == "/jobs") navigate("/jobs/home");
  }, [location.pathname]);

  const onClick = (e) => {
    // console.log("click ", e);
    navigate(e.key);
  };

  return (
    <Menu
      key={location.pathname} // Adding a key to force re-render
      onClick={onClick}
      theme="dark"
      style={{ background: "#141414" }}
      selectedKeys={[selectedKey]}
      defaultOpenKeys={["jobMenu"]}
      mode="inline"
      items={items}
    />
  );
};

export default MenuUser;
