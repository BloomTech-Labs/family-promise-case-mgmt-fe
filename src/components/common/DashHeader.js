import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import styled from 'styled-components';
import fpLogo from '../../assets/fplogo.png';
import PlaceholderProfileImage from '../../assets/PlaceholderProfileImage.png';
// import FormInput from './FormInput';
import SearchBar from './SearchBar/SearchBar';

const DashHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
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
<<<<<<< HEAD
    <div>
      <div className="DashHeader">
        <img
          className="DashHeader__logo"
          src={fpLogo}
          alt="Family Promise of Spokane"
        />
        {/* <FormInput
          placeholder="Find ...."
          name="searchInput"
          labelId="searchInput"
        /> */}
        <SearchBar />

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
=======
    <>
      <DashHeaderContainer>
        <Logo src={fpLogo} alt="Family Promise of Spokane" />
        <ProfileImage src={PlaceholderProfileImage} alt="Profile" />
      </DashHeaderContainer>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['dashboard']}>
>>>>>>> 0473dc2 (Updated Dashheader and fixed spacing issues (#91))
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
