import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function Navigation() {
  const [current, setCurrent] = useState(null);
  const { authService } = useOktaAuth();

  return (
    <Menu
      onClick={({ key }) => setCurrent(key)}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="home">
        <Link to="/" />
        Home
      </Menu.Item>
      <Menu.Item key="cases">
        <Link to="/cases" />
        Cases
      </Menu.Item>
      <Menu.Item key="calandar">
        <Link to="/calendar" />
        Calendar
      </Menu.Item>
      <Menu.Item key="resources">
        <Link to="/resources" />
        Staff Resources
      </Menu.Item>
      <Menu.Item key="services">
        <Link to="/services" />
        Services
      </Menu.Item>
      <Menu.Item
        key="logout"
        onClick={() => {
          authService.logout();
        }}
      >
        <Link to="/login" />
        Logout
      </Menu.Item>
    </Menu>
  );
}

export default Navigation;
