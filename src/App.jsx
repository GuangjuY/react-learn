import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';
import logo from "./assets/logo.svg";
import "./App.css";
import DataTable from "./learn/DataTable.jsx";


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('用户管理', '1', <PieChartOutlined />),
    getItem('商品管理', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];



export default function App() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

  return (
      <Layout
          style={{
              minHeight: '100vh',
          }}
      >
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
              <div className="demo-logo-vertical">
                  <img src={logo} className="sidebar-logo" alt="logo"/>
                  <h1 className="sidebar-title">后台管理系统</h1>
              </div>
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>

          <Layout>
              <Header
                  style={{
                      padding: 0,
                      background: colorBgContainer,
                  }}
              />
              <Content>
                  <DataTable />
              </Content>
              <Footer
                  style={{
                      textAlign: 'center',
                  }}
              >
                  Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer>
          </Layout>
      </Layout>
  )
}
