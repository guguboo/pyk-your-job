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
];

const MenuUser = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onClick = (e) => {
    // console.log("click ", e);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      selectedKeys={[selectedKey]}
      defaultOpenKeys={["jobMenu"]}
      mode="inline"
      items={items}
    />
  );
};

export default MenuUser;
