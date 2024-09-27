import React, { useState } from "react";
import MenuUser from "./MenuUser";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const UserTemplate = (props) => {
  // const [collapsed, setCollapsed] = useState(false);

  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "fixed",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarColor: "unset",
  };

  return (
    <Layout className="h-screen" hasSider>
      <Sider
        style={siderStyle}
        theme="dark"
        // collapsible
        // collapsed={collapsed}
        // onCollapse={(value) => setCollapsed(value)}
      >
        <div className="h-full flex flex-col justify-center">
          <MenuUser />
        </div>
      </Sider>
      <Layout
        style={{
          marginInlineStart: 200,
          background: "#0E0E0E",
          color: "#fff",
        }}>
        <Content className="m-20 text-white">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserTemplate;
