import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';
import fpLogo from '../../assets/fplogo.png';
import PlaceholderProfileImage from '../../assets/PlaceholderProfileImage.png';
import SearchBar from './SearchBar/SearchBar';

const DashHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 1rem;
`;

const Logo = styled.img`
  height: 40px;
`;

const ProfileImage = styled.img`
  height: 40px;
  border-radius: 50%;
`;

const DashHeader = () => {
  return (
    <>
      <DashHeaderContainer>
        <Logo src={fpLogo} alt="Family Promise of Spokane" />
        <SearchBar />
        <ProfileImage src={PlaceholderProfileImage} alt="Profile" />
      </DashHeaderContainer>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['dashboard']}>
        <Menu.Item key="dashboard">
          <Link to="dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="calendar">
          <Link to="/calendar">Calendar</Link>
        </Menu.Item>
        <Menu.Item key="cases">
          <Link to="/cases">Cases</Link>
        </Menu.Item>
        <Menu.Item key="resources">
          <Link to="resources">Resources</Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="client-intake-form">
          <Link to="client-intake-form">Intake</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default DashHeader;
