import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import fpLogo from '../../assets/fplogo.png';
import { useOktaAuth } from '@okta/okta-react';

const NavHeader = () => {
  const { authService } = useOktaAuth();
  return (
    <div className="DashHeader">
      <img
        className="DashHeader_logo"
        src={fpLogo}
        alt="Family Promise of Spokane"
      />
      <Menu mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item className="Menu_Item" key="dashboard">
          <Link to="dashboard" />
          Dashboard
        </Menu.Item>
        <Menu.Item key="calandar">
          <Link to="/calendar" />
          Calendar
        </Menu.Item>
        <Menu.Item key="cases">
          <Link to="/cases" />
          Cases
        </Menu.Item>
        <Menu.Item key="resources">
          <Link to="resources" />
          Resources
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services" />
          Services
        </Menu.Item>
        <Menu.Item key="client-intake-form">
          <Link to="client-intake-form" />
          Intake
        </Menu.Item>
        <Menu.Item
          key="logout"
          onClick={() => {
            authService.logout();
          }}
        >
          <Link to="/" />
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavHeader;
