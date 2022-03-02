import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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
      </Menu>
    </>
  );
};

export default NavHeader;
