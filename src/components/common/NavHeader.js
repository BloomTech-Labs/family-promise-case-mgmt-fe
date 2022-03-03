import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import fpLogo from '../../assets/fplogo.png';

const NavHeader = () => {
  return (
    <div className="NavHeader">
      <img className="logo" src={fpLogo} alt="Family Promise of Spokane" />
      <Menu
        className="Menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
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
        <Menu.Item key="services">
          <Link to="/services" />
          Services
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavHeader;
