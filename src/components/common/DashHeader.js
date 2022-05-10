import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import fpLogo from '../../assets/fplogo.png';
import PlaceholderProfileImage from '../../assets/PlaceholderProfileImage.png';
const Header = () => {
  return (
    <div>
      <div className="DashHeader">
        <img
          className="DashHeader__logo"
          src={fpLogo}
          alt="Family Promise of Spokane"
        />
        <img
          className="Placeholder_ProfileLogo"
          src={PlaceholderProfileImage}
          alt="Profile"
        />
      </div>

      <Menu
        className="DashHeader_Nav"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <Menu.Item key="dashboard">
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
      </Menu>
    </div>
  );
};

export default Header;
