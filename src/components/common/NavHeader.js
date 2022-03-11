import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import fpLogo from '../../assets/fplogo.png';
import { useOktaAuth } from '@okta/okta-react';

const NavHeader = () => {
  const { authService } = useOktaAuth();
  return (
    <div className="NavHeader">
      <img
        className="NavHeader__logo"
        src={fpLogo}
        alt="Family Promise of Spokane"
      />
      <Menu
        className="NavHeader__Menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key="home">
          <Link to="/" />
          Home
        </Menu.Item>
        <Menu.Item>
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
        <Menu.Item>
          <Link to="resources" />
          Resources
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services" />
          Services
        </Menu.Item>
        <Menu.Item>
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
